angular.module('bamApp').controller('habitatController', ["$scope", "referenceDataService", "$rootScope", "dataService", function ($scope, referenceDataService, $rootScope, dataService) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.siteContextUpdateEvent, function(event, body) {
        $scope.hc.habitat.update(body.ibra, body.subRegion, body.cover, body.patchSize)
    })

    this.habitat = {
        streamlineSensitivityCheck: function(species) {
          if (dataService.applicationDetailsModel.assessmentType.id !=3) {
              return true;
          } else {
              if (species.sensitivity == "Very high") {
                  return true;
              } else {
                  return false;
              }
          }
        },

        applicationType: dataService.applicationDetailsModel.assessmentType,

        model: dataService.habitatModel,

        createEcoSystemCreditInput: function (threatendedSpecies) {
            return {
                threatendedSpecies: threatendedSpecies,
                presence: null,
                sensitivity: null
            }
        },

        initEcoSystemCreditInput: function (input) {
            for (var i = 0; i < this.model.referenceData.ecosystemCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.ecosystemCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                        var inputCover = this.formalizeCover(input.key.cover);


                        //if any patchSize or cover is null, just ignore them
                        if (
                            (((inputCover != null) ? inputCover : cover ) == cover)
                            &&
                            (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                        )
                            input.ecoSystemCredit.push(this.createEcoSystemCreditInput(this.model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j]));
                    }
                }
            }

        },
        createSpeciesCreditInput: function (threatendedSpecies) {
            return {
                threatendedSpecies: threatendedSpecies,
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

        initSpeciesCreditInput: function (input, subRegion) {
            for (var i = 0; i < this.model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (this.model.referenceData.speciesCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                        var inputCover = this.formalizeCover(input.key.cover);

                        //if any patchSize or cover is null, just ignore them
                        if (
                            (((inputCover != null) ? inputCover : cover ) == cover)
                            &&
                            (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                        )
                            input.speciesCredit.push(this.createSpeciesCreditInput(this.model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j]));
                    }
                }
            }
        },

        createInput: function (id, cover, patchSize) {
            return {
                key: {ibraId: id, cover: cover, patchSize: patchSize},
                ecoSystemCredit: [],
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
                (this.model.inputs[this.model.current].speciesCredit[index].threatendedSpecies.sensitivity == "Very high" || dataService.applicationDetailsModel.assessmentType.id !=3);

        },

        update: function (ibra, subRegion, cover, patchSize) {
            this.model.current = null;
            if (ibra == null)
                return;

            if (subRegion == null)
                return;

            var ibraId = subRegion.id;

            this.model.current = this.findInput(ibraId, cover, patchSize);

            //find input
            if (this.model.current != null)
                return;

            //if not found, create one
            var input = this.createInput(ibraId, cover, patchSize);

            this.initEcoSystemCreditInput(input);
            this.initSpeciesCreditInput(input);

            this.model.inputs.push(input);
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
