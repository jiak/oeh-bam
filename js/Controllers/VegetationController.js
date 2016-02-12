angular.module('BAMApp.controllers').controller('VegetationController', ["$scope", "dataService", function ($scope, dataService) {

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
        },

        addVegetationZoneItem: function () {
            this.model.input.vegetationZones.push(this.createVegetationZoneItem())
        },

        addFutureVegetationZoneItem: function() {
            this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
        }
    }
}]);


