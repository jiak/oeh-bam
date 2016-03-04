bamApp.controller('functionController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.function = {

        model: dataService.functionModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
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

        calculateJohnCalc1: function (theObject, theObjectLower) {
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            var rawCurrentCondition = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc1" + theObject + " = " + (rawCurrentCondition + rawRestorationGain).toFixed(2))
        },

        calculateJohnCalc2: function (theObject, theObjectLower) {
            var johnCalc1 = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc1" + theObject)
            var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].johnCalc2" + theObject + " = " + (johnCalc1 * dynamicWeighting).toFixed(2))
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
                this.calculateNbpv(theObject, theObjectLower)
                this.calculateWeightedNbpv(theObject, theObjectLower)
                this.calculateWeightedNoDiscount(theObject, theObjectLower)
                this.calculateJohnCalc1(theObject, theObjectLower)
                this.calculateJohnCalc2(theObject, theObjectLower)
                this.calculateFunctionOffsetSubtotalForFutureWithManagement()
            }
        },

        calculateRawRestorationGain: function (theObject, theObjectLower) {
            var c11Benchmark
            if(theObject == 'RegenerationPresent') {
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
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result.toFixed(2))
        },

        calculateRawTotalGain: function (theObject, theObjectLower) {
            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
            var rawRestorationGain = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + (rawAvertedLoss + rawRestorationGain).toFixed(2))
        },

        calculateNbpv: function (theObject, theObjectLower) {
            var result = 0
            var c11Benchmark
            if(theObject == 'RegenerationPresent') {
                c11Benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var rawTotalGain = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
            var discountRate = 3
            var managementTimeFrame = 20
            if (c11Benchmark == 0) {
                result = 0
            } else {
                if (rawTotalGain == 0) {
                    result = 0
                } else {
                    result = rawTotalGain / (Math.pow(1 + (discountRate / 100), managementTimeFrame))
                }
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject + " = " + result.toFixed(2))
        },

        calculateWeightedNbpv: function (theObject, theObjectLower) {
            var c11Benchmark
            if(theObject == 'RegenerationPresent') {
                c11Benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            var result = 0
            if (c11Benchmark == 0) {
                result = 0
            } else {
                var nbpv1 = eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject)
                var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
                result = nbpv1 * dynamicWeighting
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNbpv" + theObject + " = " + result.toFixed(2))
        },

        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
            var c11Benchmark
            if(theObject == 'RegenerationPresent') {
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
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result.toFixed(2))
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
                    result = (1.01 * (1 - Math.exp(-4.4 * (n11FutureValueWithOffset / c11Benchmark), 1.85)) * 100)
                } else {
                    if (n11FutureValueWithOffset > c11Benchmark) {
                        result = 100
                    } else {
                        result = (1.01 * (1 - Math.exp(-4.4 * Math.pow(n11FutureValueWithOffset / c11Benchmark, 1.85))) * 100)
                    }
                }
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result.toFixed(2))
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
                var benefitForPlanting = eval("this.model.benefitForPlanting." + theObjectLower)
                var result = 0
                if (benchmark == 0) {
                    result = 0
                } else {
                    if (supplimentaryPlanting == 'Absent') {
                        result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
                    } else {
                        result = (benchmark * (currentValueWithAddedConstant + benchmark * 0.01) * Math.exp((rValue + benefitForPlanting) * managementTimeFrame)) / (benchmark + (currentValueWithAddedConstant + benchmark * 0.01) * (Math.exp((rValue + benefitForPlanting) * managementTimeFrame) - 1))
                    }
                }
            } else if (theObject == 'RegenerationPresent') {
                result = 1.0
            }
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result.toFixed(2))
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
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result.toFixed(2))
        },

        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower) {
            var result = 0
            var benchmark
            if(theObject == 'RegenerationPresent') {
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
            eval("this.model.offsetFutureWithManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result.toFixed(2))
        },

        displayFutureWithManagement: function () {
            if (this.model.calculatorMode == 'offsetFutureWithManagement') {
                this.updateCalcsFor('NumberOfLargeTrees', -1)
                this.updateCalcsFor('LitterCover', -1)
                this.updateCalcsFor('CoarseWoodyDebris', -1)
                this.updateCalcsFor('RegenerationPresent', -1)
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
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            //var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            var benchmark
            if(theObject == 'RegenerationPresent') {
                benchmark = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name].regeneration
            } else {
                benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower)
            }
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeighting).toFixed(2)
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
                    result = (1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / benchmark, 1.85))) * 100).toFixed(2)
                }
            } else {
                if (observedValue == 0) {
                    result = 0
                } else {

                    if (observedValue > benchmark) {
                        result = 100
                    } else {
                        var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                        result = (1.01 * (1 - Math.exp(-4.4 * Math.pow(futureValueWithoutOffset / benchmark, 1.85))) * 100).toFixed(2)
                    }
                }
            }
            eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
            var result = 0
            var observedValue = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))").toFixed(2)
            eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentFunction().functionTransects.forEach(function (element) {
                eval("observedMean += parseInt(element." + theObjectLower + ")")
            })
            eval("this.getCurrentFunction().observedMean" + theObject + " = (observedMean / this.getCurrentFunction().functionTransects.length).toFixed(2)")
        },

        calculateWeightedFunctionScore: function (theObject, theObjectLower) {
            if (theObject == "RegenerationPresent") {
                if (this.getBenchmark().regeneration == 'absent') {
                    return;
                }
            }
            eval("this.getCurrentFunction().weighted" + theObject + "Score = Math.round(this.getCurrentFunction().unweighted" + theObject + "Score * this.getCurrentFunction().dynamicWeighting" + theObject + "Score)")
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
            eval("this.getCurrentFunction().dynamicWeighting" + theObject + "Score = " + value + "")
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
                if (theObject == 'NumberOfLargeTrees' || theObject == 'LitterCover' || theObject == 'CoarseWoodyDebris') {
                    if (observedValue > eval("benchmarks." + theObjectLower + "")) {
                        if (theObject == 'LitterCover' || theObject == 'CoarseWoodyDebris') {
                            returnValue = (
                                (100 + 50) - (50 + ((100 - 50)
                                /
                                (1 + Math.exp(-10 * ((observedValue / eval("benchmarks." + theObjectLower + "")) - 1.5)))))
                            );
                        } else {
                            returnValue = 100;
                        }
                    } else {
                        returnValue = (
                            1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + ""), 1.85))) * 100
                        );
                    }
                } else if (theObject == 'StemSizeClasses') {
                    if (observedValue > benchmarks.stemSizeClasses) {
                        returnValue = (
                            (100 + 50) - (50 + ((100 - 50)
                            /
                            (1 + Math.exp(-10 * ((observedValue / benchmarks.stemSizeClasses)) - 1.5))))
                        )
                    } else {
                        returnValue = (
                            1.01 * (1 - Math.exp(-4.4 * Math.pow(parseInt(observedValue) / benchmarks.stemSizeClasses, 1.85))) * 100
                        )
                    }
                } else if (theObject == 'RegenerationPresent') {
                    if (observedValue == "0") {
                        returnValue = 0;
                    } else {
                        returnValue = (
                            1.01 * (1 - Math.exp(-4.4 * Math.pow(parseInt(observedValue) / (benchmarks.regeneration == 'present' ? 1 : 0), 1.85))) * 100
                        )
                    }
                }
            }
            eval("this.getCurrentFunction().unweighted" + theObject + "Score = Math.round(returnValue)")
        },

        calculateFunctionOffsetSubtotalForFutureWithManagement: function () {
            var total = 0
            var c = this.getCurrentFunction()
            total += c.johnCalc2NumberOfLargeTrees
            total += c.johnCalc2LitterCover
            total += c.johnCalc2CoarseWoodyDebris
            total += c.johnCalc2RegenerationPresent
            c.functionSubtotal = total.toFixed(0)
        },

        calculateFunctionOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentFunction()
            total += c.adjustedConditionWithoutOffsetNumberOfLargeTrees
            total += c.adjustedConditionWithoutOffsetLitterCover
            total += c.adjustedConditionWithoutOffsetCoarseWoodyDebris
            total += c.adjustedConditionWithoutOffsetRegenerationPresent
            c.functionSubtotal = total.toFixed(0)
        },

        calculateFunctionSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentFunction()) {
                if (this.getCurrentFunction().hasOwnProperty(property) && (property == 'weightedNumberOfLargeTreesScore' || property == 'weightedLitterCoverScore' || property == 'weightedCoarseWoodyDebrisScore' || property == 'weightedRegenerationPresentScore')) {
                    total += this.getCurrentFunction()[property]
                }
            }
            this.getCurrentFunction().functionSubtotal = total.toFixed(0)
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
        }
    }

    if (this.function.getApplicableCalcResults()[this.function.model.inFocusVegetationZoneIndex].functionTransects.length == 0) {
        this.function.addFunctionTransect()
    }

}])
