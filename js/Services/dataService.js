bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        ibra: null,
        locationModel: {
            calculatorMode: null,
            inFocusVegetationZoneIndex: null,
            input: {
                locations: [],
                futureLocations: []
            },
            createLocation: function() {
                return {
                    easting: null,
                    northing: null,
                    zone: null
                }
            },
            setInputs: function(inFocusVegetationZoneIndex, calculatorMode) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
            }
        },
        offsetModel: {
            isPopupOpen: false,
            calcTypeToPopup: null,
            referenceData: referenceDataService.vegetation,
            zoneMap: [],
            input: {
                pct: [],
                vegetationZones: []
            }
        },
        vegetationModel: {
            isPopupOpen: false,
            calcTypeToPopup: null,
            referenceData: referenceDataService.vegetation,
            zoneMap: [],
            input: {
                pct: [],
                vegetationZones: []
            }
        },
        applicationDetailsModel: {
            referenceData: referenceDataService.applicationDetails,
            current: null,
            assessmentType: null
        },
        habitatModel: {
            referenceData: referenceDataService.habitat,
            inputs:[]

        },
        functionModel: {
            benchmarks: referenceDataService.functionBenchmarkData,
            inFocusVegetationZoneIndex: null,
            calculatorMode: null,
            keithClass: null,
            functionCalcResults: [],
            futureFunctionCalcResults: [],
            offsetFutureWithoutManagementFunctionCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createFunctionCalcResult: function() {
                return {
                    functionTransects: [],
                    managementTimeFrameTree: null,
                    futureValueWithoutOffsetNumberOfLargeTrees: null,
                    futureConditionWithoutOffsetTree: null,
                    adjustedConditionWithoutOffsetTree: null,
                    managementTimeFrameLitterCover: null,
                    futureValueWithoutOffsetLitterCover: null,
                    futureConditionWithoutOffsetLitterCover: null,
                    adjustedConditionWithoutOffsetLitterCover: null,
                    managementTimeFrameCoarseWoodyDebris: null,
                    futureValueWithoutOffsetCoarseWoodyDebris: null,
                    futureConditionWithoutOffsetCoarseWoodyDebris: null,
                    adjustedConditionWithoutOffsetCoarseWoodyDebris: null,
                    managementTimeFrameCoarseStemSizeClasses: null,
                    futureValueWithoutOffsetStemSizeClasses: null,
                    futureConditionWithoutOffsetStemSizeClasses: null,
                    adjustedConditionWithoutOffsetStemSizeClasses: null,
                    managementTimeFrameCoarseRegenerationPresent: null,
                    futureValueWithoutOffsetRegenerationPresent: null,
                    futureConditionWithoutOffsetRegenerationPresent: null,
                    adjustedConditionWithoutOffsetRegenerationPresent: null,
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
            calculatorMode: null,
            keithClass: null,
            structureCalcResults: [],
            futureStructureCalcResults: [],
            offsetFutureWithoutManagementStructureCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createStructureCalcResult : function() {
                return {
                    structureTransects: [],
                    managementTimeFrameTree: null,
                    futureValueWithoutOffsetTree: null,
                    futureConditionWithoutOffsetTree: null,
                    adjustedConditionWithoutOffsetTree: null,
                    managementTimeFrameShrub: null,
                    futureValueWithoutOffsetShrub: null,
                    futureConditionWithoutOffsetShrub: null,
                    adjustedConditionWithoutOffsetShrub: null,
                    managementTimeFrameGrassAndGrassLike: null,
                    futureValueWithoutOffsetGrassAndGrassLike: null,
                    futureConditionWithoutOffsetGrassAndGrassLike: null,
                    adjustedConditionWithoutOffsetGrassAndGrassLike: null,
                    managementTimeFrameForb: null,
                    futureValueWithoutOffsetForb: null,
                    futureConditionWithoutOffsetForb: null,
                    adjustedConditionWithoutOffsetForb: null,
                    managementTimeFrameFern: null,
                    futureValueWithoutOffsetFern: null,
                    futureConditionWithoutOffsetFern: null,
                    adjustedConditionWithoutOffsetFern: null,
                    managementTimeFrameOther: null,
                    futureValueWithoutOffsetOther: null,
                    futureConditionWithoutOffsetOther: null,
                    adjustedConditionWithoutOffsetOther: null,
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
            calculatorMode: null,
            keithClass: null,
            compositionCalcResults: [],
            futureCompositionCalcResults: [],
            offsetFutureWithoutManagementCompositionCalcResults: [],
            setInputs: function(inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createCompositionCalcResult: function() {
                return {
                    compositionTransects: [],
                    managementTimeFrameTree: null,
                    futureValueWithoutOffsetTree: null,
                    futureConditionWithoutOffsetTree: null,
                    adjustedConditionWithoutOffsetTree: null,
                    managementTimeFrameShrub: null,
                    futureValueWithoutOffsetShrub: null,
                    futureConditionWithoutOffsetShrub: null,
                    adjustedConditionWithoutOffsetShrub: null,
                    managementTimeFrameGrassAndGrassLike: null,
                    futureValueWithoutOffsetGrassAndGrassLike: null,
                    futureConditionWithoutOffsetGrassAndGrassLike: null,
                    adjustedConditionWithoutOffsetGrassAndGrassLike: null,
                    managementTimeFrameForb: null,
                    futureValueWithoutOffsetForb: null,
                    futureConditionWithoutOffsetForb: null,
                    adjustedConditionWithoutOffsetForb: null,
                    managementTimeFrameFern: null,
                    futureValueWithoutOffsetFern: null,
                    futureConditionWithoutOffsetFern: null,
                    adjustedConditionWithoutOffsetFern: null,
                    managementTimeFrameOther: null,
                    futureValueWithoutOffsetOther: null,
                    futureConditionWithoutOffsetOther: null,
                    adjustedConditionWithoutOffsetOther: null,
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
        }
    }
}])
