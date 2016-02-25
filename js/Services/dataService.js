bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        init: function() {
            for (var i in this) {
                if (typeof this[i] == 'object') {
                    this[i].parent = this;
                }
            }
            return this;
        },
        ibra: {},
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
            current:null,
            inputs:[

            ],


            createEcoSystemCreditInput: function(threatendedSpecies)
            {
                return {
                    threatendedSpecies: threatendedSpecies,
                    presence:null,
                    sensitivity:null
                }
            },


            initEcoSystemCreditInput: function(input)
            {
                for (var i = 0;i < this.referenceData.ecosystemCredit.ibraSubRegion.length; i++)
                {
                    if (this.referenceData.ecosystemCredit.ibraSubRegion[i].id == input.key.ibraId)
                    {
                        //found subregion
                        for (var j = 0; j < this.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies.length; j++ )
                        {
                            var patchSize = this.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                            var cover = this.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                            var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                            var inputCover = this.formalizeCover(input.key.cover);

                            //if any patchSize or cover is null, just ignore them
                            if (
                                    (((inputCover != null) ? inputCover:cover ) == cover)
                                    &&
                                    (((inputPatchSize != null) ? inputPatchSize:patchSize ) == patchSize)
                                )
                                input.ecoSystemCredit.push(this.createEcoSystemCreditInput(this.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j]));
                        }
                    }
                }

            },
            createSpeciesCreditInput: function(threatendedSpecies)
            {
                return {
                    threatendedSpecies: threatendedSpecies,
                    candidate:null,
                    assessRequired:null,
                    presence:null,
                    UOM:null,
                    value: null,
                    SOISelected: null
                }
            },

            formalizePatchSize:function (data)
            {
                if (data == null)
                    return null;
                if (data == "")
                    return null;

                return data.replace(" ", "");
            },

            formalizeCover:function (data)
            {
                if (data == null)
                    return null;
                if (data == "")
                    return null;

                return data.replace("<", "");
            },

            initSpeciesCreditInput: function(input, subRegion)
            {
                for (var i = 0;i < this.referenceData.speciesCredit.ibraSubRegion.length; i++)
                {
                    if (this.referenceData.speciesCredit.ibraSubRegion[i].id == input.key.ibraId)
                    {
                        //found subregion
                        for (var j = 0; j < this.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies.length; j++ )
                        {
                            var patchSize = this.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                            var cover = this.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                            var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                            var inputCover = this.formalizeCover(input.key.cover);

                            //if any patchSize or cover is null, just ignore them
                            if (
                                    (((inputCover != null) ? inputCover:cover ) == cover)
                                    &&
                                    (((inputPatchSize != null) ? inputPatchSize:patchSize ) == patchSize)
                                )
                                input.speciesCredit.push(this.createSpeciesCreditInput(this.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j]));
                        }
                    }
                }
            },

            createInput: function(id, cover, patchSize)
            {
                return{
                    key: {ibraId:id, cover:cover, patchSize: patchSize},
                    ecoSystemCredit:[],
                    speciesCredit:[]

                }
            },

            findInput: function(ibraId, cover, patchSize)
            {
                for (var i=0; i < this.inputs.length; i++)
                {
                    if (this.inputs[i].key.ibraId == ibraId && (this.inputs[i].key.patchSize == patchSize) && (this.inputs[i].key.cover ==cover))
                        return i;
                }

                return null;
            },

            update: function() {
                this.current = null;

                if (this.parent.siteContextModel.inputs.ibra == null)
                    return;

                if (this.parent.siteContextModel.inputs.subRegion == null )
                    return;

                var ibraId = this.parent.siteContextModel.inputs.subRegion.id;

                this.current = this.findInput(this.parent.siteContextModel.inputs.subRegion.id, this.parent.siteContextModel.inputs.cover, this.parent.siteContextModel.inputs.patchSize);

                //find input
                if (this.current != null)
                    return;

                //if not found, create one
                var input = this.createInput(ibraId, this.parent.siteContextModel.inputs.cover, this.parent.siteContextModel.inputs.patchSize);


                this.initEcoSystemCreditInput(input);
                this.initSpeciesCreditInput(input);

                this.inputs.push(input);
                this.current = this.inputs.length-1;


            },
            findEcosystemCreditBySubRegion: function (input)
            {
                for (var i = 0;i < this.referenceData.ecosystemCredit.ibraSubRegion.length; i++)
                {
                    if (this.referenceData.ecosystemCredit.ibraSubRegion[i].id == ibraId)
                    {
                        return this.referenceData.ecosystemCredit.ibraSubRegion[i];
                    }
                }

                return null;
            },

            findspeciesCreditBySubRegion: function (ibraId)
            {
                for (var i = 0;i < this.referenceData.speciesCredit.ibraSubRegion.length; i++)
                {
                    if (this.referenceData.speciesCredit.ibraSubRegion[i].id == ibraId)
                    {
                        return this.referenceData.speciesCredit.ibraSubRegion[i];
                    }
                }

                return null;
            }

        },
        siteContextModel: {
            referenceData: referenceDataService.siteContext,
            inputs:{},
            notify: function() {
                this.parent.habitatModel.update();
            }

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
