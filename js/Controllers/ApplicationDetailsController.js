bamApp.controller('applicationDetailsController',["$scope","dataService", function ($scope, dataService) {
    $scope.referenceData = dataService.referenceData;
    $scope.Current = dataService.Current;
}]);
