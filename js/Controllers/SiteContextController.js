bamApp.controller('siteContextController', ["$scope", "referenceDataService", "$rootScope", "dataService", function ($scope, referenceDataService, $rootScope, dataService) {

    $scope.dataService = dataService

    $scope.NumberOnly = /^[0-9]{1,7}(\.[0-9]+)?$/
    $scope.referenceData = referenceDataService;
    $scope.Current = referenceDataService.Current;
    $scope.ibra;
    $scope.ibraSubRegion;
    $scope.LandscapeFeatures = [{
        "feature": {},
        "name": null
    }];


    $scope.AddFeature = function () {
        var count = $scope.LandscapeFeatures.length;

        //validate the input
        if ($scope.LandscapeFeatures[count - 1].Name == '') {
            return;
        }

        $scope.LandscapeFeatures.push(
            {
                Feature: $scope.LandscapeFeatures.Feature,
                Name: $scope.LandscapeFeatures.Name
            }
        );

        count++;

        // $scope.LandscapeFeatures[count-1] = [{"feature": {                    "id": 1,
        //                     "name": "Name of IBRA bioregion"}, "name": ""}];

    };

    $scope.emitEvent = function () {
        $rootScope.$broadcast('ibraSubRegionChangeEvent', $scope.ibra.name);
    }

    $scope.RemoveFeature = function ($index) {
        $scope.LandscapeFeatures.splice($index, 1);
        if ($scope.LandscapeFeatures.length == 0) {
            $scope.LandscapeFeatures.push({"feature": {}, "name": null});

        }
        // if ($index == ($scope.LandscapeFeatures.length -1))
        //            $scope.LandscapeFeatures[$index].Name = '';
        // else
        //            $scope.LandscapeFeatures.splice($index, 1);
    }
}]);
