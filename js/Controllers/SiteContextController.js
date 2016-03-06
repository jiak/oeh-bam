bamApp.controller('siteContextController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {

    this.siteContext = {

        model: dataService.siteContextModel,

        addFeature: function () {
            var count = this.model.inputs.landscapeFeatures.length;
            //validate the input
            if (this.model.inputs.landscapeFeatures[count - 1].name == '' || this.model.inputs.landscapeFeatures[count - 1].feature.name == null) {

            } else {
                this.model.inputs.landscapeFeatures.push({
                        feature: this.model.inputs.landscapeFeatures.feature,
                        name: this.model.inputs.landscapeFeatures.name
                    }
                );
                count++;
                this.model.inputs.landscapeFeatures[count - 1] = [{"feature": null, "name": ""}];
            }
        },

        removeFeature: function ($index) {
            if ($index == (this.model.inputs.landscapeFeatures.length - 1)) {
                this.model.inputs.landscapeFeatures[$index].name = '';
                this.model.inputs.landscapeFeatures[$index].feature = {};
                return;
            }
            this.model.inputs.landscapeFeatures.splice($index, 1);
        },

        submit: function() {
            this.model.confirmed = true
            if(dataService.applicationDetailsModel.assessmentType.id != 3) {
                dataService.indexModel.tabControl.tab3 = true;
            } else {
                dataService.indexModel.tabControl.tab4 = true;
            }
            var body = dataService.events.createSiteContextUpdateEvent(this.model.inputs.ibra, this.model.inputs.subRegion, this.model.inputs.cover, this.model.inputs.patchSize)
            $rootScope.$emit(dataService.events.siteContextUpdateEvent, body)
        }

    }

    this.dataService = dataService;


}]);
