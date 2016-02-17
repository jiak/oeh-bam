var bamApp = angular.module('bamApp', ['ngAnimate', 'ui.bootstrap'])

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