angular.module('BAMApp.controllers').controller('ApplicationDetailsController', function ($scope, dataService) {
    $scope.items = dataService.Items;
    $scope.current = dataService.Current;
    $scope.selected = $scope.items[dataService.Current];
});


