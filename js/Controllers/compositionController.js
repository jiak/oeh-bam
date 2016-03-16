bamApp.controller('compositionController', ["$scope", "$rootScope", "$uibModal", "dataService", "calculationService", function ($scope, $rootScope, $uibModal, dataService, calculationService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.openCalculatorEvent, function (event, body) {
        if (dataService.applicationDetailsModel.assessmentType.name == 'Offset' && body.calculatorMode == 'offsetFutureWithManagement') {
            $scope.cc.composition.updateFutureWithManagement()
        } else if(body.calculatorMode == 'future') {
            $scope.cc.composition.updateFutureValuesInDevelopmentMode()
        }
    })

    this.composition = {

        model: dataService.compositionModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
            var body = dataService.events.createRecalculateVisEvent()
            $rootScope.$emit(dataService.events.recalculateVisEvent, body)
        },

        getApplicableCalcResults: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.compositionCalcResults
            } else if (this.model.calculatorMode == 'future') {
                return this.model.futureCompositionCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                return this.model.offsetFutureWithoutManagementCompositionCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                return this.model.offsetFutureWithManagementCompositionCalcResults
            }
        },

        getCurrentComposition: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        },

        addCompositionCalcResults: function () {
            this.getApplicableCalcResults().push(this.createCompositionCalcResults())
        },

        createCompositionCalcResults: function () {
            return dataService.compositionModel.createCompositionCalcResult()
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            if (this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future') {
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateDynamicWeightingGain(theObject, theObjectLower)
                this.calculateUnweightedCompositionScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedCompositionScore(theObject, theObjectLower)
                this.calculateCompositionSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                this.calculateFutureValueWithoutOffset(theObject, theObjectLower, observedValue)
                this.calculateFutureConditionWithoutOffset(theObject, theObjectLower)
                this.calculateAdjustedConditionWithoutOffset(theObject, theObjectLower)
                this.calculateCompositionOffsetSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                this.calculateCurrentValueWithAddedConstant(theObject, theObjectLower)
                this.calculateFutureValueWithOffset(theObject, theObjectLower)
                this.calculateFutureConditionWithOffset(theObject, theObjectLower)
                this.calculateRawAvertedLoss(theObject, theObjectLower)
                this.calculateRawRestorationGain(theObject, theObjectLower)
                this.calculateRawTotalGain(theObject, theObjectLower)
                this.calculateWeightedNoDiscount(theObject, theObjectLower)
                this.calculateWeightedConditionWithOffset(theObject, theObjectLower)
            }
        },

        calculateRawRestorationGain: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                futureConditionWithOffset = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject)
                rawCurrentCondition = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                result = futureConditionWithOffset - rawCurrentCondition
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result)
        },

        calculateRawTotalGain: function (theObject, theObjectLower) {
            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            result = rawAvertedLoss + rawRestorationGain
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + result)
        },

        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var rawTotalGain = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
                var dynamicWeightingGain = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
                result = rawTotalGain * dynamicWeightingGain
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result)
        },

        calculateFutureConditionWithOffset: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            var n11FutureValueWithOffset = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject)
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if (n11FutureValueWithOffset > c11Benchmark) {
                    result = 100
                } else {
                    result = (1.01 * (1 - Math.exp(-5 * Math.pow(n11FutureValueWithOffset / c11Benchmark, 2.5))) * 100)
                }
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithOffset: function (theObject, theObjectLower) {
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject);
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            var supplimentaryPlanting = "Absent"
            var numberOfSpeciesPlanted = 0.75 * benchmark
            if (theObject == 'Tree' || theObject == 'Shrub') {
                supplimentaryPlanting = "Present"
            }
            var currentValueWithAddedConstant = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject)
            viScore = dataService.offsetModel.input.vegetationZones[this.model.inFocusVegetationZoneIndex].currentVis
            rValue = calculationService.getCompositionRValue(theObject, viScore)
            var managementTimeFrame = 20
            restorationModifier = calculationService.getRestorationModifierForPlanting(viScore)
            var result = 0
            if (benchmark == 0) {
                result = 0
            } else {
                if (observedValue > benchmark) {
                    result = observedValue;
                } else {
                    if (supplimentaryPlanting == 'Absent') {
                        result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
                    } else {
                        var someVal = 0.75
                        if (theObject == 'GrassAndGrassLike') {
                            someVal = 0.33
                        } else if (theObject == 'Forb') {
                            someVal = 0.2
                        } else if (theObject == 'Fern') {
                            someVal = 0.2
                        }
                        result = (restorationModifier * numberOfSpeciesPlanted * someVal) + (benchmark * (currentValueWithAddedConstant) * Math.exp((rValue) * managementTimeFrame)) / (benchmark + (currentValueWithAddedConstant) * (Math.exp((rValue) * managementTimeFrame) - 1))
                    }

                }
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result)
        },

        calculateRawAvertedLoss: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            if (benchmark == 0) {
                result = 0
            } else {
                var rawCurrentCondition = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
                result = rawCurrentCondition - futureConditionWithoutOffset
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result)
        },

        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            if (benchmark == 0) {
                result = 0
            } else {
                if (observedValue == 0) {
                    result = observedValue + (benchmark * 0.01)
                } else {
                    result = observedValue
                }
            }
            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result)
        },

        displayFutureWithManagement: function () {
            return this.model.calculatorMode == 'offsetFutureWithManagement'
        },

        updateFutureValuesInDevelopmentMode: function() {
            if(this.getCurrentComposition().compositionTransects.length == 0) {
                this.getCurrentComposition().compositionTransects.push(this.createCompositionTransect())
            }
            this.updateCalcsFor('Tree', 0)
            this.updateCalcsFor('Shrub', 0)
            this.updateCalcsFor('Fern', 0)
            this.updateCalcsFor('Forb', 0)
            this.updateCalcsFor('GrassAndGrassLike', 0)
            this.updateCalcsFor('Other', 0)
            this.calculateCompositionSubtotal()
        },

        updateFutureWithManagement: function () {
            this.updateCalcsFor('Tree', -1)
            this.updateCalcsFor('Shrub', -1)
            this.updateCalcsFor('Fern', -1)
            this.updateCalcsFor('Forb', -1)
            this.updateCalcsFor('GrassAndGrassLike', -1)
            this.updateCalcsFor('Other', -1)
            this.calculateCompositionOffsetSubtotalForFutureWithManagement()
        },

        displayFutureWithoutManagement: function () {
            return this.model.calculatorMode == 'offsetFutureWithoutManagement'
        },

        isOffsetMode: function () {
            return this.model.calculatorMode == 'offsetFutureWithoutManagement' || this.model.calculatorMode == 'offsetFutureWithManagement'
        },

        isDevelopmentMode: function () {
            return this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future'
        },

        calculateAdjustedConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeightingGain = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeightingGain)
            }
            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            if (observedValue == 0) {
                result = 0
            } else {
                var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
                if (observedValue > benchmark) {
                    result = 100
                } else {
                    var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                    result = (1.01 * (1 - Math.exp(-5 * Math.pow(futureValueWithoutOffset / benchmark, 2.5))) * 100)
                }
            }
            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
            var result = 0
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))")
            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentComposition().compositionTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            result = observedMean / this.getCurrentComposition().compositionTransects.length
            eval("this.getCurrentComposition().observedMean" + theObject + " = " + result)
        },

        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
            unweightedScore = eval("this.getCurrentComposition().unweighted" + theObject + "Score")
            dynamicWeightingGainScore = eval("this.getCurrentComposition().dynamicWeighting" + theObject + "Score")
            result = unweightedScore * dynamicWeightingGainScore
            eval("this.getCurrentComposition().weighted" + theObject + "Score = " + result)
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            result = eval("benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores")
            eval("this.getCurrentComposition().dynamicWeighting" + theObject + "Score = " + result)
        },

        calculateDynamicWeightingGain: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property) && property.indexOf("other") == -1) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            result = eval("benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores")
            eval("this.getCurrentComposition().dynamicWeightingGain" + theObject + "Score = " + result)
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval("benchmarks." + theObjectLower + "Composition")) {
                    returnValue = (100);
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-5.0 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Composition"), 2.50))) * 100
                    );
                }
            }
            eval("this.getCurrentComposition().unweighted" + theObject + "Score = " + returnValue)
        },

        calculateCompositionOffsetSubtotalForFutureWithManagement: function () {
            var total = 0
            var c = this.getCurrentComposition()
            total += c.weightedConditionWithOffsetTree
            total += c.weightedConditionWithOffsetShrub
            total += c.weightedConditionWithOffsetGrassAndGrassLike
            total += c.weightedConditionWithOffsetForb
            total += c.weightedConditionWithOffsetFern
            c.compositionSubtotal = total
        },

        calculateCompositionOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentComposition()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetShrub
            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
            total += c.adjustedConditionWithoutOffsetForb
            total += c.adjustedConditionWithoutOffsetFern
            c.compositionSubtotal = total
        },

        calculateCompositionSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentComposition()) {
                if (this.getCurrentComposition().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.getCurrentComposition()[property]
                }
            }
            this.getCurrentComposition().compositionSubtotal = total
        },

        createCompositionTransect: function () {
            return {
                tree: 0,
                shrub: 0,
                grassAndGrassLike: 0,
                forb: 0,
                fern: 0,
                other: 0
            }
        },

        addCompositionTransect: function () {
            if (this.getCurrentComposition() == undefined) {
                this.addCompositionCalcResults();
            }
            this.getCurrentComposition().compositionTransects.push(this.createCompositionTransect())
        },

        calculateWeightedConditionWithOffset: function (theObject, theObjectLower) {
            dynamicWeightingGainScore = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
            futureConditionWithOffset = eval("this.getCurrentComposition().futureConditionWithOffset" + theObject)
            result = (dynamicWeightingGainScore * futureConditionWithOffset)
            eval("this.getCurrentComposition().weightedConditionWithOffset" + theObject + " = " + result)
            return result
        },
    }

    if (this.composition.getApplicableCalcResults()[this.composition.model.inFocusVegetationZoneIndex].compositionTransects.length == 0) {
        this.composition.addCompositionTransect()
    }

}]);