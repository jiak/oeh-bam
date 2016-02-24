bamApp.controller('compositionController', ["$scope", "$rootScope", "$uibModal", "dataService", function ($scope, $rootScope, $uibModal, dataService) {

    this.dataService = dataService

    this.composition = {

        model: dataService.compositionModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
        },

        getApplicableCalcResults: function () {
            if (this.model.currentOrFuture == 'current') {
                return this.model.compositionCalcResults
            } else {
                return this.model.futureCompositionCalcResults
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
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedCompositionScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedCompositionScore(theObject, theObjectLower)
            this.calculateCompositionSubtotal()
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentComposition().compositionTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            eval("this.getCurrentComposition().observedMean" + theObject + " = observedMean / this.getCurrentComposition().compositionTransects.length")
        },

        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
            eval("this.getCurrentComposition().weighted" + theObject + "Score = Math.round(this.getCurrentComposition().unweighted" + theObject + "Score * this.getCurrentComposition().dynamicWeighting" + theObject + "Score)")
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.ibra.name]
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval("this.getCurrentComposition().dynamicWeighting" + theObject + "Score = (benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores).toFixed(2)")
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.model.keithClass][dataService.ibra.name];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval("benchmarks." + theObjectLower + "Composition")) {
                    returnValue = (100);
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Composition"), 1.85))) * 100
                    );
                }
            }
            eval("this.getCurrentComposition().unweighted" + theObject + "Score = Math.round(returnValue)")
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
                tree: null,
                shurb: null,
                grassAndGrassLike: null,
                forb: null,
                fern: null,
                other: null
            }
        },

        addCompositionTransect: function () {
            if (this.getCurrentComposition() == undefined) {
                this.addCompositionCalcResults();
            }
            this.getCurrentComposition().compositionTransects.push(this.createCompositionTransect())
        }
    }

    if(this.composition.getApplicableCalcResults()[this.composition.model.inFocusVegetationZoneIndex].compositionTransects.length == 0) {
        this.composition.addCompositionTransect()
    }

}]);