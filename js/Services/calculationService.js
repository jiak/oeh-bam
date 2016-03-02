//bamApp.service('calculationService', ["referenceDataService", function (referenceDataService) {
//
//    return {
//
//        calculateRawRestorationGain: function (theObject, theObjectLower) {
//            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var result = 0
//            if (benchmark == 0) {
//                result = 0
//            } else {
//                futureConditionWithOffset = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject)
//                rawCurrentCondition = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
//                result = futureConditionWithOffset - rawCurrentCondition
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateRawTotalGain: function (theObject, theObjectLower) {
//            var rawAvertedLoss = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject)
//            var rawRestorationGain = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawRestorationGain" + theObject)
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject + " = " + (rawAvertedLoss + rawRestorationGain).toFixed(2))
//        },
//
//        calculateNbpv: function (theObject, theObjectLower) {
//            var result = 0
//            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var rawTotalGain = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
//            var discountRate = 3
//            var managementTimeFrame = 20
//            if (c11Benchmark == 0) {
//                result = 0
//            } else {
//                if (rawTotalGain == 0) {
//                    result = 0
//                } else {
//                    result = rawTotalGain/(Math.pow(1 + (discountRate/100), managementTimeFrame))
//                }
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateWeightedNbpv: function (theObject, theObjectLower) {
//            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var result = 0
//            if (c11Benchmark == 0) {
//                result = 0
//            } else {
//                var nbpv1 = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].nbpv" + theObject)
//                var dynamicWeighting = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
//                result = nbpv1 * dynamicWeighting
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNbpv" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateWeightedNoDiscount: function (theObject, theObjectLower) {
//            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var result = 0
//            if (c11Benchmark == 0) {
//                result = 0
//            } else {
//                var rawTotalGain = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawTotalGain" + theObject)
//                var dynamicWeightingMinusOther = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeightingMinusOther" + theObject + "Score")
//                result = rawTotalGain * dynamicWeightingMinusOther
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].weightedNoDiscount" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateFutureConditionWithOffset: function (theObject, theObjectLower) {
//            var c11Benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var n11FutureValueWithOffset = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject)
//            var result = 0
//            if (c11Benchmark == 0) {
//                result = 0
//            } else {
//                if (n11FutureValueWithOffset > c11Benchmark) {
//                    result = 100
//                } else {
//                    result = (1.01*(1-Math.exp(-4.4*Math.pow(n11FutureValueWithOffset/c11Benchmark, 1.85)))*100)
//                }
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithOffset" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateFutureValueWithOffset: function (theObject, theObjectLower) {
//            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var supplimentaryPlanting = "Present"
//            var currentValueWithAddedConstant = eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject)
//            var rValue = eval("this.model.rateOfIncrease." + theObjectLower + "Richness")
//            var managementTimeFrame = 20
//            var numberOfSpeciesPlanted = 5
//            var restorationModifier = eval("this.model.restorationModifierForPlanting." + theObjectLower + "Richness")
//            var result = 0
//            if (benchmark == 0) {
//                result = 0
//            } else {
//                if (supplimentaryPlanting == 'Absent') {
//                    result = (benchmark * currentValueWithAddedConstant * Math.exp(rValue * 20)) / (benchmark + currentValueWithAddedConstant * (Math.exp(rValue * 20) - 1))
//                } else {
//                    var someVal = 0.75
//                    if(theObject == 'GrassAndGrassLike') {
//                        someVal = 0.33
//                    } else if (theObject == 'Forb') {
//                        someVal = 0.2
//                    } else if (theObject == 'Fern') {
//                        someVal = 0.2
//                    }
//                    result = (restorationModifier*numberOfSpeciesPlanted*someVal) + (benchmark*(currentValueWithAddedConstant)*Math.exp((rValue)*managementTimeFrame)) / (benchmark+(currentValueWithAddedConstant)*(Math.exp((rValue)*managementTimeFrame)-1))
//                }
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithOffset" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateRawAvertedLoss: function (theObject, theObjectLower) {
//            var result = 0
//            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            if (benchmark == 0) {
//                result = 0
//            } else {
//                var rawCurrentCondition = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].unweighted" + theObject + "Score")
//                var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
//                result = rawCurrentCondition - futureConditionWithoutOffset
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].rawAvertedLoss" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateCurrentValueWithAddedConstant: function (theObject, theObjectLower) {
//            var result = 0
//            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
//            if (benchmark == 0) {
//                result = 0
//            } else {
//                if (observedValue == 0) {
//                    result = observedValue + (benchmark * 0.01)
//                } else {
//                    result = observedValue
//                }
//            }
//            eval("this.model.offsetFutureWithManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].currentValueWithAddedConstant" + theObject + " = " + result.toFixed(2))
//        },
//
//        calculateAdjustedConditionWithoutOffset: function (theObject, theObjectLower) {
//            var result = 0
//            var futureConditionWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject)
//            var dynamicWeighting = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].dynamicWeighting" + theObject + "Score")
//            var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//            if (benchmark == 0) {
//                result = 0
//            } else {
//                result = (futureConditionWithoutOffset * dynamicWeighting).toFixed(2)
//                eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].adjustedConditionWithoutOffset" + theObject + " = " + result)
//            }
//        },
//
//        calculateFutureConditionWithoutOffset: function (theObject, theObjectLower) {
//            var result = 0
//            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
//            if (observedValue == 0) {
//                result = 0
//            } else {
//                var benchmark = eval("this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]." + theObjectLower + "Composition")
//                if (observedValue > benchmark) {
//                    result = 100
//                } else {
//                    var futureValueWithoutOffset = eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject)
//                    result = (1.01 * (1 - Math.exp(-4.4 * Math.pow(futureValueWithoutOffset / benchmark, 1.85))) * 100).toFixed(2)
//                }
//            }
//            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureConditionWithoutOffset" + theObject + " = " + result)
//        },
//
//        calculateFutureValueWithoutOffset: function (theObject, theObjectLower, rateOfDecline) {
//            var result = 0
//            var observedValue = eval("this.model.compositionCalcResults[this.model.inFocusVegetationZoneIndex].observedMean" + theObject)
//            result = eval(observedValue + " * (Math.pow((1 - " + (rateOfDecline / 100) + "), " + 20 + "))").toFixed(2)
//            eval("this.model.offsetFutureWithoutManagementCompositionCalcResults[this.model.inFocusVegetationZoneIndex].futureValueWithoutOffset" + theObject + " = " + result)
//        },
//
//        calculateObservedMean: function (theObject, theObjectLower) {
//            var observedMean = 0;
//            this.getCurrentComposition().compositionTransects.forEach(function (element) {
//                eval("observedMean += element." + theObjectLower + "")
//            })
//            eval("this.getCurrentComposition().observedMean" + theObject + " = observedMean / this.getCurrentComposition().compositionTransects.length")
//        },
//
//        calculateWeightedCompositionScore: function (theObject, theObjectLower) {
//            eval("this.getCurrentComposition().weighted" + theObject + "Score = Math.round(this.getCurrentComposition().unweighted" + theObject + "Score * this.getCurrentComposition().dynamicWeighting" + theObject + "Score)")
//        },
//
//        getBenchmark: function () {
//            return this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name]
//        },
//
//        calculateDynamicWeightingScore: function (theObject, theObjectLower) {
//            var sumOfBenchmarkScores = 0;
//            var benchmarks = this.getBenchmark()
//            for (var property in benchmarks) {
//                if (benchmarks.hasOwnProperty(property)) {
//                    sumOfBenchmarkScores += benchmarks[property];
//                }
//            }
//            eval("this.getCurrentComposition().dynamicWeighting" + theObject + "Score = (benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores).toFixed(2)")
//        },
//
//        calculateDynamicWeightingScoreMinusOther: function (theObject, theObjectLower) {
//            var sumOfBenchmarkScores = 0;
//            var benchmarks = this.getBenchmark()
//            for (var property in benchmarks) {
//                if (benchmarks.hasOwnProperty(property) && property.indexOf("Other") == -1) {
//                    sumOfBenchmarkScores += benchmarks[property];
//                }
//            }
//            eval("this.getCurrentComposition().dynamicWeightingMinusOther" + theObject + "Score = (benchmarks." + theObjectLower + "Composition / sumOfBenchmarkScores).toFixed(2)")
//        },
//
//        calculateUnweightedCompositionScore: function (theObject, theObjectLower, observedValue) {
//            var benchmarks = this.model.benchmarks[this.model.keithClass][dataService.siteContextModel.inputs.ibra.name];
//            var returnValue = 0;
//            if (observedValue == 0) {
//                returnValue = 0;
//            } else {
//                if (observedValue > eval("benchmarks." + theObjectLower + "Composition")) {
//                    returnValue = (100);
//                } else {
//                    returnValue = (
//                        1.01 * (1 - Math.exp(-4.4 * Math.pow(observedValue / eval("benchmarks." + theObjectLower + "Composition"), 1.85))) * 100
//                    );
//                }
//            }
//            eval("this.getCurrentComposition().unweighted" + theObject + "Score = Math.round(returnValue)")
//        },
//
//        calculateCompositionOffsetSubtotal: function () {
//            var total = 0
//            var c = this.getCurrentComposition()
//            total += c.adjustedConditionWithoutOffsetTree
//            total += c.adjustedConditionWithoutOffsetShrub
//            total += c.adjustedConditionWithoutOffsetGrassAndGrassLike
//            total += c.adjustedConditionWithoutOffsetForb
//            total += c.adjustedConditionWithoutOffsetFern
//            total += c.adjustedConditionWithoutOffsetOther
//            c.compositionSubtotal = total.toFixed(0)
//        },
//
//        calculateCompositionSubtotal: function () {
//            var total = 0
//            for (var property in this.getCurrentComposition()) {
//                if (this.getCurrentComposition().hasOwnProperty(property) && (property == 'weightedTreeScore' || property == 'weightedShrubScore' || property == 'weightedGrassAndGrassLikeScore' || property == 'weightedForbScore' || property == 'weightedFernScore' || property == 'weightedOtherScore')) {
//                    total += this.getCurrentComposition()[property]
//                }
//            }
//            this.getCurrentComposition().compositionSubtotal = total
//        }
//    }
//
//}])