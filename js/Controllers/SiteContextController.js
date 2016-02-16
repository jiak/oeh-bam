angular.module('BAMApp.controllers').controller('SiteContextController', ["$scope", "$rootScope", "dataService", "localStorageService", function ($scope, $rootScope, dataService, localStorageService) {

    $scope.data = dataService.referenceData.siteContext

    this.siteContext = {

        model: {
            ibraSubRegion: null
        },

        saveToStorage: function() {
            localStorageService.save("siteContext", this.model)
        },

        emitEvent: function() {
            $rootScope.$broadcast('ibraSubRegionChangeEvent', this.model.ibraSubRegion.name);
        }

    }
}]);


