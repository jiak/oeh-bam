var bamApp = angular.module('bamApp', ['ngAnimate', 'ui.bootstrap'])

bamApp.filter('abs', function () {
    return function(val) {
        return Math.abs(val);
    }
});

String.prototype.toCamelCase = function() {
    return this
        .replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) {
            return $1.toLowerCase();
        });
}