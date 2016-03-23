bamApp.service('dataService', ["referenceDataService", function (referenceDataService) {
    return {
        events: {
            localStorageUpdate:"localStorageUpdate",
            createLocalStorageUpdate: function(model) {
                return { model: model}
            },
            vegetationPctChangeEvent:"vegetationPctChangeEvent",
            createVegetationPctChangeEvent: function(inputPCT) {
              return {
                  inputPCT: inputPCT
              }
            },
            siteContextUpdateEvent: "siteContextUpdateEvent",
            createSiteContextUpdateEvent: function (ibra, subRegion, cover, patchSize) {
                return {
                    ibra: ibra,
                    subRegion: subRegion,
                    cover: cover,
                    patchSize: patchSize
                }
            },
            openCalculatorEvent: "openCalculatorEvent",
            createOpenCalculatorEvent: function(calcType, calculatorMode) {
                return {
                    calcType: calcType,
                    calculatorMode: calculatorMode
                }
            },
            recalculateVisEvent: "recalculateVisEvent",
            createRecalculateVisEvent: function() {
                return {}
            },
            requestVegzoneUpdateEvent: "requestVegzoneUpdate",
            createRequestVegzoneUpdateEvent: function() {
                return {}
            },
            vegetationZoneUpdateEvent: "vegetationZoneUpdateEvent",
            createVegetationZoneUpdateEvent: function (vegetationZones, pct) {
                return {
                    vegetationZones: vegetationZones,
                    pcts: pct
                }
            },
            habitatUpdateEvent: "habitatUpdateEvent",
            createHabitatUpdateEvent: function (candidateThreatenedSpecies, predictedThreatenedSpecies) {
                return {
                    candidateThreatenedSpecies: candidateThreatenedSpecies,
                    predictedThreatenedSpecies: predictedThreatenedSpecies
                }
            },
            applicationDetailsUpdateEvent: "applicationDetailsUpdateEvent",
            createApplicationDetailsUpdateEvent: function(assessmentType) {
                return {
                    assessmentType: assessmentType
                }
            }
        },
        indexModel: {

            applications: {},
            tabControl: {
                tab1: true,
                tab2: false,
                tab3: false,
                tab4: false,
                tab5: false,
                tab6: false
            }
        },
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
            assessmentType: null,
            proposalId: "DEMONSTRATION",
            proposalVersion: 1
        },
        habitatModel: {
            referenceData: referenceDataService.habitat,
            current: null,
            inputs: []
        },
        functionModel: {
            benchmarks: referenceDataService.functionBenchmarkData,
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
