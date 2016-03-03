bamApp.controller('applicationDetailsController', ["$scope", "referenceDataService", "dataService", function ($scope, referenceDataService, dataService) {
    this.dataService = dataService;

    this.applicationDetails = {
        model: dataService.applicationDetailsModel,
        submit: function() {
            dataService.applicationDetailsModel.confirmed = true;
            dataService.indexModel.tabControl.tab2 = true;
        }

    }

    $scope.model = {

    }

}]);
