bamApp.controller('indexController', ["$scope", "dataService", function ($scope, dataService) {

    this.index = {

        showVegetationTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.name == 'Development')
        },

        showOffsetTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.name == 'Offset')
        }

    }

}])