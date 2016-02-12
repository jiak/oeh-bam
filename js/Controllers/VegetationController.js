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

        addPctObject: function () {
            this.model.input.pct.push(this.createPctObject())
        }
    }
}]);


