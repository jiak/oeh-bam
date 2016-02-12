angular.module('BAMApp.controllers').controller('VegetationController', function ($scope, dataService) {
    $scope.referenceData = dataService.referenceData;
	$scope.input = dataService.input;
	$scope.anotherVegetation = function () {
		$scope.input.vegetation.push(			{
				"formation": null,
				"keithClass": null,
				"pct": null,
				"tec": null,
				"percentCleared": "waiting",
				"threatStatusClass": "waiting"
			});
	};
});


