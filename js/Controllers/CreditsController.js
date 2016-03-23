bamApp.controller('creditsController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.vegetationZoneUpdateEvent, function (event, body) {
        $scope.crc.credits.updateEcoSystemsCreditsRequiredForVegetation(body.vegetationZones, body.pcts)
        $scope.crc.credits.model.vegetationZones = body.vegetationZones
    })

    $rootScope.$on(dataService.events.habitatUpdateEvent, function (event, body) {
        $scope.crc.credits.updateSpeciesCredits(body.candidateThreatenedSpecies)
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
            vegetationZones: null,
            constant: 0.25
        },

        updateSpeciesCredits: function (candidateThreatenedSpecies, predictedThreatenedSpecies) {
            $scope.crc.credits.model.speciesCredit = []
            candidateThreatenedSpecies.forEach(function (candidateThreatenedSpecies, index) {
                if(candidateThreatenedSpecies.assessRequired != null && candidateThreatenedSpecies.presence != null && candidateThreatenedSpecies.candidate != null) {
                    if (candidateThreatenedSpecies.assessRequired.name == 'Yes' && candidateThreatenedSpecies.presence.name == 'Yes' && candidateThreatenedSpecies.candidate.name == 'Yes') {
                        var entry = {};
                        entry.type = candidateThreatenedSpecies.threatendedSpecies.speciesType
                        entry.commonName = candidateThreatenedSpecies.threatendedSpecies.name
                        entry.scientificName = candidateThreatenedSpecies.threatendedSpecies.scientificName
                        entry.hc = candidateThreatenedSpecies.threatendedSpecies.habitatComponents
                        entry.area = candidateThreatenedSpecies.value
                        entry.om = candidateThreatenedSpecies.threatendedSpecies.offsetMultiplier
                        entry.uom = candidateThreatenedSpecies.threatendedSpecies.unitOfMeasure
                        $scope.crc.credits.model.speciesCredit.push(entry)
                    }
                }
            })
        },

        updateEcoSystemsCreditsRequiredForVegetation: function (vegetationZones, pcts) {
            this.model.ecoCredits = []
            vegetationZones.forEach(function (vegZone, index) {
                var ecoCreditEntry = {}
                ecoCreditEntry.zone = index + 1
                ecoCreditEntry.identifier = vegZone.identifier()
                //ecoCreditEntry.identifer = function() {return vegZone.pctCode.pct.id + "_" + vegZone.conditionClass}
                ecoCreditEntry.pctName = vegZone.pctCode.pct.name
                if ($scope.crc.credits.model.assessmentType.name == 'Offset') {
                    ecoCreditEntry.viLoss = vegZone.futureWithAndWithoutDeltaVis
                } else {
                    ecoCreditEntry.viLoss = vegZone.futureAndCurrentDeltaVis
                }
                ecoCreditEntry.area = vegZone.area
                ecoCreditEntry.tecThreatStatus = vegZone.pctCode.tec.status
                ecoCreditEntry.pctClearingStatus = vegZone.pctCode.pct.percentCleared.pct_cleared
                $scope.crc.credits.model.ecoCredits.push(ecoCreditEntry)
            })
        },

        calculateEcosystemCredits: function (ecoCredit) {
            if (this.model.assessmentType.name != 'Offset') {
                ecoCredit.intermediateResult = ecoCredit.area * ecoCredit.viLoss * this.model.constant
                ecoCredit.om = this.getOm(ecoCredit.tecThreatStatus, ecoCredit.pctClearingStatus)
                return ecoCredit.om * ecoCredit.intermediateResult
            } else {
                return ecoCredit.area * ecoCredit.viLoss * this.model.constant
            }
        },

        getOm: function(tecThreatStatus, pctClearingStatus) {
            if(tecThreatStatus == 'CE') {
                return 3
            } else if(tecThreatStatus == 'E') {
                return 2
            } else if(tecThreatStatus == 'V') {
                return 1.5
            } else if(tecThreatStatus == '') {
                if(pctClearingStatus > 90) {
                    return 3
                } else if (pctClearingStatus > 70 && pctClearingStatus < 90) {
                    return 2
                } else if(pctClearingStatus > 50 && pctClearingStatus < 70) {
                    return 1.5
                } else if (pctClearingStatus < 50) {
                    return 1
                }
            }
            return 1
        },

        calculateSpeciesCredit: function (speciesCredit) {
            if (speciesCredit.vegZone != undefined) {
                if (this.model.assessmentType.name == 'Offset') {
                    if (speciesCredit.type == 'Flora') {
                        if (speciesCredit.uom == 'Area') {
                            speciesCredit.vis = speciesCredit.vegZone.futureWithAndWithoutDeltaVis
                        } else if (speciesCredit.uom == 'Individual') {
                            return speciesCredit.area - (speciesCredit.area * (Math.pow(1 - 0.01, 20)))
                        }
                    } else if (speciesCredit.type == 'Fauna') {
                        speciesCredit.vis = speciesCredit.vegZone.futureWithAndWithoutDeltaVis
                    }
                    return speciesCredit.area * speciesCredit.vis * this.model.constant
                } else {
                    speciesCredit.vis = speciesCredit.vegZone.currentVis
                    if (speciesCredit.type == 'Flora') {
                        if (speciesCredit.uom == 'Area') {
                            speciesCredit.vis = speciesCredit.vegZone.futureAndCurrentDeltaVis
                            speciesCredit.intermediateResult = speciesCredit.area * speciesCredit.vis * this.model.constant
                        } else if (speciesCredit.uom == 'Individual') {
                            speciesCredit.intermediateResult = speciesCredit.area
                        }
                    } else if (speciesCredit.type == 'Fauna') {
                        speciesCredit.intermediateResult = speciesCredit.vis * speciesCredit.area * this.model.constant
                    }
                    return speciesCredit.intermediateResult * speciesCredit.om
                }
            }
        }
    }
}]);
