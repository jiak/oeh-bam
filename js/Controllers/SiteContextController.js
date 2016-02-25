bamApp.controller('siteContextController', ["$scope", "referenceDataService", "$rootScope", "dataService", function ($scope, referenceDataService, $rootScope, dataService) {

    $scope.NumberOnly = /^[0-9]{1,7}(\.[0-9]+)?$/
    $scope.model =
  	{
      vegetationCoverClass: dataService.siteContextModel.referenceData.vegetationCoverClass,
      refMitchellLandscape: dataService.siteContextModel.referenceData.mitchellLandscape,
      refLandscapeFeatures: dataService.siteContextModel.referenceData.landscapeFeatures,
      refIbra: dataService.siteContextModel.referenceData.ibra,
  		inputs:
      {
        ibra:null,
        subRegion:null,
        mitchellLandscape:null,
        cover:null,
        patchSize:null,
        landscapeFeatures:[
          {
            "feature": {},
            "name": ""
          }
        ],
        AddFeature: function()
        {
          var count = this.landscapeFeatures.length;

          //validate the input
          if (this.landscapeFeatures[count - 1].name == '' || this.landscapeFeatures[count - 1].feature.name == null) {
              return;
          }

          this.landscapeFeatures.push(
              {
                feature: this.landscapeFeatures.feature,
                name: this.landscapeFeatures.name
              }
          );

          count++;

          this.landscapeFeatures[count-1] = [{"feature": null, "name": ""}];

        },
        RemoveFeature: function($index)
        {
          if ($index == (this.landscapeFeatures.length -1))
          {
              this.landscapeFeatures[$index].name = '';
              this.landscapeFeatures[$index].feature = {};

              return;
          }

          this.landscapeFeatures.splice($index, 1);
          
        }
      },
    }

    if (dataService.siteContextModel.inputs.landscapeFeatures != null)
    {
      $scope.model.inputs = dataService.siteContextModel.inputs;
    }
    else {
      dataService.siteContextModel.inputs = $scope.model.inputs;
    }

    $scope.emitEvent = function () {
        $rootScope.$broadcast('ibraSubRegionChangeEvent', $scope.model.inputs.ibra.name);
    }

}]);
