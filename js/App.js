angular.module('BAMApp.controllers', []);
angular.module('BAMApp.dataService', []);

var BAMApp = angular.module('BAMApp', ['BAMApp.controllers', 'BAMApp.dataService', 'ngAnimate', 'ui.bootstrap'])

String.prototype.toCamelCase = function () {
    return this
        .replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) {
            return $1.toLowerCase();
        });
}

