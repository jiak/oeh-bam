bamApp.controller('structureController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", "calculationService", function ($scope, $rootScope, referenceDataService, dataService, $uibModal, calculationService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.openCalculatorEvent, function (event, body) {
        if (dataService.applicationDetailsModel.assessmentType.name == 'Offset' && body.calculatorMode == 'offsetFutureWithManagement') {
            $scope.sc.structure.updateFutureWithManagement()
        } else if(body.calculatorMode == 'future') {
            $scope.sc.structure.updateFutureValuesInDevelopmentMode()
        }
    })

    this.structure = {

        model: dataService.structureModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
            var body = dataService.events.createRecalculateVisEvent()
            $rootScope.$emit(dataService.events.recalculateVisEvent, body)
        },

        updateFutureValuesInDevelopmentMode: function() {
            if(this.getCurrentStructure().structureTransects.length == 0) {
                this.getCurrentStructure().structureTransects.push(this.createStructureTransect())
            }
            this.updateCalcsFor('Tree', 0)
            this.updateCalcsFor('Shrub', 0)
            this.updateCalcsFor('Fern', 0)
            this.updateCalcsFor('Forb', 0)
            this.updateCalcsFor('GrassAndGrassLike', 0)
            this.updateCalcsFor('Other', 0)
            this.calculateStructureSubtotal()
        },

        getApplicableCalcResults: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.structureCalcResults
            } else if (this.model.calculatorMode == 'future') {
                return this.model.futureStructureCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                return this.model.offsetFutureWithoutManagementStructureCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                return this.model.offsetFutureWithManagementStructureCalcResults
            }
        },

        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower, observedValue) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                if (observedValue == 0) {
                    result = observedValue + (benchmark * 0.01)
                } else {
                    result = observedValue
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result)
        },

        getCurrentStructure: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        },

        addStructureCalcResults: function () {
            this.getApplicableCalcResults().push(this.createStructureCalcResults())
        },

        createStructureCalcResults: function () {
            return dataService.structureModel.createStructureCalcResult()
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            if (this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future') {
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateDynamicWeightingGain(theObject, theObjectLower)
                this.calculateUnweightedStructureScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedStructureScore(theObject, theObjectLower)
                this.calculateStructureSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                this.calculateFutureValueWithoutOffset(theObject, theObjectLower, observedValue)
                this.calculateFutureConditionWithoutOffset(theObject, theObjectLower)
                this.calculateAdjustedConditionWithoutOffset(theObject, theObjectLower)
                this.calculateStructureOffsetSubtotal()
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
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                futureConditionWithOffset = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject)
                rawCurrentCondition = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                result = futureConditionWithOffset - rawCurrentCondition
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result)
        },

        calculateRawTotalGain: function (theObject, theObjectLower) {
            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            result = rawAvertedLoss + rawRestorationGain
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + result)
        },

        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var rawTotalGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
                var dynamicWeightingGain = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
                result = rawTotalGain * dynamicWeightingGain
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result)
        },

        calculateFutureConditionWithOffset: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var n11FutureValueWithOffset = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject)
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if(theObject == 'Forb' || theObject == 'Fern') {
                    result = 1.01 * (1 - Math.exp(-5 * Math.pow((n11FutureValueWithOffset / c11Benchmark), 2.5))) * 100
                } else {
                    if (n11FutureValueWithOffset > c11Benchmark) {
                        result = ((100 + 50) - (50 + (100 - 50) / (1 + Math.exp(-10 * ((n11FutureValueWithOffset / c11Benchmark) - 1.5)))))
                    } else {
                        result = 1.01 * (1 - Math.exp(-5 * Math.pow((n11FutureValueWithOffset / c11Benchmark), 2.5))) * 100
                    }
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithOffset: function (theObject, theObjectLower) {
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var observedValue = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            var currentValueWithAddedConstant = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject)
            var supplimentaryPlanting = "Absent"
            if (theObject == 'Tree' || theObject == 'Shrub') {
                supplimentaryPlanting = "Present"
            }
            viScore = dataService.offsetModel.input.vegetationZones[this.model.inFocusVegetationZoneIndex].currentVis
            rValue = calculationService.getStructureRValue(theObject, viScore)
            var managementTimeFrame = 20
            restorationModifier = restorationModifier = calculationService.getRestorationModifierForPlanting(viScore)
            var result = 0
            if (benchmark == 0) {
                result = 0
            } else {
                if (theObject == 'Tree' && observedValue > benchmark) {
                    result = observedValue;
                } else {
                    if (supplimentaryPlanting == 'Absent') {
                        result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
                    } else {
                        var someVal = 0.2
                        if (theObject == 'GrassAndGrassLike') {
                            someVal = 0.1
                        } else if (theObject == 'Forb' || theObject == 'Fern') {
                            someVal = 0.05
                        }
                        result = (benchmark * (currentValueWithAddedConstant + (benchmark * someVal) * restorationModifier) * Math.exp((rValue) * managementTimeFrame)) / (benchmark + (currentValueWithAddedConstant + (benchmark * someVal) * restorationModifier) * (Math.exp((rValue) * managementTimeFrame) - 1))
                    }
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result)
        },

        calculateRawAvertedLoss: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                var rawCurrentCondition = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
                result = rawCurrentCondition - futureConditionWithoutOffset
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result)
        },

        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var observedValue = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            if (benchmark == 0) {
                result = 0
            } else {
                if (observedValue == 0) {
                    result = observedValue + (benchmark * 0.01)
                } else {
                    result = observedValue
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result)
        },

        displayFutureWithManagement: function () {
            return this.model.calculatorMode == 'offsetFutureWithManagement'
        },

        updateFutureWithManagement: function () {
            this.updateCalcsFor('Tree', -1)
            this.updateCalcsFor('Shrub', -1)
            this.updateCalcsFor('Fern', -1)
            this.updateCalcsFor('Forb', -1)
            this.updateCalcsFor('GrassAndGrassLike', -1)
            this.calculateStructureOffsetSubtotalForFutureWithManagement()
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
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeightingGain = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeightingGain)
                eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
            }
        },

        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                if (futureValueWithoutOffset > benchmark) {
                    result = ((100 + 50) - (50 + ((100 - 50) / (1 + Math.exp(-10 * ((futureValueWithoutOffset / benchmark) - 1.5))))))
                } else {
                    result = (1.01 * (1 - Math.exp((-5 * Math.pow(futureValueWithoutOffset / benchmark, 2.5)))) * 100)
                }
            }
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
            var result = 0
            var observedValue = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))")
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentStructure().structureTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower)
            })
            result = observedMean / this.getCurrentStructure().structureTransects.length
            eval("this.getCurrentStructure().observedMean" + theObject + " = " + result)
        },

        calculateWeightedStructureScore: function (theObject, theObjectLower) {
            unweightedScore = eval("this.getCurrentStructure().unweighted" + theObject + "Score")
            dynamicWeightingGainScore = eval("this.getCurrentStructure().dynamicWeighting" + theObject + "Score")
            result = unweightedScore * dynamicWeightingGainScore
            eval("this.getCurrentStructure().weighted" + theObject + "Score = " + result)
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
            result = eval("benchmarks." + theObjectLower + "Cover") / sumOfBenchmarkScores
            eval("this.getCurrentStructure().dynamicWeighting" + theObject + "Score = " + result)
        },

        calculateDynamicWeightingGain: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property) && property.indexOf("other") == -1) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            result = eval("benchmarks." + theObjectLower + "Cover") / sumOfBenchmarkScores
            eval("this.getCurrentStructure().dynamicWeightingGain" + theObject + "Score = " + result)
        },

        calculateUnweightedStructureScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.getBenchmark()
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                switch (theObjectLower) {
                    case "forb":
                    case "fern" :
                    case "other":
                        returnValue = (1.01 * (1 - Math.exp(-5 * Math.pow((observedValue / eval("benchmarks." + theObjectLower + "Cover")), 2.5))) * 100);
                        break;
                    default:
                        if (observedValue > eval("benchmarks." + theObjectLower + "Cover")) {
                            returnValue = (
                            (100 + 50) - (50 + ((100 - 50)
                            /
                            (1 + Math.exp(-10 * ((observedValue / eval("benchmarks." + theObjectLower + "Cover") - 1.5)))))))
                        } else {
                            returnValue = (
                                1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 2.5))) * 100
                            );
                            returnValue = (1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 2.5))) * 100);
                        }

                }
            }
            eval("this.getCurrentStructure().unweighted" + theObject + "Score = " + returnValue)
        },

        calculateStructureOffsetSubtotalForFutureWithManagement: function () {
            var total = 0
            var c = this.getCurrentStructure()
            total += c.weightedConditionWithOffsetTree
            total += c.weightedConditionWithOffsetShrub
            total += c.weightedConditionWithOffsetGrassAndGrassLike
            total += c.weightedConditionWithOffsetForb
            total += c.weightedConditionWithOffsetFern
            c.structureSubtotal = total
        },

        calculateStructureOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentStructure()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetShrub
            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
            total += c.adjustedConditionWithoutOffsetForb
            total += c.adjustedConditionWithoutOffsetFern
            c.structureSubtotal = total
        },

        calculateStructureSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentStructure()) {
                if (this.getCurrentStructure().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.getCurrentStructure()[property]
                }
            }
            this.getCurrentStructure().structureSubtotal = total
        },

        createStructureTransect: function () {
            return {
                tree: 0,
                shrub: 0,
                grassAndGrassLike: 0,
                forb: 0,
                fern: 0,
                other: 0
            }
        },

        addStructureTransect: function () {
            if (this.getCurrentStructure() == undefined) {
                this.addStructureCalcResults()
            }
            this.getCurrentStructure().structureTransects.push(this.createStructureTransect())
        },

        calculateWeightedConditionWithOffset: function (theObject, theObjectLower) {
            dynamicWeightingGainScore = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingGain" + theObject + "Score")
            futureConditionWithOffset = eval("this.getCurrentStructure().futureConditionWithOffset" + theObject)
            result = (dynamicWeightingGainScore * futureConditionWithOffset)
            eval("this.getCurrentStructure().weightedConditionWithOffset" + theObject + " = " + result)
            return result
        }
    }

    if (this.structure.getApplicableCalcResults()[this.structure.model.inFocusVegetationZoneIndex].structureTransects.length == 0) {
        this.structure.addStructureTransect()
    }

}])
