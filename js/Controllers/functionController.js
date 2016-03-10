bamApp.controller('functionController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", "calculationService", function ($scope, $rootScope, referenceDataService, dataService, $uibModal, calculationService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.openCalculatorEvent, function (event, body) {
        if(dataService.applicationDetailsModel.assessmentType.name == 'Offset' && body.calculatorMode == 'offsetFutureWithManagement') {
            $scope.fc.function.updateFutureWithManagement()
        }
    })

    this.function = {

        model: dataService.functionModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
            var body = dataService.events.createRecalculateVisEvent()
            $rootScope.$emit(dataService.events.recalculateVisEvent, body)
        },

        getApplicableCalcResults: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.functionCalcResults
            } else if (this.model.calculatorMode == 'future') {
                return this.model.futureFunctionCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                return this.model.offsetFutureWithoutManagementFunctionCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                return this.model.offsetFutureWithManagementFunctionCalcResults
            }
        },

        getCurrentFunction: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        },

        addFunctionCalcResults: function () {
            this.getApplicableCalcResults().push(this.createFunctionCalcResults())
        },

        createFunctionCalcResults: function () {
            return dataService.functionModel.createFunctionCalcResult()
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            if (this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future') {
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateUnweightedFunctionScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedFunctionScore(theObject, theObjectLower)
                this.calculateFunctionSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                this.calculateFutureValueWithoutOffset(theObject, theObjectLower, observedValue)
                this.calculateFutureConditionWithoutOffset(theObject, theObjectLower)
                this.calculateAdjustedConditionWithoutOffset(theObject, theObjectLower)
                this.calculateFunctionOffsetSubtotal()
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
            var c11Benchmark
            if (theObject == 'RegenerationPresent') {
                c11Benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                futureConditionWithOffset = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject)
                rawCurrentCondition = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                result = futureConditionWithOffset - rawCurrentCondition
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result)
        },

        calculateRawTotalGain: function (theObject, theObjectLower) {
            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            result = rawAvertedLoss + rawRestorationGain
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + result)
        },

        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
            var c11Benchmark
            if (theObject == 'RegenerationPresent') {
                c11Benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var rawTotalGain = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
                var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score") / 0.85
                result = rawTotalGain * dynamicWeighting
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result)
        },

        calculateFutureConditionWithOffset: function (theObject, theObjectLower) {
            var c11Benchmark = 0
            if (theObject == 'RegenerationPresent') {
                if (this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration == 'present') {
                    c11Benchmark = 1
                } else {
                    c11Benchmark = 0
                }
            } else {
                c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var n11FutureValueWithOffset = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject)
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if (theObject == 'RegenerationPresent') {
                    result = (1.01 * (1 - Math.exp(-5 * (n11FutureValueWithOffset / c11Benchmark), 2.5)) * 100)
                } else {
                    if (n11FutureValueWithOffset > c11Benchmark) {
                        result = 100
                    } else {
                        result = (1.01 * (1 - Math.exp(-5 * Math.pow(n11FutureValueWithOffset / c11Benchmark, 2.5))) * 100)
                    }
                }
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithOffset: function (theObject, theObjectLower) {
            var result = 0
            if (theObject == 'NumberOfLargeTrees') {
                result = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            } else if (theObject == 'LitterCover' || theObject == 'CoarseWoodyDebris') {
                var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
                var supplimentaryPlanting = "Absent"
                var currentValueWithAddedConstant = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject)
                rValue = calculationService.getFunctionRValue(theObject, dataService.offsetModel.input.vegetationZones[this.model.inFocusVegetationZoneIndex].offsetFutureWithManagementVis)
                var managementTimeFrame = 20
                var benefitForPlanting = 0
                var result = 0
                if (benchmark == 0) {
                    result = 0
                } else {
                    var observedValue = parseInt(eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject))
                    if(observedValue > benchmark) {
                        result = observedValue
                    } else {
                        if (supplimentaryPlanting == 'Absent') {
                            result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
                        } else {
                            result = (benchmark * (currentValueWithAddedConstant + benchmark * 0.01) *
                                Math.exp((rValue + benefitForPlanting) * managementTimeFrame)) / (benchmark + (currentValueWithAddedConstant + benchmark * 0.01) *
                                (Math.exp((rValue + benefitForPlanting) * managementTimeFrame) - 1))
                        }
                    }
                }
            } else if (theObject == 'RegenerationPresent') {
                result = 1.0
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result)
        },

        calculateRawAvertedLoss: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = 0
            if (theObject == 'RegenerationPresent') {
                if (this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration == 'present') {
                    benchmark = 1
                } else {
                    benchmark = 0
                }
            } else {
                benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            if (benchmark == 0) {
                result = 0
            } else {
                var rawCurrentCondition = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
                var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
                result = rawCurrentCondition - futureConditionWithoutOffset
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result)
        },

        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower) {
            var result = 0
            var benchmark
            if (theObject == 'RegenerationPresent') {
                benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var observedValue = parseInt(eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject))
            if (benchmark == 0) {
                result = 0
            } else {
                if (observedValue == 0) {
                    result = observedValue + (benchmark * 0.01)
                } else {
                    result = observedValue
                }
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result)
        },

        displayFutureWithManagement: function () {
            return this.model.calculatorMode == 'offsetFutureWithManagement'
        },

        updateFutureWithManagement: function () {
            this.updateCalcsFor('NumberOfLargeTrees', -1)
            this.updateCalcsFor('LitterCover', -1)
            this.updateCalcsFor('CoarseWoodyDebris', -1)
            this.updateCalcsFor('RegenerationPresent', -1)
            this.calculateFunctionOffsetSubtotalForFutureWithManagement()
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
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            var benchmark
            if (theObject == 'RegenerationPresent') {
                benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeighting)
                eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
            }
        },

        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var observedValue = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            if (theObject == 'RegenerationPresent') {
                benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration == 'present' ? 1 : 0
            }
            if (theObject == 'RegenerationPresent' || theObject == 'StemSizeClasses') {
                if (benchmark == 0) {
                    result = 0
                } else {
                    result = (1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / benchmark, 2.5))) * 100)
                }
            } else {
                if (observedValue == 0) {
                    result = 0
                } else {

                    if (observedValue > benchmark) {
                        result = 100
                    } else {
                        var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                        result = (1.01 * (1 - Math.exp(-5 * Math.pow(futureValueWithoutOffset / benchmark, 2.5))) * 100)
                    }
                }
            }
            eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
            var result = 0
            var observedValue = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))")
            eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentFunction().functionTransects.forEach(function (element) {
                eval("observedMean += parseInt(element." + theObjectLower + ")")
            })
            eval("this.getCurrentFunction().observedMean" + theObject + " = (observedMean / this.getCurrentFunction().functionTransects.length)")
        },

        calculateWeightedFunctionScore: function (theObject, theObjectLower) {
            if (theObject == "RegenerationPresent") {
                if (this.getBenchmark().regeneration == 'absent') {
                    return;
                }
            }
            unweightedScore = eval("this.getCurrentFunction().unweighted" + theObject + "Score")
            dynamicWeightingScore = eval("this.getCurrentFunction().dynamicWeighting" + theObject + "Score")
            result = unweightedScore * dynamicWeightingScore
            eval("this.getCurrentFunction().weighted" + theObject + "Score = " + result)
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var value = 0
            if (theObject == "NumberOfLargeTrees") {
                value = 0.35
            } else if (theObject == "LitterCover") {
                value = 0.15
            } else if (theObject == "CoarseWoodyDebris") {
                value = 0.20
            } else if (theObject == "StemSizeClasses") {
                value = 0.15
            } else if (theObject == "RegenerationPresent") {
                value = 0.15
            }
            eval("this.getCurrentFunction().dynamicWeighting" + theObject + "Score = " + value)
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]
        },

        calculateUnweightedFunctionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.getBenchmark()
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                switch (theObject) {
                    case "NumberOfLargeTrees":
                    case "StemSizeClasses":
                        if (observedValue > eval("benchmarks." + theObjectLower + "")) {
                            returnValue = 100;
                        } else {
                            returnValue = (1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + ""), 2.5))) * 100);
                        }

                        break;
                    case "LitterCover" :
                    case "CoarseWoodyDebris":
                    case "RegenerationPresent":
                        if (theObject == "RegenerationPresent") {
                            observedValue = parseInt(observedValue);
                            returnValue = (1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / 1, 2.5))) * 100);
                        } else {
                            returnValue = (1.01 * (1 - Math.exp(-5 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + ""), 2.5))) * 100);
                        }
                        break;
                    default:

                        break;

                }

            }
            eval("this.getCurrentFunction().unweighted" + theObject + "Score = " + returnValue)
        },

        calculateFunctionOffsetSubtotalForFutureWithManagement: function () {
            var total = 0
            var c = this.getCurrentFunction()
            total += c.weightedConditionWithOffsetNumberOfLargeTrees
            total += c.weightedConditionWithOffsetLitterCover
            total += c.weightedConditionWithOffsetCoarseWoodyDebris
            total += c.weightedConditionWithOffsetRegenerationPresent
            c.functionSubtotal = total
        },

        calculateFunctionOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentFunction()
            total += c.adjustedConditionWithoutOffsetNumberOfLargeTrees
            total += c.adjustedConditionWithoutOffsetLitterCover
            total += c.adjustedConditionWithoutOffsetCoarseWoodyDebris
            total += c.adjustedConditionWithoutOffsetRegenerationPresent
            c.functionSubtotal = total
        },

        calculateFunctionSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentFunction()) {
                if (this.getCurrentFunction().hasOwnProperty(property) && (property == 'weightedNumberOfLargeTreesScore' || property == 'weightedLitterCoverScore' || property == 'weightedCoarseWoodyDebrisScore' || property == 'weightedRegenerationPresentScore' || property == 'weightedStemSizeClassesScore')) {
                    total += this.getCurrentFunction()[property]
                }
            }
            this.getCurrentFunction().functionSubtotal = total
        },

        createFunctionTransect: function () {
            return {
                numberOfLargeTrees: null,
                litterCover: null,
                coarseWoodyDebris: null,
                stemSizeClasses: null,
                regenerationPresent: null
            }
        },

        addFunctionTransect: function () {
            if (this.getCurrentFunction() == undefined) {
                this.addFunctionCalcResults()
            }
            this.getCurrentFunction().functionTransects.push(this.createFunctionTransect())
        },

        calculateWeightedConditionWithOffset: function (theObject, theObjectLower) {
            dynamicWeightingScore = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            futureConditionWithOffset = eval("this.getCurrentFunction().futureConditionWithOffset" + theObject)
            result = (dynamicWeightingScore * futureConditionWithOffset)
            eval("this.getCurrentFunction().weightedConditionWithOffset" + theObject + " = " + result)
            return result
        },
    }

    if (this.function.getApplicableCalcResults()[this.function.model.inFocusVegetationZoneIndex].functionTransects.length == 0) {
        this.function.addFunctionTransect()
    }

}])
