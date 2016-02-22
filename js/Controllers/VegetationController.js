bamApp.controller('vegetationController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    this.vegetationTab = {

        model: dataService.vegetationModel,

        addToZoneMap: function (vegetationZoneItem) {
            this.model.zoneMap.push(vegetationZoneItem.pctCode.pct.id + "_" + vegetationZoneItem.conditionClass)
        },

        shouldOfferPctCode: function (pctCode) {
            return (this.model.zoneMap.indexOf(pctCode + "_Good") == -1 || this.model.zoneMap.indexOf(pctCode + "_Low") == -1) ? true : false
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

        close: function () {
            this.model.isPopupOpen = false
        },

        shouldThisPopupBeOpened: function (currentOrFuture, $index, calcType) {
            return (this.model.isPopupOpen && calcType == this.model.calcTypeToPopup && $index == eval("dataService." + calcType + "Model.inFocusVegetationZoneIndex") && currentOrFuture == eval("dataService." + calcType + "Model.currentOrFuture")) ? true : false
        },

        populateKeithClassForZone: function (vegetationZoneItem) {
            this.getAvailablePct().filter(function (item) {
                vegetationZoneItem.keithClass = item.keithClass.name
            })
        },

        setCalcToDisplay: function (inFocusVegetationZoneIndex, currentOrFuture, keithClass, calcType) {
            this.model.isPopupOpen = true
            this.model.calcTypeToPopup = calcType
            dataService.compositionModel.setInputs(inFocusVegetationZoneIndex, currentOrFuture, keithClass)
            dataService.functionModel.setInputs(inFocusVegetationZoneIndex, currentOrFuture, keithClass)
            dataService.structureModel.setInputs(inFocusVegetationZoneIndex, currentOrFuture, keithClass)
        },

        setFocusedFutureVegetationZone: function (index) {
            this.model.inFocusFutureVegetationZoneIndex = index
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
        },

        createFutureVegetationZoneItem: function () {
            return {
                typeCode: null,
                conditionClass: null,
                identifier: function () {
                    return (this.pctCode != null && this.pctCode.pct.id != null && this.conditionClass != null) ? this.pctCode.pct.id + "_" + this.conditionClass : "..."
                },
                area: null,
                composition: null,
                structure: null,
                function: null,
                vis: null,
                changeVis: null
            }
        },

        addPctObject: function () {
            this.model.input.pct.push(this.createPctObject())
        },

        removePctObject: function (index) {
            this.model.input.pct.splice(index, 1)
        },

        addVegetationZone: function () {
            // can we add more vegetation zones?
            var canAddMore = false
            this.model.input.pct.forEach(function (item) {
                if ($scope.vc.vegetationTab.model.zoneMap.indexOf(item.pct.id + "_Good") == -1 || $scope.vc.vegetationTab.model.zoneMap.indexOf(item.pct.id + "_Low") == -1) {
                    canAddMore = true
                }
            })
            // before offering more zones, make sure we actually have benchmark data
            this.getAvailablePct().forEach(function (item) {
                if ($scope.vc.vegetationTab.shouldOfferPctCode(item.pct.id)) {
                    // have we exhausted all possible condition class combinations for this pct id?
                    if ($scope.vc.vegetationTab.model.zoneMap.indexOf(item.pct.id + "_Good") == -1 || $scope.vc.vegetationTab.model.zoneMap.indexOf(item.pct.id + "_Low") == -1) {
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
                this.model.input.futureVegetationZones.push(this.createFutureVegetationZoneItem())
                dataService.compositionModel.compositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.compositionModel.futureCompositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.structureModel.structureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.structureModel.futureStructureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.functionModel.functionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
                dataService.functionModel.futureFunctionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
            }
        },
    }
}]);



