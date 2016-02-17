bamApp.controller('compositionController', ["$scope", "$rootScope", "dataService", "localStorageService", "$uibModal", function ($scope, $rootScope, dataService, localStorageService, $uibModal) {

    this.composition = {

        model: {
            benchmarks: dataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null,
            ibraSubRegion: null
        },

        setCurrentComposition: function (index) {
            this.model.currentComposition = this.model.compositionCalcResults[index]
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
            var theObjectLower = toCamelCase(theObject)
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedCompositionScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedCompositionScore(theObject, theObjectLower)
            this.calculateCompositionSubtotal()
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.model.currentComposition.compositionTransects.forEach(function (element) {
                eval(`observedMean += element.${theObjectLower}`)
            })
            eval(`this.model.currentComposition.observedMean${theObject} = observedMean / this.model.currentComposition.compositionTransects.length`)
        },

        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
            eval(`this.model.currentComposition.weighted${theObject}Score = Math.round(this.model.currentComposition.unweighted${theObject}Score * this.model.currentComposition.dynamicWeighting${theObject}Score)`)
        },

        getKeithClass: function () {
            var indexOfAssociatedPct = $scope.vc.vegetationTab.model.inFocusVegetationZoneIndex
            var keithClass = $scope.vc.vegetationTab.model.input.pct[indexOfAssociatedPct].keithClass.name
            return keithClass
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.model.benchmarks[this.getKeithClass()][this.model.ibraSubRegion];
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval(`this.model.currentComposition.dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Composition / sumOfBenchmarkScores).toFixed(2)`)
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.getKeithClass()][this.model.ibraSubRegion];
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
            eval(`this.model.currentComposition.unweighted${theObject}Score = Math.round(returnValue)`)
        },

        calculateCompositionSubtotal: function () {
            var total = 0
            for (var property in this.model.currentComposition) {
                if (this.model.currentComposition.hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.model.currentComposition[property]
                }
            }
            this.model.currentComposition.compositionSubtotal = total
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
            this.model.compositionCalcResults[$scope.vc.vegetationTab.model.inFocusVegetationZoneIndex].compositionTransects.push(this.createCompositionTransect())
        }
    }
}]);