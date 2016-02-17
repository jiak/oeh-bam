bamApp.controller('applicationDetailsController', ["$scope", "referenceDataService", "dataService", function ($scope, referenceDataService, dataService) {

    this.applicationDetails = {
        model: dataService.applicationDetailsModel
    }

}]);
