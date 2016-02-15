angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "dataService", "localStorageService", function ($scope, dataService, localStorageService) {

    this.composition = {

        model: {
            benchmarks: dataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null
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
            var theObjectLower = theObject.toCamelCase()
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

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.model.benchmarks['Coastal Swamp Forests']['North Coast'];
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval(`this.model.currentComposition.dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Composition / sumOfBenchmarkScores).toFixed(2)`)
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks['Coastal Swamp Forests']['North Coast'];
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
                    console.log("Adding: " + this.model.currentComposition[property] + " to total: " + total)
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

    this.function = {
        model: {
            benchmarks: dataService.functionBenchmarkData
        }
    }

    this.structure = {
        model: {
            benchmarks: dataService.structureBenchmarkData
        }
    }

    this.vegetationTab = {

        model: {
            referenceData: dataService.referenceData,
            input: {
                pct: [],
                vegetationZones: [],
                futureVegetationZones: []
            },
            inFocusVegetationZoneIndex: null,
            inFocusFutureVegetationZoneIndex: null
        },

        setFocusedVegetationZone: function (index) {
            this.model.inFocusVegetationZoneIndex = index
            $scope.vc.composition.setCurrentComposition(index)
        },

        setFocusedFutureVegetationZone: function (index) {
            this.model.inFocusFutureVegetationZoneIndex = index
        },

        createPctObject: function () {
            return {
                formation: null,
                keithClass: null,
                pct: null,
                tec: null,
                percentCleared: "waiting",
                threatStatusClass: "waiting"
            }
        },

        createVegetationZoneItem: function () {
            return {
                pctCode: null,
                conditionClass: null,
                identifier: null,
                area: null,
                composition: null,
                structure: null,
                function: null,
                vis: null
            }
        },

        createFutureVegetationZoneItem: function () {
            return {
                typeCode: null,
                conditionClass: null,
                identifier: null,
                area: null,
                composition: null,
                structure: null,
                function: null,
                vis: null,
                changeVis: null
            }
        },

        addPctObject: function () {
            this.model.input.pct.push(this.createPctObject())
            this.addVegetationZoneItem()
            this.addFutureVegetationZoneItem()
        },

        addVegetationZoneItem: function () {
            this.model.input.vegetationZones.push(this.createVegetationZoneItem())
            $scope.vc.composition.addCompositionCalcResults();
        },

        addFutureVegetationZoneItem: function () {
            this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
        },

        saveData: function () {
            localStorageService.saveData()
        }

    }
}]);


