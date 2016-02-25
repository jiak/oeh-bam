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

            initEcoSystemCreditInput: function(input, subRegion)
            {
                if (subRegion == null)
                    return;

                for (var i = 0; i < subRegion.threatendedSpecies.length; i++)
                {
                    input.ecoSystemCredit.push(this.createEcoSystemCreditInput());
                }
            },
            createSpeciesCreditInput: function()
            {
                return {
                    candidate:null,
                    assessRequired:null,
                    presence:null,
                    UOM:null,
                    value: null,
                    SOISelected: null
                }
            },

            initSpeciesCreditInput: function(input, subRegion)
            {
                if (subRegion == null )
                    return;

                for (var i = 0; i < subRegion.threatendedSpecies.length; i++)
                {
                    input.speciesCredit.push(this.createSpeciesCreditInput());
                }
            },

            createInput: function(id)
            {
                return{
                    ibraId:id,
                    ecoSystemCredit:[],
                    speciesCredit:[]

                }
            },
            update: function() {
                this.current = null;

                if (this.parent.siteContextModel.inputs.ibra == null)
                    return;

                if (this.parent.siteContextModel.inputs.subRegion == null )
                    return;

                var ibraId = this.parent.siteContextModel.inputs.subRegion.id;

                var i = 0

                for (i=0; i < this.inputs.length; i++)
                {
                    if (this.inputs[i].ibraId == ibraId)
                    {
                        this.current = i;
                        return;
                    }
                }

                var input = this.createInput(ibraId);


                this.initEcoSystemCreditInput(input, this.findEcosystemCreditBySubRegion(ibraId));
                this.initSpeciesCreditInput(input, this.findspeciesCreditBySubRegion(ibraId));

                this.inputs.push(input);
                this.current = this.inputs.length-1;


            },
            findEcosystemCreditBySubRegion: function (ibraId)
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
