bamApp.controller('compositionController', ["$scope", "$rootScope", "$uibModal", "dataService", function ($scope, $rootScope, $uibModal, dataService) {

    this.dataService = dataService

    this.composition = {

        model: dataService.compositionModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
        },

        getApplicableCalcResults: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.compositionCalcResults
            } else if (this.model.calculatorMode == 'future') {
                return this.model.futureCompositionCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                return this.model.offsetFutureWithoutManagementCompositionCalcResults
            }
        },

        getCurrentComposition: function () {
            return this.getApplicableCalcResults()[this.model.inFocusVegetationZoneIndex]
        },

        addCompositionCalcResults: function () {
            this.getApplicableCalcResults().push(this.createCompositionCalcResults())
        },

        createCompositionCalcResults: function () {
            return dataService.compositionModel.createCompositionCalcResult()
        },

        updateCalcsFor: function (theObject, observedValue) {
            var theObjectLower = theObject.toCamelCase()
            if (this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future') {
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateUnweightedCompositionScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedCompositionScore(theObject, theObjectLower)
                this.calculateCompositionSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                this.calculateFutureValueWithoutOffset(theObject, theObjectLower, observedValue)
                this.calculateFutureConditionWithoutOffset(theObject, theObjectLower)
                this.calculateAdjustedConditionWithoutOffset(theObject, theObjectLower)
                this.calculateCompositionOffsetSubtotal()
            }
        },

        isOffsetMode: function() {
            return this.model.calculatorMode == 'offsetFutureWithoutManagement'
        },

        isDevelopmentMode: function() {
            return this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future'
        },

        calculateAdjustedConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeighting = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            //var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower + "Composition")
            if(benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeighting).toFixed(2)
                eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
            }
        },

        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            if(observedValue == 0) {
                result = 0
            } else {
                var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower + "Composition")
                if(observedValue > benchmark) {
                    result = 100
                } else {
                    var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                    result = (1.01 * (1 - Math.exp(-4.4 * Math.pow(futureValueWithoutOffset / benchmark, 1.85))) * 100).toFixed(2)
                }
            }
            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, managementTimeFrame) {
            var result = 0
            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            //var rateOfDecline = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name].rateOfDecline" + theObject)
            var rateOfDecline = 5.0
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + managementTimeFrame + "))").toFixed(2)
            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
        },

        calculateObservedMean: function (theObject, theObjectLower) {
            var observedMean = 0;
            this.getCurrentComposition().compositionTransects.forEach(function (element) {
                eval("observedMean += element." + theObjectLower + "")
            })
            eval("this.getCurrentComposition().observedMean" + theObject + " = observedMean / this.getCurrentComposition().compositionTransects.length")
        },

        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
            eval("this.getCurrentComposition().weighted" + theObject + "Score = Math.round(this.getCurrentComposition().unweighted" + theObject + "Score * this.getCurrentComposition().dynamicWeighting" + theObject + "Score)")
        },

        getBenchmark: function () {
            return this.model.benchmarks[this.model.keithClass][dataService.ibra.name]
        },

        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
            var sumOfBenchmarkScores = 0;
            var benchmarks = this.getBenchmark()
            for (var property in benchmarks) {
                if (benchmarks.hasOwnProperty(property)) {
                    sumOfBenchmarkScores += benchmarks[property];
                }
            }
            eval("this.getCurrentComposition().dynamicWeighting" + theObject + "Score = (benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores).toFixed(2)")
        },

        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
            var benchmarks = this.model.benchmarks[this.model.keithClass][dataService.ibra.name];
            var returnValue = 0;
            if (observedValue == 0) {
                returnValue = 0;
            } else {
                if (observedValue > eval("benchmarks." + theObjectLower + "Composition")) {
                    returnValue = (100);
                } else {
                    returnValue = (
                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Composition"), 1.85))) * 100
                    );
                }
            }
            eval("this.getCurrentComposition().unweighted" + theObject + "Score = Math.round(returnValue)")
        },

        calculateCompositionOffsetSubtotal: function() {
            var total = 0
            var c = this.getCurrentComposition()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetShrub
            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
            total += c.adjustedConditionWithoutOffsetForb
            total += c.adjustedConditionWithoutOffsetFern
            total += c.adjustedConditionWithoutOffsetOther
            c.compositionSubtotal = total.toFixed(0)
        },

        calculateCompositionSubtotal: function () {
            var total = 0
            for (var property in this.getCurrentComposition()) {
                if (this.getCurrentComposition().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
                    total += this.getCurrentComposition()[property]
                }
            }
            this.getCurrentComposition().compositionSubtotal = total
        },

        createCompositionTransect: function () {
            return {
                tree: null,
                shurb: null,
                grassAndGrassLike: null,
                forb: null,
                fern: null,
                other: null
            }
        },

        addCompositionTransect: function () {
            if (this.getCurrentComposition() == undefined) {
                this.addCompositionCalcResults();
            }
            this.getCurrentComposition().compositionTransects.push(this.createCompositionTransect())
        }
    }

    if (this.composition.getApplicableCalcResults()[this.composition.model.inFocusVegetationZoneIndex].compositionTransects.length == 0) {
        this.composition.addCompositionTransect()
    }

}]);