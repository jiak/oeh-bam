angular.module('bamApp').controller('habitatController', ["$scope", "referenceDataService", "$rootScope", "dataService", function ($scope, referenceDataService, $rootScope, dataService) {

    this.yes = "sdfljsdflskdjf"

    //init
    this.model = dataService.habitatModel

    this.dataService = dataService

    this.habitat = {

        createEcoSystemCreditInput: function (threatendedSpecies) {
            return {
                threatendedSpecies: threatendedSpecies,
                presence: null,
                sensitivity: null
            }
        },

        initEcoSystemCreditInput: function (input) {
            for (var i = 0; i < model.referenceData.ecosystemCredit.ibraSubRegion.length; i++) {
                if (model.referenceData.ecosystemCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = formalizePatchSize(input.key.patchSize);
                        var inputCover = formalizeCover(input.key.cover);

                        //if any patchSize or cover is null, just ignore them
                        if (
                            (((inputCover != null) ? inputCover : cover ) == cover)
                            &&
                            (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                        )
                            input.ecoSystemCredit.push(this.createEcoSystemCreditInput(model.referenceData.ecosystemCredit.ibraSubRegion[i].threatendedSpecies[j]));
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
                SOISelected: null
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
            for (var i = 0; i < model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (model.referenceData.speciesCredit.ibraSubRegion[i].id == input.key.ibraId) {
                    //found subregion
                    for (var j = 0; j < model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies.length; j++) {
                        var patchSize = model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].patchSize;
                        var cover = model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j].percentCover;
                        var inputPatchSize = this.formalizePatchSize(input.key.patchSize);
                        var inputCover = this.formalizeCover(input.key.cover);

                        //if any patchSize or cover is null, just ignore them
                        if (
                            (((inputCover != null) ? inputCover : cover ) == cover)
                            &&
                            (((inputPatchSize != null) ? inputPatchSize : patchSize ) == patchSize)
                        )
                            input.speciesCredit.push(this.createSpeciesCreditInput(model.referenceData.speciesCredit.ibraSubRegion[i].threatendedSpecies[j]));
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
            for (var i = 0; i < this.inputs.length; i++) {
                if (this.inputs[i].key.ibraId == ibraId && (this.inputs[i].key.patchSize == patchSize) && (this.inputs[i].key.cover == cover))
                    return i;
            }

            return null;
        },

        update: function () {
            this.current = null;

            if (dataService.siteContextModel.inputs.ibra == null)
                return;

            if (dataService.siteContextModel.inputs.subRegion == null)
                return;

            var ibraId = dataService.siteContextModel.inputs.subRegion.id;

            this.current = this.findInput(dataService.siteContextModel.inputs.subRegion.id, dataService.siteContextModel.inputs.cover, dataService.siteContextModel.inputs.patchSize);

            //find input
            if (this.current != null)
                return;

            //if not found, create one
            var input = this.createInput(ibraId, dataService.siteContextModel.inputs.cover, dataService.siteContextModel.inputs.patchSize);

            this.initEcoSystemCreditInput(input);
            this.initSpeciesCreditInput(input);

            this.inputs.push(input);
            this.current = this.inputs.length - 1;


        },
        findEcosystemCreditBySubRegion: function (input) {
            for (var i = 0; i < model.referenceData.ecosystemCredit.ibraSubRegion.length; i++) {
                if (model.referenceData.ecosystemCredit.ibraSubRegion[i].id == ibraId) {
                    return model.referenceData.ecosystemCredit.ibraSubRegion[i];
                }
            }
            return null;
        },

        findspeciesCreditBySubRegion: function (ibraId) {
            for (var i = 0; i < model.referenceData.speciesCredit.ibraSubRegion.length; i++) {
                if (model.referenceData.speciesCredit.ibraSubRegion[i].id == ibraId) {
                    return model.referenceData.speciesCredit.ibraSubRegion[i];
                }
            }

            return null;
        }
    }

}]);
