bamApp.controller('structureController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.structure = {

        model: dataService.structureModel,

        close: function () {
            dataService.vegetationModel.isPopupOpen = false
            dataService.offsetModel.isPopupOpen = false
        },

        getApplicableCalcResults: function () {
            if (this.model.calculatorMode == 'current') {
                return this.model.structureCalcResults
            } else if (this.model.calculatorMode == 'future') {
                return this.model.futureStructureCalcResults
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                return this.model.offsetFutureWithoutManagementStructureCalcResults
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
            if (this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future') {
                this.calculateObservedMean(theObject, theObjectLower)
                this.calculateDynamicWeightingScore(theObject, theObjectLower)
                this.calculateUnweightedStructureScore(theObject, theObjectLower, observedValue)
                this.calculateWeightedStructureScore(theObject, theObjectLower)
                this.calculateStructureSubtotal()
            } else if (this.model.calculatorMode == 'offsetFutureWithoutManagement') {
                this.calculateFutureValueWithoutOffset(theObject, theObjectLower, observedValue)
                this.calculateFutureConditionWithoutOffset(theObject, theObjectLower)
                this.calculateAdjustedConditionWithoutOffset(theObject, theObjectLower)
                this.calculateStructureOffsetSubtotal()
            }
        },

        isOffsetMode: function () {
            return this.model.calculatorMode == 'offsetFutureWithoutManagement'
        },

        isDevelopmentMode: function () {
            return this.model.calculatorMode == 'current' || this.model.calculatorMode == 'future'
        },

        calculateAdjustedConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
            var dynamicWeighting = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
            //var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower + "Structure")
            if (benchmark == 0) {
                result = 0
            } else {
                result = (futureConditionWithoutOffset * dynamicWeighting).toFixed(2)
                eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
            }
        },

        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
            var result = 0
            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name]." + theObjectLower + "Cover")
            if (benchmark == 0) {
                result = 0
            } else {
                var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
                if (futureValueWithoutOffset > benchmark) {
                    result = ((100 + 50) - (50 + ((100 - 50) / (1 + Math.exp(-10 * ((futureValueWithoutOffset / benchmark) - 1.5))))))
                } else {
                    result = (1.01 * (1 - Math.exp((-4.4 * Math.pow(futureValueWithoutOffset / benchmark, 1.85)))) * 100)
                }
            }
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result.toFixed(2))
        },

        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, managementTimeFrame) {
            var result = 0
            var observedValue = eval("this.model.structureCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
            //var rateOfDecline = eval("this.model.benchmarks[this.model.keithClass][dataService.ibra.name].rateOfDecline" + theObject)
            var rateOfDecline = 5.0
            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + managementTimeFrame + "))").toFixed(2)
            eval("this.model.offsetFutureWithoutManagementStructureCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
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

        calculateStructureOffsetSubtotal: function () {
            var total = 0
            var c = this.getCurrentStructure()
            total += c.adjustedConditionWithoutOffsetTree
            total += c.adjustedConditionWithoutOffsetShrub
            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
            total += c.adjustedConditionWithoutOffsetForb
            total += c.adjustedConditionWithoutOffsetFern
            total += c.adjustedConditionWithoutOffsetOther
            c.structureSubtotal = total.toFixed(0)
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
            if (this.getCurrentStructure() == undefined) {
                this.addStructureCalcResults()
            }
            this.getCurrentStructure().structureTransects.push(this.createStructureTransect())
        }
    }

    if (this.structure.getApplicableCalcResults()[this.structure.model.inFocusVegetationZoneIndex].structureTransects.length == 0) {
        this.structure.addStructureTransect()
    }

}])
