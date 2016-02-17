bamApp.controller('vegetationController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.vegetationTab = {

        model: dataService.vegetationModel,

        setFocusedVegetationZone: function (index) {
            this.model.inFocusVegetationZoneIndex = index
        },

        setFocusedFutureVegetationZone: function (index) {
            this.model.inFocusFutureVegetationZoneIndex = index
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
                identifier: function () {
                    return (this.pctCode != null && this.pctCode.pct.id != null && this.conditionClass != null) ? this.pctCode.pct.id + "_" + this.conditionClass : "..."
                },
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
                identifier: function () {
                    return (this.pctCode != null && this.pctCode.pct.id != null && this.conditionClass != null) ? this.pctCode.pct.id + "_" + this.conditionClass : "..."
                },
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

        removePctObject: function (index) {
            this.model.input.pct.splice(index, 1)
            this.removeVegetationZoneItem(index)
            this.removeFutureVegetationZoneItem(index)
        },

        removeVegetationZoneItem: function (index) {
            this.model.input.vegetationZones.splice(index, 1)
        },

        removeFutureVegetationZoneItem: function (index) {
            this.model.input.futureVegetationZones.splice(index, 1)
        },

        addVegetationZoneItem: function () {
            this.model.input.vegetationZones.push(this.createVegetationZoneItem())
        },

        addFutureVegetationZoneItem: function () {
            this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
        },

    }

}]);



