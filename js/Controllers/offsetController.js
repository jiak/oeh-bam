bamApp.controller('offsetController', ["$scope", "dataService", "referenceDataService", function ($scope, dataService, referenceDataService) {

    this.dataService = dataService

    this.offset = {

        model: dataService.offsetModel,

        addPctObject: function () {
            this.model.input.pct.push(this.createPctObject())
        },

        createPctObject: function () {
            return {
                formation: null,
                keithClass: null,
                pct: null,
                tec: null,
                percentCleared: "waiting",
                threatStatusClass: "waiting"
            }
        },

        getAvailablePct: function () {
            var availablePcts = new Array()
            this.model.input.pct.forEach(function (pctItem) {
                if (pctItem.keithClass != undefined && pctItem.keithClass.name != undefined && pctItem.keithClass.name != null) {
                    if (referenceDataService.compositionBenchmarkData[pctItem.keithClass.name][dataService.ibra.name] != undefined && referenceDataService.functionBenchmarkData[pctItem.keithClass.name][dataService.ibra.name] != undefined && referenceDataService.structureBenchmarkData[pctItem.keithClass.name][dataService.ibra.name] != undefined) {
                        availablePcts.push(pctItem)
                    }
                }
            })
            return availablePcts
        },

        populateKeithClassForZone: function (vegetationZoneItem) {
            this.getAvailablePct().filter(function (item) {
                vegetationZoneItem.keithClass = item.keithClass.name
            })
        },

        setCalcToDisplay: function (inFocusVegetationZoneIndex, calculatorMode, keithClass, calcType) {
            this.model.isPopupOpen = true
            this.model.calcTypeToPopup = calcType
            dataService.compositionModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            dataService.functionModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            dataService.structureModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            dataService.locationModel.setInputs(inFocusVegetationZoneIndex, calculatorMode)
        },

        shouldThisPopupBeOpened: function (calculatorMode, $index, calcType) {
            return (this.model.isPopupOpen && calcType == this.model.calcTypeToPopup && $index == eval("dataService." + calcType + "Model.inFocusVegetationZoneIndex") && calculatorMode == eval("dataService." + calcType + "Model.calculatorMode")) ? true : false
        },

        calculateGeomean: function(index, calculatorMode) {
            var cs, ss, fs = 0
            if(calculatorMode == 'current') {
                cs = dataService.compositionModel.compositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.structureCalcResults[index].structureSubtotal
                fs = dataService.functionModel.functionCalcResults[index].functionSubtotal
            } else if (calculatorMode == 'future') {
                cs = dataService.compositionModel.futureCompositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.futureStructureCalcResults[index].structureSubtotal
                fs = dataService.functionModel.futureFunctionCalcResults[index].functionSubtotal
            } else if (calculatorMode == 'offsetFutureWithoutManagement') {
                cs = dataService.compositionModel.offsetFutureWithoutManagementCompositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.offsetFutureWithoutManagementStructureCalcResults[index].structureSubtotal
            }
            var sum = 1
            var count = 0
            if(cs > 0) {
                sum *= cs
                count++
            }
            if(ss > 0) {
                sum *= ss
                count++
            }
            if(fs > 0) {
                sum *= fs
                count++
            }
            if(sum > 0 && count > 0) {
                return Math.pow(sum, 1/count).toFixed(1)
            } else {
                return 0
            }
        },

        addVegetationZone: function () {
            // can we add more vegetation zones?
            var canAddMore = false
            this.model.input.pct.forEach(function (item) {
                if ($scope.oc.offset.model.zoneMap.indexOf(item.pct.id + "_Good") == -1 || $scope.oc.offset.model.zoneMap.indexOf(item.pct.id + "_Low") == -1) {
                    canAddMore = true
                }
            })
            // before offering more zones, make sure we actually have benchmark data
            this.getAvailablePct().forEach(function (item) {
                if ($scope.oc.offset.shouldOfferPctCode(item.pct.id)) {
                    // have we exhausted all possible condition class combinations for this pct id?
                    if ($scope.oc.offset.model.zoneMap.indexOf(item.pct.id + "_Good") == -1 || $scope.oc.offset.model.zoneMap.indexOf(item.pct.id + "_Low") == -1) {
                        canAddMore = true
                        // do we have the reference data for it?
                        if (referenceDataService.compositionBenchmarkData[item.keithClass.name][dataService.ibra.name] != undefined && referenceDataService.functionBenchmarkData[item.keithClass.name][dataService.ibra.name] != undefined && referenceDataService.structureBenchmarkData[item.keithClass.name][dataService.ibra.name] != undefined) {
                            canAddMore = true
                        } else {
                            canAddMore = false
                        }
                    } else {
                        canAddMore = false
                    }
                } else {
                    canAddMore = false
                }
            })
            if (canAddMore) {
                this.model.input.vegetationZones.push(this.createVegetationZoneItem())
                dataService.compositionModel.compositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.compositionModel.offsetFutureWithoutManagementCompositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.structureModel.structureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.structureModel.offsetFutureWithoutManagementStructureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.functionModel.functionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
                dataService.functionModel.offsetFutureWithoutManagementFunctionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
            }
        },

        shouldOfferPctCode: function (pctCode) {
            return (this.model.zoneMap.indexOf(pctCode + "_Good") == -1 || this.model.zoneMap.indexOf(pctCode + "_Low") == -1) ? true : false
        },

        createVegetationZoneItem: function () {
            return {
                pctCode: null,
                keithClass: null,
                conditionClass: null,
                identifier: function () {
                    return (this.pctCode != null && this.pctCode.pct.id != null && this.conditionClass != null) ? this.pctCode.pct.id + "_" + this.conditionClass : "..."
                },
                area: null,
                composition: null,
                structure: null,
                function: null,
                vis: null
            }
        }
    }

}])