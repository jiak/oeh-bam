bamApp.controller('creditsController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.vegetationZoneUpdateEvent, function (event, body) {
        $scope.crc.credits.updateEcoSystemsCreditsRequiredForVegetation(body.vegetationZones, body.pcts)
        $scope.crc.credits.model.vegetationZones = body.vegetationZones
        var highestOm = 1
        body.pcts.forEach(function (pct) {
            if (pct.tec.offsetMutliplier > highestOm) {
                highestOm = pct.tec.offsetMutliplier
            }
        })
        $scope.crc.credits.model.highestOm = highestOm
    })

    $rootScope.$on(dataService.events.habitatUpdateEvent, function (event, body) {
        $scope.crc.credits.updateSpeciesCredits(body.candidateThreatenedSpecies)
        if ($scope.crc.credits.model.assessmentType != null && $scope.crc.credits.model.assessmentType != undefined && $scope.crc.credits.model.assessmentType.name == 'Development') {
            var highestOm = 1
            body.candidateThreatenedSpecies.forEach(function (cts) {
                if (cts.threatendedSpecies.offsetMultiplier > highestOm) {
                    highestOm = cts.threatendedSpecies.offsetMultiplier
                }
            })
            if (highestOm > $scope.crc.credits.model.highestOm) {
                $scope.crc.credits.model.highestOm = highestOm
            }
        }
    })

    $rootScope.$on(dataService.events.applicationDetailsUpdateEvent, function (event, body) {
        $scope.crc.credits.model.assessmentType = body.assessmentType
    })

    this.credits = {

        model: {
            ecoCredits: [],
            speciesCredit: [],
            impactThresholds: [],
            assessmentType: null,
            highestOm: null,
            vegetationZones: null
        },

        updateSpeciesCredits: function (candidateThreatenedSpecies, predictedThreatenedSpecies) {
            this.model.speciesCredit = []
            candidateThreatenedSpecies.forEach(function (candidateThreatenedSpecies, index) {
                if (candidateThreatenedSpecies.assessRequired != null && candidateThreatenedSpecies.assessRequired.name == 'Yes') {
                    var entry = {};
                    entry.type = candidateThreatenedSpecies.speciesType
                    entry.commonName = candidateThreatenedSpecies.threatendedSpecies.name
                    entry.scientificName = candidateThreatenedSpecies.threatendedSpecies.scientificName
                    entry.hc = candidateThreatenedSpecies.threatendedSpecies.habitatComponents
                    entry.area = candidateThreatenedSpecies.value
                    entry.om = candidateThreatenedSpecies.threatendedSpecies.offsetMultiplier
                    $scope.crc.credits.model.speciesCredit.push(entry)
                }
            })
        },

        updateEcoSystemsCreditsRequiredForVegetation: function (vegetationZones, pcts) {
            this.model.ecoCredits = []
            vegetationZones.forEach(function (vegZone, index) {
                var ecoCreditEntry = {}
                ecoCreditEntry.zone = index + 1
                ecoCreditEntry.identifier = vegZone.identifier()
                ecoCreditEntry.pctName = vegZone.pctCode.pct.name
                if ($scope.crc.credits.model.assessmentType.name == 'Offset') {
                    ecoCreditEntry.viLoss = vegZone.offsetFutureWithManagementVis - vegZone.currentVis
                } else {
                    ecoCreditEntry.viLoss = vegZone.futureVis - vegZone.currentVis
                }
                ecoCreditEntry.area = vegZone.area
                $scope.crc.credits.model.ecoCredits.push(ecoCreditEntry)
            })
        },

        calculateEcosystemCredits: function (ecoCredit) {
            if (this.model.assessmentType.name == 'Development') {
                return ecoCredit.area * ecoCredit.viLoss * this.model.highestOm * 0.25
            } else {
                return ecoCredit.area * ecoCredit.viLoss * 0.25
            }

        },

        calculateSpeciesCredit: function (speciesCredit) {
            if (this.model.assessmentType.name == 'Development') {
                if (speciesCredit.type == 'flora') {
                    return speciesCredit.area * this.model.highestOm
                } else if (speciesCredit.type == 'fauna') {
                    // TODO: work out a way to extract VI
                    viOfVegZone = 10
                    return viOfVegZone * speciesCredit.area * speciesCredit.om
                }
            } else if (this.model.assessmentType.name == 'Offset') {
                if (speciesCredit.type == 'flora') {
                    // TODO: find out IR
                    ir = 1
                    return speciesCredit.area * ir
                } else if (speciesCredit.type == 'fauna') {
                    viOfVegZone = 10
                    return viOfVegZone * speciesCredit.area
                }
            }
        }
    }
}]);
