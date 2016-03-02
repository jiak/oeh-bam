bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        siteContextModel: {
            confirmed: false,
            vegetationCoverClass: referenceDataService.siteContext.vegetationCoverClass,
            patchSizeClass: referenceDataService.siteContext.patchSizeClass,
            refMitchellLandscape: referenceDataService.siteContext.mitchellLandscape,
            refLandscapeFeatures: referenceDataService.siteContext.landscapeFeatures,
            refIbra: referenceDataService.siteContext.ibra,
            inputs: {
                ibra: null,
                subRegion: null,
                mitchellLandscape: null,
                cover: null,
                patchSize: null,
                landscapeFeatures: [
                    {
                        "feature": {},
                        "name": ""
                    }
                ]
            }
        },
        init: function () {
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
            createLocation: function () {
                return {
                    easting: null,
                    northing: null,
                    zone: null
                }
            },
            setInputs: function (inFocusVegetationZoneIndex, calculatorMode) {
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
            confirmed: false,
            referenceData: referenceDataService.applicationDetails,
            current: null,
            assessmentType: null
        },
        habitatModel: {
            referenceData: referenceDataService.habitat,
            current: null,
            inputs: []
        },
        functionModel: {
            benchmarks: referenceDataService.functionBenchmarkData,
            rateOfIncrease: referenceDataService.rateOfIncrease.function,
            restorationModifierForPlanting: referenceDataService.restorationModifierForPlanting.function,
            benefitForPlanting: referenceDataService.benefitForPlanting.function,
            inFocusVegetationZoneIndex: null,
            calculatorMode: null,
            keithClass: null,
            functionCalcResults: [],
            futureFunctionCalcResults: [],
            offsetFutureWithoutManagementFunctionCalcResults: [],
            offsetFutureWithManagementFunctionCalcResults: [],
            setInputs: function (inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createFunctionCalcResult: function () {
                return {
                    functionTransects: []
                }
            }
        },
        structureModel: {
            benchmarks: referenceDataService.structureBenchmarkData,
            rateOfIncrease: referenceDataService.rateOfIncrease.structure,
            restorationModifierForPlanting: referenceDataService.restorationModifierForPlanting.structure,
            inFocusVegetationZoneIndex: null,
            calculatorMode: null,
            keithClass: null,
            structureCalcResults: [],
            futureStructureCalcResults: [],
            offsetFutureWithoutManagementStructureCalcResults: [],
            offsetFutureWithManagementStructureCalcResults: [],
            setInputs: function (inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createStructureCalcResult: function () {
                return {
                    structureTransects: []
                }
            }
        },
        compositionModel: {
            benchmarks: referenceDataService.compositionBenchmarkData,
            rateOfIncrease: referenceDataService.rateOfIncrease.composition,
            restorationModifierForPlanting: referenceDataService.restorationModifierForPlanting.composition,
            inFocusVegetationZoneIndex: null,
            calculatorMode: null,
            keithClass: null,
            compositionCalcResults: [],
            futureCompositionCalcResults: [],
            offsetFutureWithoutManagementCompositionCalcResults: [],
            offsetFutureWithManagementCompositionCalcResults: [],
            setInputs: function (inFocusVegetationZoneIndex, calculatorMode, keithClass) {
                this.inFocusVegetationZoneIndex = inFocusVegetationZoneIndex
                this.calculatorMode = calculatorMode
                this.keithClass = keithClass
            },
            createCompositionCalcResult: function () {
                return {
                    compositionTransects: []
                }
            }
        }
    }
}])
