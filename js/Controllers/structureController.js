bamApp.controller('structureController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.structure = {

        model: dataService.structureModel,

        getCurrentStructure: function (index) {
            return this.model.structureCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex]
        },

        addStructureCalcResults: function () {
            this.model.structureCalcResults.push(this.createStructureCalcResults())
        },

        createStructureCalcResults: function () {
            return {
                structureTransects: [],
                observedMeanTree: null,
                observedMeanShrub: null,
                observedMeanGrassAndGrassLike: null,
                observedMeanForb: null,
                observedMeanFern: null,
                observedMeanOther: null,
                unweightedTreeScore: null,
                unweightedShrubScore: null,
                unweightedGrassAndGrassLikeScore: null,
                unweightedForbScore: null,
                unweightedFernScore: null,
                unweightedOtherScore: null,
                weightedTreeScore: null,
                weightedShrubScore: null,
                weightedGrassAndGrassLikeScore: null,
                weightedForbScore: null,
                weightedFernScore: null,
                weightedOtherScore: null,
                dynamicWeightingTreeScore: null,
                dynamicWeightingShrubScore: null,
                dynamicWeightingGrassAndGrassLikeScore: null,
                dynamicWeightingForbScore: null,
                dynamicWeightingFernScore: null,
                dynamicWeightingOtherScore: null,
                structureSubtotal: null
            }
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            this.calculateObservedMean(theObject, theObjectLower)
            this.calculateDynamicWeightingScore(theObject, theObjectLower)
            this.calculateUnweightedStructureScore(theObject, theObjectLower, observedValue)
            this.calculateWeightedStructureScore(theObject, theObjectLower)
            this.calculateStructureSubtotal()
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentStructure().structureTransects.forEach(function (element) {
                eval(`observedMean += element.${theObjectLower}`)
            })
            eval(`this.getCurrentStructure().observedMean${theObject} = observedMean / this.getCurrentStructure().structureTransects.length`)
        },

        calculateWeightedStructureScore: function (theObject, theObjectLower) {
            eval(`this.getCurrentStructure().weighted${theObject}Score = Math.round(this.getCurrentStructure().unweighted${theObject}Score * this.getCurrentStructure().dynamicWeighting${theObject}Score)`)
        },

        getKeithClass: function () {
            return dataService.vegetationModel.input.pct[dataService.vegetationModel.inFocusVegetationZoneIndex].keithClass.name
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.model.benchmarks[this.getKeithClass()][dataService.ibra];
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval(`this.getCurrentStructure().dynamicWeighting${theObject}Score = (benchmarks.${theObjectLower}Cover / sumOfBenchmarkScores).toFixed(2)`)
        },

        calculateUnweightedStructureScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.getKeithClass()][dataService.ibra];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval(`benchmarks.${theObjectLower}Cover`)) {
                    returnValue = (
                    (100 + 50) - (50 + ((100 - 50)
                    /
                    (1 + Math.exp(-10 * ((observedValue / eval(`benchmarks.${theObjectLower}Cover`) - 1.5)))))))
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Cover`), 1.85))) * 100
                    );
                    returnValue = (1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval(`benchmarks.${theObjectLower}Cover`), 1.85))) * 100);
                }
            }
            eval(`this.getCurrentStructure().unweighted${theObject}Score = Math.round(returnValue)`)
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
            if(this.model.structureCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex] == undefined) {
                this.addStructureCalcResults()
            }
            this.model.structureCalcResults[dataService.vegetationModel.inFocusVegetationZoneIndex].structureTransects.push(this.createStructureTransect())
        }
    }
}])