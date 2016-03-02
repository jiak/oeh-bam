bamApp.controller('structureController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.structure = {

        model: dataService.structureModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
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

        calculateJohnCalc1: function(theObject, theObjectLower) {
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            var rawCurrentCondition = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc1" + theObject + " = " + (rawCurrentCondition + rawRestorationGain).toFixed(2))
        },

        calculateJohnCalc2: function(theObject, theObjectLower) {
            var johnCalc1 = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc1" + theObject)
            var dynamicWeightingMinusOther = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingMinusOther" + theObject + "Score")
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc2" + theObject + " = " + (johnCalc1 * dynamicWeightingMinusOther).toFixed(2))
        },

        calculateCurrentValueWithAddedConstant: function(theObject, theObjectLower, observedValue) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if(benchmark == 0) {
                result = 0
            } else {
                if(observedValue == 0) {
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
                this.calculateDynamicWeightingScoreMinusOther(theObject, theObjectLower)
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
                this.calculateNbpv(theObject, theObjectLower)
                this.calculateWeightedNbpv(theObject, theObjectLower)
                this.calculateWeightedNoDiscount(theObject, theObjectLower)
                this.calculateJohnCalc1(theObject, theObjectLower)
                this.calculateJohnCalc2(theObject, theObjectLower)
                this.calculateStructureOffsetSubtotalForFutureWithManagement()
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
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result.toFixed(2))
        },

        calculateRawTotalGain: function (theObject, theObjectLower) {
            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + (rawAvertedLoss + rawRestorationGain).toFixed(2))
        },

        calculateNbpv: function (theObject, theObjectLower) {
            var result = 0
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var rawTotalGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
            var discountRate = 3
            var managementTimeFrame = 20
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if (rawTotalGain == 0) {
                    result = 0
                } else {
                    result = rawTotalGain/(Math.pow(1 + (discountRate/100), managementTimeFrame))
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject + " = " + result.toFixed(2))
        },

        calculateWeightedNbpv: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var nbpv1 = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject)
                var dynamicWeighting = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
                result = nbpv1 * dynamicWeighting
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].weightedNbpv" + theObject + " = " + result.toFixed(2))
        },

        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var rawTotalGain = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
                var dynamicWeightingMinusOther = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingMinusOther" + theObject + "Score")
                result = rawTotalGain * dynamicWeightingMinusOther
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result.toFixed(2))
        },

        calculateFutureConditionWithOffset: function (theObject, theObjectLower) {
            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var n11FutureValueWithOffset = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject)
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if (n11FutureValueWithOffset > c11Benchmark) {
                    result = ((100 + 50) - (50 + (100 - 50) / (1 + Math.exp(-10 * ((n11FutureValueWithOffset / c11Benchmark) - 1.5)))))
                } else {
                    result = Math.pow(1.01 * (1 - Math.exp(-4.4 * (n11FutureValueWithOffset / c11Benchmark))), 1.85) * 100
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result.toFixed(2))
        },

        calculateFutureValueWithOffset: function (theObject, theObjectLower) {
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            var highThreadWeedCover = true
            var currentValueWithAddedConstant = eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject)
            var rValue = 0.5
            var managementTimeFrame = 20
            var restorationModifier = 0.966
            var result = 0
            if (benchmark == 0) {
                result = 0
            } else {
                if (!highThreadWeedCover) {
                    result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
                } else {
                    var someVal = 0.2
                    if(theObject == 'GrassAndGrassLike') {
                        someVal = 0.1
                    } else if (theObject == 'Forb' || theObject == 'Fern') {
                        someVal = 0.05
                    }
                    result = (benchmark * (currentValueWithAddedConstant + (benchmark * someVal) * restorationModifier) * Math.exp((rValue) * managementTimeFrame)) / (benchmark + (currentValueWithAddedConstant + (benchmark * 0.2) * restorationModifier) * (Math.exp((rValue) * managementTimeFrame) - 1))
                }
            }
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result.toFixed(2))
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
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result.toFixed(2))
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
            eval("this.model.offsetFutureWithManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result.toFixed(2))
        },

        displayFutureWithManagement: function () {
            if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                this.updateCalcsFor('Tree', -1)
                this.updateCalcsFor('Shrub', -1)
                this.updateCalcsFor('Fern', -1)
                this.updateCalcsFor('Forb', -1)
                this.updateCalcsFor('GrassAndGrassLike', -1)
                return true;
            } else {
                return false
            }
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
            var dynamicWeighting = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            //var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeighting).toFixed(2)
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
                    result = (1.01 * (1 - Math.exp((-4.4 * Math.pow(futureValueWithoutOffset / benchmark, 1.85)))) * 100)
                }
            }
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result.toFixed(2))
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
            var result = 0
            var observedValue = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))").toFixed(2)
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentStructure().structureTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            eval("this.getCurrentStructure().observedMean" + theObject + " = observedMean / this.getCurrentStructure().structureTransects.length")
        },

        calculateWeightedStructureScore: function (theObject, theObjectLower) {
            eval("this.getCurrentStructure().weighted" + theObject + "Score = Math.round(this.getCurrentStructure().unweighted" + theObject + "Score * this.getCurrentStructure().dynamicWeighting" + theObject + "Score)")
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentStructure().structureTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            eval("this.getCurrentStructure().observedMean" + theObject + " = observedMean / this.getCurrentStructure().structureTransects.length")
        },

        calculateWeightedStructureScore: function (theObject, theObjectLower) {
            eval("this.getCurrentStructure().weighted" + theObject + "Score = Math.round(this.getCurrentStructure().unweighted" + theObject + "Score * this.getCurrentStructure().dynamicWeighting" + theObject + "Score)")
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval("this.getCurrentStructure().dynamicWeighting" + theObject + "Score = (benchmarks." + theObjectLower + "Cover / sumOfBenchmarkScores).toFixed(2)")
        },

        calculateDynamicWeightingScoreMinusOther: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property) && property.indexOf("Other") == -1) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval("this.getCurrentStructure().dynamicWeightingMinusOther" + theObject + "Score = (benchmarks." + theObjectLower + "Cover / sumOfBenchmarkScores).toFixed(2)")
        },

        calculateUnweightedStructureScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.getBenchmark()
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval("benchmarks." + theObjectLower + "Cover")) {
                    returnValue = (
                    (100 + 50) - (50 + ((100 - 50)
                    /
                    (1 + Math.exp(-10 * ((observedValue / eval("benchmarks." + theObjectLower + "Cover") - 1.5)))))))
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 1.85))) * 100
                    );
                    returnValue = (1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 1.85))) * 100);
                }
            }
            eval("this.getCurrentStructure().unweighted" + theObject + "Score = Math.round(returnValue)")
        },

        calculateStructureOffsetSubtotalForFutureWithManagement: function () {
            var total = 0
            var c = this.getCurrentStructure()
            total += c.johnCalc2Tree
            total += c.johnCalc2Shrub
            total += c.johnCalc2GrassAndGrassLike
            total += c.johnCalc2Forb
            total += c.johnCalc2Fern
            c.structureSubtotal = total.toFixed(0)
        },

        calculateStructureOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentStructure()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetShrub
            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
            total += c.adjustedConditionWithoutOffsetForb
            total += c.adjustedConditionWithoutOffsetFern
            c.structureSubtotal = total.toFixed(0)
        },

        calculateStructureSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentStructure()) {
                if (this.getCurrentStructure().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.getCurrentStructure()[property]
                }
            }
            this.getCurrentStructure().structureSubtotal = total.toFixed(0)
        },

        createStructureTransect: function () {
            return {
                tree: null,
                shurb: null,
                grassAndGrassLike: null,
                forb: null,
                fern: null,
                other: null
            }
        },

        addStructureTransect: function () {
            if (this.getCurrentStructure() == undefined) {
                this.addStructureCalcResults()
            }
            this.getCurrentStructure().structureTransects.push(this.createStructureTransect())
        }
    }

    if (this.structure.getApplicableCalcResults()[this.structure.model.inFocusVegetationZoneIndex].structureTransects.length == 0) {
        this.structure.addStructureTransect()
    }

}])
