angular.module('bamApp').controller('habitatController', ["$scope", "referenceDataService", "$rootScope", "dataService", function ($scope, referenceDataService, $rootScope, dataService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.vegetationPctChangeEvent, function (event, body) {
        $scope.hc.habitat.loadSpecies(body.inputPCT)
    })

    $rootScope.$on(dataService.events.localStorageUpdate, function (event, body) {
        $scope.hc.habitat.model = body.model.habitatModel
        if ($scope.hc.habitat.model.inputs.length > 0) $scope.hc.habitat.emitHabitatUpdateEvent();

    })

    $rootScope.$on(dataService.events.vegetationZoneUpdateEvent, function (event, body) {
        $scope.hc.habitat.model.vegetationZones = body.vegetationZones
    })


    $rootScope.$on(dataService.events.siteContextUpdateEvent, function (event, body) {
            $scope.hc.habitat.updateSpeciesModel(body)
    })




    this.habitat = {
        streamlineSensitivityCheck: function (species) {
            if (dataService.applicationDetailsModel.assessmentType.id != 3) {
                return true;
            } else {
                if (species.sensitivity == "Very high") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        species: {},
        speciesVegZone: {},
        applicationType: dataService.applicationDetailsModel.assessmentType,

        model: dataService.habitatModel,

        emitHabitatUpdateEvent: function () {
            var body = dataService.events.createHabitatUpdateEvent(this.model.inputs[this.model.current].speciesCredit, this.model.inputs[this.model.current].ecosystemCredit)
            $rootScope.$emit(dataService.events.habitatUpdateEvent, body)
        },

        createEcoSystemCreditInput: function (threatendedSpecies) {
            return {
                threatendedSpecies: threatendedSpecies,
                presence: null,
                sensitivity: null
            }
        },

        initEcoSystemCreditInput: function (input, inputPCT) {
            var duplicateCheck = [];
            for (var i = 0; i < this.model.referenceData.ecosystemCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.ecosystemCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                        var inputCover = this.formalizeCover(input.key.cover);

                        for (pct in inputPCT) {
                            var duplicate = false;
                            if (inputPCT[pct].pctCode != null) {
                                if (duplicateCheck.indexOf(this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].id) >= 0) duplicate = true
                                if (this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].pct.indexOf(inputPCT[pct].pctCode.pct.id) >= 0 && !duplicate) {
                                    duplicateCheck.push(this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].id);
                                    //if any patchSize or cover is null, just ignore them
                                    //if (
                                    //    (((inputCover != null) ? inputCover : cover ) == cover)
                                    //    &&
                                    //    (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                                    //)
                                    input.ecosystemCredit.push(this.createEcoSystemCreditInput(this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j]));
                                }
                            }
                        }

                    }
                }
            }

        },
        createSpeciesCreditInput: function (threatendedSpecies, vegZone) {
            return {
                threatendedSpecies: threatendedSpecies,
                vegZone: vegZone,
                candidate: null,
                assessRequired: null,
                presence: null,
                UOM: null,
                value: null,
                SOISelected: null,
                enabledPrecense: false
            }
        },

        formalizePatchSize: function (data) {
            if (data == null)
                return null;
            if (data == "")
                return null;

            return data.replace(" ", "");
        },

        formalizeCover: function (data) {
            if (data == null)
                return null;
            if (data == "")
                return null;

            return data.replace("<", "");
        },
        updateSpeciesModel: function (input) {
            this.model.ibraSpecies = [];
            var duplicateCheck = [];
            for (var i = 0; i < this.model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.speciesCredit.ibraSubRegion[i].id == input.subRegion.id) {
                    //found subregion
                    for (var j = 0; j < this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.patchSize);
                        var inputCover = this.formalizeCover(input.cover);
                        var duplicate = false;
                        if (duplicateCheck.indexOf(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].id) >= 0) duplicate = true
                        if (!duplicate) {
                            duplicateCheck.push(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].id);

                            this.model.ibraSpecies.push(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j]);
                        }

                    }
                }
            }
        },
        insertSpeciesCreditInput: function() {
            this.species.vegZone = this.speciesVegZone;
            this.model.inputs[0].speciesCredit.push(this.createSpeciesCreditInput(this.species, this.speciesVegZone));
            this.species = null;
            this.speciesVegZone = null;
        },
        initSpeciesCreditInput: function (input, inputPCT) {
            var duplicateCheck = [];
            for (var i = 0; i < this.model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.speciesCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                        var inputCover = this.formalizeCover(input.key.cover);

                        for (pct in inputPCT) {
                            var duplicate = false;
                            if (inputPCT[pct].pctCode != null) {
                                if (duplicateCheck.indexOf(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].id) >= 0) duplicate = true
                                //if (this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].pct.indexOf(inputPCT[pct].pctCode.pct.id) >= 0) {
                                    if (this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].pct.indexOf(inputPCT[pct].pctCode.pct.id) >= 0) {
                                    duplicateCheck.push(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].id);

                                    //if any patchSize or cover is null, just ignore them
                                    //if (
                                    //    (((inputCover != null) ? inputCover : cover ) == cover)
                                    //    &&
                                    //    (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                                    //)
                                    input.speciesCredit.push(this.createSpeciesCreditInput(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j], inputPCT[pct].identifier()));
                                }
                            }
                        }
                    }
                }
            }
        },

        createInput: function (id, cover, patchSize) {
            return {
                key: {ibraId: id, cover: cover, patchSize: patchSize},
                ecosystemCredit: [],
                speciesCredit: []

            }
        },

        findInput: function (ibraId, cover, patchSize) {
            for (var i = 0; i < this.model.inputs.length; i++) {
                if (this.model.inputs[i].key.ibraId == ibraId && (this.model.inputs[i].key.patchSize == patchSize) && (this.model.inputs[i].key.cover == cover))
                    return i;
            }

            return null;
        },

        updatePresence: function (index) {
            if (this.model.inputs[this.model.current].speciesCredit[index].candidate == null) {
                this.model.inputs[this.model.current].speciesCredit[index].enabledPrecense = false;
                return;
            }
            if (this.model.inputs[this.model.current].speciesCredit[index].assessRequired == null) {
                this.model.inputs[this.model.current].speciesCredit[index].enabledPrecense = false;
                return;
            }
            if (this.model.inputs[this.model.current].speciesCredit[index].presence == null) {
                this.model.inputs[this.model.current].speciesCredit[index].enabledPrecense = false;
                return;
            }

            this.model.inputs[this.model.current].speciesCredit[index].enabledPrecense =
                this.model.inputs[this.model.current].speciesCredit[index].candidate.name == "Yes" &&
                this.model.inputs[this.model.current].speciesCredit[index].assessRequired.name == "Yes" &&
                this.model.inputs[this.model.current].speciesCredit[index].presence.name == "Yes" &&
                (this.model.inputs[this.model.current].speciesCredit[index].threatendedSpecies.sensitivity == "Very high" || dataService.applicationDetailsModel.assessmentType.id != 3);

            this.emitHabitatUpdateEvent()
        },
        loadSpecies: function (inputPCT) {
            this.model.current = null;
            this.update(dataService.siteContextModel.inputs.ibra, dataService.siteContextModel.inputs.subRegion, dataService.siteContextModel.inputs.cover, dataService.siteContextModel.inputs.patchSize, inputPCT);
        },

        update: function (ibra, subRegion, cover, patchSize, inputPCT) {
            this.model.current = null;
            if (ibra == null)
                return;

            if (subRegion == null)
                return;

            var ibraId = subRegion.id;

            //this.model.current = this.findInput(ibraId, cover, patchSize);

            //find input
            //if (this.model.current != null)
            //return;

            //if not found, create one
            if (this.model.current = this.model.inputs.length == 0) {
                var input = this.createInput(ibraId, cover, patchSize);
                input.speciesCredit = [];
                input.ecosystemCredit = [];
                this.initEcoSystemCreditInput(input, inputPCT);
                //this.initSpeciesCreditInput(input, inputPCT);

                this.model.inputs.push(input);
            }
            this.model.current = this.model.inputs.length - 1;


        },
        findEcosystemCreditBySubRegion: function (input) {
            for (var i = 0; i < this.model.referenceData.ecosystemCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.ecosystemCredit.ibraSubRegion[i].id == ibraId) {
                    return this.model.referenceData.ecosystemCredit.ibraSubRegion[i];
                }
            }
            return null;
        },

        findspeciesCreditBySubRegion: function (ibraId) {
            for (var i = 0; i < this.model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.speciesCredit.ibraSubRegion[i].id == ibraId) {
                    return this.model.referenceData.speciesCredit.ibraSubRegion[i];
                }
            }

            return null;
        }
    }

}]);
