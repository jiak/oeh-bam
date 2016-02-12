
angular.module('BAMApp.controllers',[]);
angular.module('BAMApp.dataService',[]);


var BAMApp = angular.module('BAMApp', ['ngRoute','BAMApp.controllers', 'BAMApp.dataService'])

BAMApp.config( function ($routeProvider) {
    $routeProvider
        .when('/ApplicationDetails', {
            templateUrl: 'Templates/ApplicationDetails.html',
            controller: 'ApplicationDetailsController'
        })
        .when('/SiteContext', {
            templateUrl: 'Templates/SiteContext.html',
            controller:'SiteContextController'
        })
        .when('/Vegetation', {
            templateUrl: 'Templates/Vegetation.html',
            controller: 'VegetationController'
        })
        .when('/Credits', {
            templateUrl: 'Templates/Credits.html',
            controller:'CreditsController'
        })

});

