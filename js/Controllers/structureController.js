bamApp.controller('structureController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.structure = {

        model: dataService.structureModel,

        close: function() {
            dataService.vegetationModel.isPopupOpen = false
        },

        getApplicableCalcResults: function () {
            if (this.model.currentOrFuture == 'current') {
                return this.model.structureCalcResults
            } else {
                return this.model.futureStructureCalcResults
            }
        },

        getCurrentStructure: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        },

        addStructureCalcResults: function () {
            this.getApplicableCalcResults().push(this.createStructureCalcResults())
        },

        createStructureCalcResults: function () {
            return dataService.structureModel.createStructureCalcResult()
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedStructureScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedStructureScore(theObject, theObjectLower)
            this.calculateStructureSubtotal()
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.ibra.name]
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentStructure().structureTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            eval("this.getCurrentStructure().observedMean" + theObject + " = observedMean / this.getCurrentStructure().structureTransects.length")
        },

        calculateWeightedStructureScore: function (theObject, theObjectLower) {
            eval("this.getCurrentStructure().weighted" + theObject + "Score = Math.round(this.getCurrentStructure().unweighted" + theObject + "Score * this.getCurrentStructure().dynamicWeighting" + theObject + "Score)")
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval("this.getCurrentStructure().dynamicWeighting" + theObject + "Score = (benchmarks." + theObjectLower + "Cover / sumOfBenchmarkScores).toFixed(2)")
        },

        calculateUnweightedStructureScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.getBenchmark()
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval("benchmarks." + theObjectLower + "Cover")) {
                    returnValue = (
                    (100 + 50) - (50 + ((100 - 50)
                    /
                    (1 + Math.exp(-10 * ((observedValue / eval("benchmarks." + theObjectLower + "Cover") - 1.5)))))))
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 1.85))) * 100
                    );
                    returnValue = (1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Cover"), 1.85))) * 100);
                }
            }
            eval("this.getCurrentStructure().unweighted" + theObject + "Score = Math.round(returnValue)")
        },

        calculateStructureSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentStructure()) {
                if (this.getCurrentStructure().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.getCurrentStructure()[property]
                }
            }
            this.getCurrentStructure().structureSubtotal = total
        },

        createStructureTransect: function () {
            return {
                tree: null,
                shurb: null,
                grassAndGrassLike: null,
                forb: null,
                fern: null,
                other: null
            }
        },

        addStructureTransect: function () {
            if(this.getCurrentStructure() == undefined) {
                this.addStructureCalcResults()
            }
            this.getCurrentStructure().structureTransects.push(this.createStructureTransect())
        }
    }

    if(this.structure.getApplicableCalcResults()[this.structure.model.inFocusVegetationZoneIndex].structureTransects.length == 0) {
        this.structure.addStructureTransect()
    }

}])