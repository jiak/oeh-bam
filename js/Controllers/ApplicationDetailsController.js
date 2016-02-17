//angular.module('BAMApp.controllers').controller('ApplicationDetailsController', function ($scope, dataService) {
//    $scope.items = dataService.Items;
//    $scope.current = dataService.Current;
//    $scope.selected = $scope.items[dataService.Current];
//});
//
//


angular.module('BAMApp.controllers').controller('ApplicationDetailsController',["$scope","dataService", function ($scope, dataService) {
    $scope.referenceData = dataService.referenceData;
    $scope.Current = dataService.Current;
}]);
