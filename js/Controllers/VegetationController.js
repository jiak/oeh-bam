angular.module('BAMApp.controllers').controller('VegetationController', function ($scope, dataService) {

    this.pctPane = {
        model: {
            referenceData: dataService.referenceData,
            pctInput: {
                input: {
                    pct: [],
                    vegetationZones: [],
                    futureVegetationZones: []
                }
            }

        },

        createPctObject: function() {
            return {
                "formation": null,
                "keithClass": null,
                "pct": null,
                "tec": null,
                "percentCleared": "waiting",
                "threatStatusClass": "waiting"
            }
        }
    }

    $scope.referenceData = dataService.referenceData;
    $scope.input = dataService.input;
    $scope.anotherVegetation = function () {
        $scope.input.vegetation.push({
            "formation": null,
            "keithClass": null,
            "pct": null,
            "tec": null,
            "percentCleared": "waiting",
            "threatStatusClass": "waiting"
        });
    };
});


