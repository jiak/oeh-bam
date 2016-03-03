bamApp.controller('indexController', ["$scope", "dataService", function ($scope, dataService) {

    this.index = {
        model: dataService.indexModel,
        showVegetationTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.id == 0 || dataService.applicationDetailsModel.assessmentType.id == 2 || dataService.applicationDetailsModel.assessmentType.id == 3)
        },

        showOffsetTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.id == 1)
        }

    }
    this.dataService = dataService;
    dataService.indexModel.tabControl.tab1 = true;

}])