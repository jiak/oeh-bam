bamApp.controller('compositionController', ["$scope", "$rootScope", "$uibModal", "dataService", function ($scope, $rootScope, $uibModal, dataService) {

    this.dataService = dataService

    this.composition = {

        model: dataService.compositionModel,

        getCurrentComposition: function() {
            return this.model.compositionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex]
        },

        addCompositionCalcResults: function () {
            this.model.compositionCalcResults.push(this.createCompositionCalcResults())
        },

        createCompositionCalcResults: function () {
            return {
                compositionTransects: [],
                observedMeanTree: null,
                observedMeanShrub: null,
                observedMeanGrassAndGrassLike: null,
                observedMeanForb: null,
                observedMeanFern: null,
                observedMeanOther: null,
                unweightedTreeScore: null,
                unweightedShrubScore: null,
                unweightedGrassAndGrassLikeScore: null,
                unweightedForbScore: null,
                unweightedFernScore: null,
                unweightedOtherScore: null,
                weightedTreeScore: null,
                weightedShrubScore: null,
                weightedGrassAndGrassLikeScore: null,
                weightedForbScore: null,
                weightedFernScore: null,
                weightedOtherScore: null,
                dynamicWeightingTreeScore: null,
                dynamicWeightingShrubScore: null,
                dynamicWeightingGrassAndGrassLikeScore: null,
                dynamicWeightingForbScore: null,
                dynamicWeightingFernScore: null,
                dynamicWeightingOtherScore: null,
                compositionSubtotal: null
            }
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
                eval(`observedMean += element.${theObjectLower}`)
            })
            eval(`this.getCurrentComposition().observedMean${theObject} = observedMean / this.getCurrentComposition().compositionTransects.length`)
        },

        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
            eval(`this.getCurrentComposition().weighted${theObject}Score = Math.round(this.getCurrentComposition().unweighted${theObject}Score * this.getCurrentComposition().dynamicWeighting${theObject}Score)`)
        },

        getKeithClass: function () {
            return dataService.vegetationModel.input.pct[dataService.vegetationModel.inFocusVegetationZoneIndex].keithClass.name
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.model.benchmarks[this.getKeithClass()][dataService.ibra];
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval(`this.getCurrentComposition().dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Composition / sumOfBenchmarkScores).toFixed(2)`)
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.getKeithClass()][dataService.ibra];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval(`benchmarks.${theObjectLower}Composition`)) {
                    returnValue = (100);
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Composition`), 1.85))) * 100
                    );
                }
            }
            eval(`this.getCurrentComposition().unweighted${theObject}Score = Math.round(returnValue)`)
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
            if(this.model.compositionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex] == undefined) {
                this.addCompositionCalcResults();
            }
            this.model.compositionCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex].compositionTransects.push(this.createCompositionTransect())
        }
    }

}]);