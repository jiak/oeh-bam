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
        vegetationModel: {
            referenceData: referenceDataService.vegetation,
            input: {
                pct: [],
                vegetationZones: [],
                futureVegetationZones: []
            },
            inFocusVegetationZoneIndex: null,
            inFocusFutureVegetationZoneIndex: null
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
            functionCalcResults: [],
            currentFunction: null
        },
        structureModel: {
            benchmarks: referenceDataService.structureBenchmarkData,
            structureCalcResults: [],
            currentStructure: null
        },
        compositionModel: {
            benchmarks: referenceDataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null
        },
        futureFunctionModel: {
            benchmarks: referenceDataService.functionBenchmarkData,
            functionCalcResults: [],
            currentFunction: null
        },
        futureStructureModel: {
            benchmarks: referenceDataService.structureBenchmarkData,
            structureCalcResults: [],
            currentStructure: null
        },
        futureCompositionModel: {
            benchmarks: referenceDataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null
        },
    }.init();
}])
