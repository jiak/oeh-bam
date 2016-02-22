bamApp.controller('functionController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.function = {

        model: dataService.functionModel,

        close: function() {
            dataService.vegetationModel.isPopupOpen = false
        },

        getApplicableCalcResults: function () {
            if (this.model.currentOrFuture == 'current') {
                return this.model.functionCalcResults
            } else {
                return this.model.futureFunctionCalcResults
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
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedFunctionScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedFunctionScore(theObject, theObjectLower)
            this.calculateFunctionSubtotal()
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentFunction().functionTransects.forEach(function (element) {
                eval("observedMean += parseInt(element." + theObjectLower + ")")
            })
            eval("this.getCurrentFunction().observedMean" + theObject + " = (observedMean / this.getCurrentFunction().functionTransects.length).toFixed(2)")
        },

        calculateWeightedFunctionScore: function (theObject, theObjectLower) {
            if(theObject == "RegenerationPresent") {
                if(this.getBenchmark().regeneration == 'absent') {
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
            this.getCurrentFunction().functionTransects.push(this.createFunctionTransect())
        }
    }

    if(this.function.getApplicableCalcResults()[this.function.model.inFocusVegetationZoneIndex].functionTransects.length == 0) {
        this.function.addFunctionTransect()
    }

}])
