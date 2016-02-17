angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "$rootScope", "dataService", "localStorageService", function ($scope, $rootScope, dataService, localStorageService) {

    $rootScope.$on('ibraSubRegionChangeEvent', function (event, ibraSubRegion) {
        $scope.vc.composition.model.ibraSubRegion = ibraSubRegion
        $scope.vc.structure.model.ibraSubRegion = ibraSubRegion
        $scope.vc.function.model.ibraSubRegion = ibraSubRegion
    })

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

    this.function = {

        model: {
            benchmarks: dataService.functionBenchmarkData,
            functionCalcResults: [],
            currentFunction: null,
            ibraSubRegion: null
        },

        setCurrentFunction: function (index) {
            this.model.currentFunction = this.model.functionCalcResults[index]
        },

        addFunctionCalcResults: function () {
            this.model.functionCalcResults.push(this.createFunctionCalcResults())
        },

        createFunctionCalcResults: function () {
            return {
                functionTransects: [],
                observedMeanNumberOfLargeNumberOfLargeTrees: null,
                observedMeanLitterCover: null,
                observedMeanCoarseWoodyDebris: null,
                observedMeanStemSizeClassesPresent: null,
                observedMeanRegenerationPresent: null,
                unweightedNumberOfLargeNumberOfLargeTreesScore: null,
                unweightedLitterCoverScore: null,
                unweightedCoarseWoodyDebrisScore: null,
                unweightedStemSizeClassesPresentScore: null,
                unweightedRegenerationPresentScore: null,
                weightedNumberOfLargeTreesScore: null,
                weightedLitterCoverScore: null,
                weightedCoarseWoodyDebrisScore: null,
                weightedStemSizeClassesPresentScore: null,
                weightedRegenerationPresentScore: null,
                dynamicWeightingNumberOfLargeTreesScore: null,
                dynamicWeightingLitterCoverScore: null,
                dynamicWeightingCoarseWoodyDebrisScore: null,
                dynamicWeightingStemSizeClassesPresentScore: null,
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
            this.model.currentFunction.functionTransects.forEach(function (element) {
                eval(`observedMean += element.${theObjectLower}`)
            })
            eval(`this.model.currentFunction.observedMean${theObject} = observedMean / this.model.currentFunction.functionTransects.length`)
        },

        calculateWeightedFunctionScore: function (theObject, theObjectLower) {
            eval(`this.model.currentFunction.weighted${theObject}Score = Math.round(this.model.currentFunction.unweighted${theObject}Score * this.model.currentFunction.dynamicWeighting${theObject}Score)`)
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
            eval(`this.model.currentFunction.dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Function / sumOfBenchmarkScores).toFixed(2)`)
        },

        calculateUnweightedFunctionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.getKeithClass()][this.model.ibraSubRegion];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval(`benchmarks.${theObjectLower}Function`)) {
                    returnValue = (100);
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Function`), 1.85))) * 100
                    );
                }
            }
            eval(`this.model.currentFunction.unweighted${theObject}Score = Math.round(returnValue)`)
        },

        calculateFunctionSubtotal: function () {
            var total = 0
            for (var property in this.model.currentFunction) {
                if (this.model.currentFunction.hasOwnProperty(property) && (property == 'weightedNumberOfLargeTreesScore' || property == 'weightedLitterCoverScore' || property == 'weightedCoarseWoodyDebrisScore' || property == 'weightedStemSizeClassesPresentScore' || property == 'weightedRegenerationPresentScore')) {
                    total += this.model.currentFunction[property]
                }
            }
            this.model.currentFunction.functionSubtotal = total
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
            this.model.functionCalcResults[$scope.vc.vegetationTab.model.inFocusVegetationZoneIndex].functionTransects.push(this.createFunctionTransect())
        }
    },

        this.structure = {

            model: {
                benchmarks: dataService.structureBenchmarkData,
                structureCalcResults: [],
                currentStructure: null,
                ibraSubRegion: null
            },

            setCurrentStructure: function (index) {
                this.model.currentStructure = this.model.structureCalcResults[index]
            },

            addStructureCalcResults: function () {
                this.model.structureCalcResults.push(this.createStructureCalcResults())
            },

            createStructureCalcResults: function () {
                return {
                    structureTransects: [],
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
                    structureSubtotal: null
                }
            },

            updateCalcsFor: function (theObject, observedValue) {
                var theObjectLower = theObject.toCamelCase()
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateUnweightedStructureScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedStructureScore(theObject, theObjectLower)
                this.calculateStructureSubtotal()
            },

            calculateObservedMean: function (theObject, theObjectLower) {
                var observedMean = 0;
                this.model.currentStructure.structureTransects.forEach(function (element) {
                    eval(`observedMean += element.${theObjectLower}`)
                })
                eval(`this.model.currentStructure.observedMean${theObject} = observedMean / this.model.currentStructure.structureTransects.length`)
            },

            calculateWeightedStructureScore: function (theObject, theObjectLower) {
                eval(`this.model.currentStructure.weighted${theObject}Score = Math.round(this.model.currentStructure.unweighted${theObject}Score * this.model.currentStructure.dynamicWeighting${theObject}Score)`)
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
                eval(`this.model.currentStructure.dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Cover / sumOfBenchmarkScores).toFixed(2)`)
            },

            calculateUnweightedStructureScore: function (theObject, theObjectLower, observedValue) {
                var benchmarks = this.model.benchmarks[this.getKeithClass()][this.model.ibraSubRegion];
                var returnValue = 0;
                if (observedValue == 0) {
                    returnValue = 0;
                } else {
                    if (observedValue > eval(`benchmarks.${theObjectLower}Cover`)) {
                        returnValue = (
                        (100 + 50) - (50 + ((100 - 50)
                        /
                        (1 + Math.exp(-10 * ((observedValue / eval(`benchmarks.${theObjectLower}Cover`) - 1.5)))))))
                    } else {
                        returnValue = (
                            1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Cover`), 1.85))) * 100
                        );
                        returnValue = (1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Cover`), 1.85))) * 100);
                    }
                }
                eval(`this.model.currentStructure.unweighted${theObject}Score = Math.round(returnValue)`)
            },

            calculateStructureSubtotal: function () {
                var total = 0
                for (var property in this.model.currentStructure) {
                    if (this.model.currentStructure.hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                        total += this.model.currentStructure[property]
                    }
                }
                this.model.currentStructure.structureSubtotal = total
            },

            createStructureTransect: function () {
                return {
                    tree: null,
                    shurb: null,
                    grassAndGrassLike: null,
                    forb: null,
                    fern: null,
                    other: null
                }
            },

            addStructureTransect: function () {
                this.model.structureCalcResults[$scope.vc.vegetationTab.model.inFocusVegetationZoneIndex].structureTransects.push(this.createStructureTransect())
            }
        },

        this.vegetationTab = {

            model: {
                referenceData: dataService.referenceData.vegetation,
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
                $scope.vc.structure.setCurrentStructure(index)
                $scope.vc.function.setCurrentFunction(index)
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
                $scope.vc.structure.addStructureCalcResults();
                $scope.vc.function.addFunctionCalcResults();
            },

            addFutureVegetationZoneItem: function () {
                this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
            },

            saveData: function () {
                localStorageService.saveData()
            }
        }

}]);


