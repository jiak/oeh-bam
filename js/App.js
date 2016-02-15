
angular.module('BAMApp.controllers',[]);
angular.module('BAMApp.dataService',[]);

var BAMApp = angular.module('BAMApp', ['ngRoute','BAMApp.controllers', 'BAMApp.dataService', 'ngAnimate', 'ui.bootstrap'])

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

String.prototype.toCamelCase = function() {
    return this
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}