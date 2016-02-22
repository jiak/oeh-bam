bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        ibra: null,
        vegetationModel: {
            isPopupOpen: false,
            calcTypeToPopup: null,
            referenceData: referenceDataService.vegetation,
            zoneMap: [],
            input: {
                pct: [],
                vegetationZones: [],
                futureVegetationZones: []
            }
        },
        applicationDetailsModel: {
            referenceData: referenceDataService.applicationDetails,
            current: null,
            assessmentType: null
        },
        functionModel: {
            benchmarks: referenceDataService.functionBenchmarkData,
            inFocusVegetationZoneIndex: null,
            currentOrFuture: null,
            keithClass: null,
            functionCalcResults: [],
            futureFunctionCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, currentOrFuture, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.currentOrFuture = currentOrFuture
                this.keithClass = keithClass
            },
            createFunctionCalcResult: function() {
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
            }
        },
        structureModel: {
            benchmarks: referenceDataService.structureBenchmarkData,
            inFocusVegetationZoneIndex: null,
            currentOrFuture: null,
            keithClass: null,
            structureCalcResults: [],
            futureStructureCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, currentOrFuture, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.currentOrFuture = currentOrFuture
                this.keithClass = keithClass
            },
            createStructureCalcResult : function() {
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
            }
        },
        compositionModel: {
            benchmarks: referenceDataService.compositionBenchmarkData,
            inFocusVegetationZoneIndex: null,
            currentOrFuture: null,
            keithClass: null,
            compositionCalcResults: [],
            futureCompositionCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, currentOrFuture, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.currentOrFuture = currentOrFuture
                this.keithClass = keithClass
            },
            createCompositionCalcResult: function() {
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
            }
        },
        futureStructureModel: {
            benchmarks: referenceDataService.structureBenchmarkData,
            structureCalcResults: [],
            currentStructure: null
        },
    }
}])