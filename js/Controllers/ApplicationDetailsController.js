bamApp.controller('applicationDetailsController', ["$scope", "referenceDataService", "dataService", function ($scope, referenceDataService, dataService) {
    this.dataService = dataService;

    this.applicationDetails = {
        model: dataService.applicationDetailsModel
    }

    $scope.model = {

    }

}]);
