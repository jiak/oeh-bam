var bamApp = angular.module('bamApp', ['ngAnimate', 'ui.bootstrap'])

bamApp.filter('abs', function () {
    return function(val) {
        return Math.abs(val);
    }
})

bamApp.filter('r2d', function() {
    return function(val) {
        if(isNaN(val)) {
            return "NaN"
        } else {
            return math.round(val, 2)
        }
    }
})

bamApp.filter('r0d', function() {
    return function(val) {
        if(isNaN(val)) {
            return "NaN"
        } else {
            return math.round(val, 0)
        }
    }
})

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