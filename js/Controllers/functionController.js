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
            }
        },

        isOffsetMode: function () {
            return this.model.calculatorMode == 'offsetFutureWithoutManagement'
        },

        isDevelopmentMode: function () {
            return this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future'
        },

        calculateAdjustedConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeighting = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            //var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementFunctionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower + "Function")
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
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower)
            if (theObject == 'RegenerationPresent') {
                benchmark = this.model.benchmarks[this.model.keithClass][dataService.ibra.name].regeneration == 'present' ? 1 : 0
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

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, managementTimeFrame) {
            var result = 0
            var observedValue = eval("this.model.functionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            //var rateOfDecline = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name].rateOfDecline" + theObject)
            var rateOfDecline = 5.0
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + managementTimeFrame + "))").toFixed(2)
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
            return this.model.benchmarks[this.model.keithClass][dataService.ibra.name]
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

        calculateFunctionOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentFunction()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetLitterCover
            total += c.adjustedConditionWithoutOffsetCoarseWoodyDebris
            total += c.adjustedConditionWithoutOffsetStemSizeClasses
            total += c.adjustedConditionWithoutOffsetRegenerationPresent
            c.functionSubtotal = total.toFixed(0)
        },

        calculateFunctionSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentFunction()) {
                if (this.getCurrentFunction().hasOwnProperty(property) && (property == 'weightedNumberOfLargeTreesScore' || property == 'weightedLitterCoverScore' || property == 'weightedCoarseWoodyDebrisScore' || property == 'weightedStemSizeClassesScore' || property == 'weightedRegenerationPresentScore')) {
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
        }
    }

    if (this.function.getApplicableCalcResults()[this.function.model.inFocusVegetationZoneIndex].functionTransects.length == 0) {
        this.function.addFunctionTransect()
    }

}])
