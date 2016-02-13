angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "dataService", "localStorageService", function ($scope, dataService, localStorageService) {

    this.composition = {

        model: {
            compositionTransectReferenceData: [{}],
            compositionTransects: []
        },

        createCompositionTransect: function(){
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


