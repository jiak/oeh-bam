bamApp.controller('locationController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.location = {

        model: dataService.locationModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
        },

        getApplicableLocation: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.input.locations
            } else {
                return this.model.input.futureLocations
            }
        },

        getCurrentFunction: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        }
    }

}])