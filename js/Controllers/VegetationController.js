angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "dataService", "localStorageService", function ($scope, dataService, localStorageService) {

    this.composition = {

        model: {
            benchmarks: {
                structure: {
                    "Coastal Swamp Forests (North Coast)": {
                        "TreeCover": 51,
                        "ShrubCover": 26,
                        "Grass and Grass Like Cover": 59,
                        "Forb Cover": 10,
                        "Fern Cover": 7,
                        "Other Cover": 7
                    },
                    "Coastal Swamp Forests (SE Queensland)": {
                        "TreeCover": 53,
                        "ShrubCover": 17,
                        "Grass and Grass Like Cover": 42,
                        "Forb Cover": 8,
                        "Fern Cover": 8,
                        "Other Cover": 10
                    },
                    "Coastal Swamp Forests (Sydney Basin)": {
                        "TreeCover": 21,
                        "ShrubCover": 35,
                        "Grass and Grass Like Cover": 71,
                        "Forb Cover": 10,
                        "Fern Cover": 6,
                        "Other Cover": 6
                    },
                    "Coastal Valley Grassy Woodlands (SE Corner)": {
                        "TreeCover": 21,
                        "ShrubCover": 20,
                        "Grass and Grass Like Cover": 40,
                        "Forb Cover": 13,
                        "Fern Cover": 2,
                        "Other Cover": 5
                    },
                    "Coastal Valley Grassy Woodlands (Sydney Basin)": {
                        "TreeCover": 24,
                        "ShrubCover": 21,
                        "Grass and Grass Like Cover": 39,
                        "Forb Cover": 20,
                        "Fern Cover": 2,
                        "Other Cover": 5
                    },
                    "Cumberland Dry Sclerophyll Forests (Sydney Basin)": {
                        "TreeCover": 16,
                        "ShrubCover": 18,
                        "Grass and Grass Like Cover": 27,
                        "Forb Cover": 16,
                        "Fern Cover": 2,
                        "Other Cover": 5
                    },
                    "Hunter-Macleay Dry Sclerophyll Forests (North Coast)": {
                        "TreeCover": 39,
                        "ShrubCover": 27,
                        "Grass and Grass Like Cover": 58,
                        "Forb Cover": 24,
                        "Fern Cover": 2,
                        "Other Cover": 8
                    },
                    "Hunter-Macleay Dry Sclerophyll Forests (Sydney Basin)": {
                        "TreeCover": 29,
                        "ShrubCover": 29,
                        "Grass and Grass Like Cover": 41,
                        "Forb Cover": 17,
                        "Fern Cover": 2,
                        "Other Cover": 6
                    },
                    "Western Slopes Grassy Woodlands (Brigalow Belt South)": {
                        "TreeCover": 34,
                        "ShrubCover": 12,
                        "Grass and Grass Like Cover": 66,
                        "Forb Cover": 21,
                        "Fern Cover": 1,
                        "Other Cover": 3
                    },
                    "Western Slopes Grassy Woodlands (Nandewar)": {
                        "TreeCover": 30,
                        "ShrubCover": 6,
                        "Grass and Grass Like Cover": 55,
                        "Forb Cover": 19,
                        "Fern Cover": 1,
                        "Other Cover": 3
                    },
                    "Western Slopes Grassy Woodlands (Sydney Basin)": {
                        "TreeCover": 32,
                        "ShrubCover": 29,
                        "Grass and Grass Like Cover": 28,
                        "Forb Cover": 25,
                        "Fern Cover": 2,
                        "Other Cover": 6
                    },
                    "Temperate Montane Grasslands (South Eastern Highlands)": {
                        "TreeCover": 1,
                        "ShrubCover": 5,
                        "Grass and Grass Like Cover": 80,
                        "Forb Cover": 21,
                        "Fern Cover": 1,
                        "Other Cover": 0
                    }
                },
                richness: {
                    "Coastal Swamp Forests (North Coast)": {
                        "TreeRichness": 5,
                        "ShrubRichness": 10,
                        "Grass and Grass Like Richness": 10,
                        "ForbRichness": 8,
                        "FernRichness": 2,
                        "OtherRichness": 5
                    },
                    "Coastal Swamp Forests (SE Queensland)": {
                        "TreeRichness": 8,
                        "ShrubRichness": 8,
                        "Grass and Grass Like Richness": 7,
                        "ForbRichness": 6,
                        "FernRichness": 3,
                        "OtherRichness": 6
                    },
                    "Coastal Swamp Forests (Sydney Basin)": {
                        "TreeRichness": 4,
                        "ShrubRichness": 10,
                        "Grass and Grass Like Richness": 8,
                        "ForbRichness": 8,
                        "FernRichness": 2,
                        "OtherRichness": 5
                    },
                    "Coastal Valley Grassy Woodlands (SE Corner)": {

                    }
                }
            },
            compositionTransects: []
        },

        createCompositionTransect: function () {
            return {
                tree: null,
                shurb: null,
                grassLike: null,
                forb: null,
                fern: null
            }
        },

        addCompositionTransect: function () {
            this.model.compositionTransects.push(this.createCompositionTransect())
        }
    }

    this.vegetationTab = {

        model: {
            referenceData: dataService.referenceData,
            input: {
                pct: [],
                vegetationZones: [],
                futureVegetationZones: []
            }
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
        },

        addFutureVegetationZoneItem: function () {
            this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
        },

        saveData: function () {
            localStorageService.saveData()
        }

    }
}]);


