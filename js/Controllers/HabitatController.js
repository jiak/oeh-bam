angular.module('bamApp').controller('habitatController', ["$scope", "referenceDataService", "$rootScope", "dataService",  function ($scope, referenceDataService, $rootScope, dataService) {

	//init
	$scope.model = dataService.habitatModel;

}]);
