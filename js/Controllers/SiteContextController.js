bamApp.controller('siteContextController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {

    this.siteContext = {

        model: dataService.siteContextModel,

        addFeature: function () {
            var count = this.model.inputs.landscapeFeatures.length;
            //validate the input
            if (this.model.inputs.landscapeFeatures[count - 1].name == '' || this.model.inputs.landscapeFeatures[count - 1].feature.name == null) {
                return;
            }
            this.model.inputs.landscapeFeatures.push({
                    feature: this.model.inputs.landscapeFeatures.feature,
                    name: this.model.inputs.landscapeFeatures.name
                }
            );
            count++;
            this.model.inputs.landscapeFeatures[count - 1] = [{"feature": null, "name": ""}];

        },

        removeFeature: function ($index) {
            if ($index == (this.model.inputs.landscapeFeatures.length - 1)) {
                this.model.inputs.landscapeFeatures[$index].name = '';
                this.model.inputs.landscapeFeatures[$index].feature = {};
                return;
            }
            this.model.inputs.landscapeFeatures.splice($index, 1);
        },

    }

}]);
