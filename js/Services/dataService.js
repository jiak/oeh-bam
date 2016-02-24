bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        ibra: null,
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
            inputs:[]

        },
        siteContextModel: {
            referenceData: referenceDataService.siteContext,
            inputs:{}

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
    }
}])
