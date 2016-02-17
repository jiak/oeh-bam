bamApp.controller('functionController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.function = {

        model: dataService.functionModel,

        getCurrentFunction: function() {
            return this.model.functionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex]
        },

        addFunctionCalcResults: function () {
            this.model.functionCalcResults.push(this.createFunctionCalcResults())
        },

        createFunctionCalcResults: function () {
            return {
                functionTransects: [],
                observedMeanNumberOfLargeTrees: null,
                observedMeanLitterCover: null,
                observedMeanCoarseWoodyDebris: null,
                observedMeanStemSizeClasses: null,
                observedMeanRegenerationPresent: null,
                unweightedNumberOfLargeTreesScore: null,
                unweightedLitterCoverScore: null,
                unweightedCoarseWoodyDebrisScore: null,
                unweightedStemSizeClassesScore: null,
                unweightedRegenerationPresentScore: null,
                weightedNumberOfLargeTreesScore: null,
                weightedLitterCoverScore: null,
                weightedCoarseWoodyDebrisScore: null,
                weightedStemSizeClassesScore: null,
                weightedRegenerationPresentScore: null,
                dynamicWeightingNumberOfLargeTreesScore: null,
                dynamicWeightingLitterCoverScore: null,
                dynamicWeightingCoarseWoodyDebrisScore: null,
                dynamicWeightingStemSizeClassesScore: null,
                dynamicWeightingRegenerationPresentScore: null,
                functionSubtotal: null
            }
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
                eval(`observedMean += element.${theObjectLower}`)
            })
            eval(`this.getCurrentFunction().observedMean${theObject} = observedMean / this.getCurrentFunction().functionTransects.length`)
        },

        calculateWeightedFunctionScore: function (theObject, theObjectLower) {
            eval(`this.getCurrentFunction().weighted${theObject}Score = Math.round(this.getCurrentFunction().unweighted${theObject}Score * this.getCurrentFunction().dynamicWeighting${theObject}Score)`)
        },

        getKeithClass: function () {
            return dataService.vegetationModel.input.pct[dataService.vegetationModel.inFocusVegetationZoneIndex].keithClass.name
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
            }
            eval(`this.getCurrentFunction().dynamicWeighting${theObject}Score = ${value}`)
        },

        calculateUnweightedFunctionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.getKeithClass()][dataService.ibra.name];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (theObject == 'NumberOfLargeTrees' || theObject == 'LitterCover' || theObject == 'CoarseWoodyDebris') {
                    if (observedValue > eval(`benchmarks.${theObjectLower}`)) {
                        if (theObject == 'LitterCover' || theObject == 'CoarseWoodyDebris') {
                            returnValue = (
                                (100 + 50) - (50 + ((100 - 50)
                                /
                                (1 + Math.exp(-10 * ((observedValue / eval(`benchmarks.${theObjectLower}`)) - 1.5)))))
                            );
                        } else {
                            returnValue = 100;
                        }
                    } else {
                        returnValue = (
                            1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}`), 1.85))) * 100
                        );
                    }
                } else if (theObject == 'StemSizeClasses') {
                    switch (observedValue) {
                        case 1:
                            returnValue = 25;
                            break;
                        case 2:
                            returnValue = 50;
                            break;
                        case 3:
                            returnValue = 80;
                            break;
                        case 4:
                            returnValue = 100;
                    }
                } else if (theObject == 'RegenerationPresent') {
                    if (observedValue == "Absent") {
                        returnValue = 0;
                    } else {
                        returnValue = 100;
                    }
                }
            }
            eval(`this.getCurrentFunction().unweighted${theObject}Score = Math.round(returnValue)`)
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
                shurb: null,
                coarseWoodyDebris: null,
                forb: null,
                regenerationPresent: null
            }
        },

        addFunctionTransect: function () {
            if(this.model.functionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex] == undefined) {
                this.addFunctionCalcResults()
            }
            this.model.functionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex].functionTransects.push(this.createFunctionTransect())
        }
    }

}])
