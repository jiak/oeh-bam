bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        ibra: null,
        compositionModel: {
            benchmarks: referenceDataService.compositionBenchmarkData,
            compositionCalcResults: [],
            currentComposition: null
        },
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
            referenceData: referenceDataService,
            current: referenceDataService.Current
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
    }
}])