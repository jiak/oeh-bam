bamApp.controller('creditsController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.vegetationZoneUpdateEvent, function(event, body) {
        $scope.crc.credits.updateEcoSystemsCreditsRequiredForVegetation(body.vegetationZones, body.pcts)
    })

    $rootScope.$on(dataService.events.habitatUpdateEvent, function(event, body) {
        $scope.crc.credits.updateSpeciesCredits(body.candidateThreatenedSpecies)
    })

    this.credits = {

        model: {
            ecoCredits: [],
            speciesCredit: [],
            impactThresholds: []
        },

        updateSpeciesCredits: function(candidateThreatenedSpecies, predictedThreatenedSpecies) {
            console.log(candidateThreatenedSpecies)
            console.log(predictedThreatenedSpecies)
            this.model.speciesCredit = []
            candidateThreatenedSpecies.forEach(function(candidateThreatenedSpecies, index) {
                var entry = {};
                entry.type = 'type'
                entry.commonName = candidateThreatenedSpecies.threatendedSpecies.name
                entry.scientificName = candidateThreatenedSpecies.threatendedSpecies.scientificName
                entry.hc = candidateThreatenedSpecies.threatendedSpecies.habitatComponents
                entry.area = candidateThreatenedSpecies.value
                entry.om = candidateThreatenedSpecies.threatendedSpecies.offsetMultiplier
                $scope.crc.credits.model.speciesCredit.push(entry)
            })
        },

        updateEcoSystemsCreditsRequiredForVegetation: function(vegetationZones, pcts) {
            console.log(vegetationZones)
            console.log(pcts)
            this.model.ecoCredits = []
            vegetationZones.forEach(function(vegZone, index) {
                var ecoCreditEntry = {}
                ecoCreditEntry.zone = index + 1
                ecoCreditEntry.identifier = vegZone.identifier()
                ecoCreditEntry.pctName = vegZone.pctCode.pct.name
                ecoCreditEntry.viLoss = vegZone.offsetFutureWithoutManagementVis - vegZone.currentVis
                ecoCreditEntry.area = vegZone.area
                ecoCreditEntry.om = 1
                $scope.crc.credits.model.ecoCredits.push(ecoCreditEntry)
            })
        },

        calculateEcosystemCredits: function(ecoCredit) {
            return ecoCredit.area * ecoCredit.viLoss * 0.25
        },

        calculateSpeciesCredit: function(speciesCredit) {
            return speciesCredit.area * speciesCredit.om * 0.25
        }

    }
}]);
