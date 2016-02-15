angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "dataService", "localStorageService", function ($scope, dataService, localStorageService) {

    this.composition = {

        model: {
            benchmarks: dataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null
        },

        setCurrentComposition: function(index) {
            this.model.currentComposition = this.model.compositionCalcResults[index]
        },

        addCompositionCalcResults: function() {
            this.model.compositionCalcResults.push(this.createCompositionCalcResults())
        },

        createCompositionCalcResults: function() {
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
                dynamicWeightingOtherScore: null
            }
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedCompositionScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedCompositionScore(theObject, theObjectLower)
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

        getCompositionSubtotal: function () {

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
            benchmarks: {
                function: {
                    "Coastal Swamp Forests": {
                        "North Coast": {
                            numberOfLargeTrees: 2,
                            litterCover: 40,
                            coarseWoodyDebris: 10,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                        "SE Queensland": {
                            numberOfLargeTrees: 2,
                            litterCover: 40,
                            coarseWoodyDebris: 10,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                        "Sydney Basin": {
                            numberOfLargeTrees: 2,
                            litterCover: 30,
                            coarseWoodyDebris: 10,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        }
                    },
                    "Coastal Valley Grassy Woodlands": {
                        "SE Corner": {
                            numberOfLargeTrees: 4,
                            litterCover: 58,
                            coarseWoodyDebris: 68,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                        "Sydney Basin": {
                            numberOfLargeTrees: 4,
                            litterCover: 58,
                            coarseWoodyDebris: 68,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        }
                    },
                    "Cumberland Dry Sclerophyll Forests": {
                        "Sydney Basin": {
                            numberOfLargeTrees: 4,
                            litterCover: 58,
                            coarseWoodyDebris: 68,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        }
                    },
                    "Hunter-Macleay Dry Sclerophyll": {
                        "North Coast": {
                            numberOfLargeTrees: 3,
                            litterCover: 55,
                            coarseWoodyDebris: 43,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                        "Sydney Basin": {
                            numberOfLargeTrees: 3,
                            litterCover: 55,
                            coarseWoodyDebris: 43,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                    },
                    "Western Slopes Grassy Woodlands": {
                        "Brigalow Belt South": {
                            numberOfLargeTrees: 5,
                            litterCover: 40,
                            coarseWoodyDebris: 48,
                            stemSizeClasses: 4,
                            regeneration: "present"
                        },
                        "Nandewar": {
                            numberOfLargeTrees: 5,
                            litterCover: 40,
                            coarseWoodyDebris: 48,
                            stemSizeClasses: 4
                        },
                        "Sydney Basin": {
                            numberOfLargeTrees: 5,
                            litterCover: 40,
                            coarseWoodyDebris: 48,
                            stemSizeClasses: 4
                        }
                    },
                    "Temperate Montane Grasslands": {
                        "South Eastern Highlands": {
                            numberOfLargeTrees: 0,
                            litterCover: 0,
                            coarseWoodyDebris: 0,
                            stemSizeClasses: 0
                        }
                    }
                }
            }
        }
    }

    this.structure = {
        model: {
            benchmarks: {
                structure: {
                    "Coastal Swamp Forests": {
                        "North Coast": {
                            treeCover: 51,
                            shrubCover: 26,
                            grassAndGrassLikeCover: 59,
                            forbCover: 10,
                            fernCover: 7,
                            otherCover: 7
                        },
                        "SE Queensland": {
                            treeCover: 53,
                            shrubCover: 17,
                            grassAndGrassLikeCover: 42,
                            forbCover: 8,
                            fernCover: 8,
                            otherCover: 10
                        },
                        "Sydney Basin": {
                            treeCover: 21,
                            shrubCover: 35,
                            grassAndGrassLikeCover: 71,
                            forbCover: 10,
                            fernCover: 6,
                            otherCover: 6
                        },
                    },
                    "Coastal Valley Grassy Woodlands": {
                        "SE Corner": {
                            treeCover: 21,
                            shrubCover: 20,
                            grassAndGrassLikeCover: 40,
                            forbCover: 13,
                            fernCover: 2,
                            otherCover: 5
                        },
                        "Sydney Basin": {
                            treeCover: 24,
                            shrubCover: 21,
                            grassAndGrassLikeCover: 39,
                            forbCover: 20,
                            fernCover: 2,
                            otherCover: 5
                        }
                    },
                    "Cumberland Dry Sclerophyll Forests": {
                        "Sydney Basin": {
                            treeCover: 16,
                            shrubCover: 18,
                            grassAndGrassLikeCover: 27,
                            forbCover: 16,
                            fernCover: 2,
                            otherCover: 5
                        }
                    },
                    "Hunter-Macleay Dry Sclerophyll Forests": {
                        "North Coast": {
                            treeCover: 39,
                            shrubCover: 27,
                            grassAndGrassLikeCover: 58,
                            forbCover: 24,
                            fernCover: 2,
                            otherCover: 8
                        },
                        "Sydney Basin": {
                            treeCover: 29,
                            shrubCover: 29,
                            grassAndGrassLikeCover: 41,
                            forbCover: 17,
                            fernCover: 2,
                            otherCover: 6
                        }
                    },
                    "Western Slopes Grassy Woodlands": {
                        "Brigalow Belt South": {
                            treeCover: 34,
                            shrubCover: 12,
                            grassAndGrassLikeCover: 66,
                            forbCover: 21,
                            fernCover: 1,
                            otherCover: 3
                        },
                        "Nandewar": {
                            treeCover: 30,
                            shrubCover: 6,
                            grassAndGrassLikeCover: 55,
                            forbCover: 19,
                            fernCover: 1,
                            otherCover: 3
                        },
                        "Sydney Basin": {
                            treeCover: 32,
                            shrubCover: 29,
                            grassAndGrassLikeCover: 28,
                            forbCover: 25,
                            fernCover: 2,
                            otherCover: 6
                        }
                    },
                    "Temperate Montane Grasslands": {
                        "South Eastern Highlands": {
                            treeCover: 1,
                            shrubCover: 5,
                            grassAndGrassLikeCover: 80,
                            forbCover: 21,
                            fernCover: 1,
                            otherCover: 0
                        }
                    }
                }
            }
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


