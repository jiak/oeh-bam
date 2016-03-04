bamApp.controller('applicationDetailsController', ["$scope", "$rootScope", "referenceDataService", "dataService", function ($scope, $rootScope, referenceDataService, dataService) {

    this.dataService = dataService;

    this.applicationDetails = {

        model: dataService.applicationDetailsModel,

        submit: function () {
            this.model.confirmed = true
            var body = dataService.events.createApplicationDetailsUpdateEvent(this.model.assessmentType)
            $rootScope.$emit(dataService.events.applicationDetailsUpdateEvent, body)
        }
    }

}]);
