bamApp.controller('vegetationController', ["$scope", "$rootScope", "referenceDataService", "dataService", "$uibModal", function ($scope, $rootScope, referenceDataService, dataService, $uibModal) {

    this.dataService = dataService

    $rootScope.$on(dataService.events.siteContextUpdateEvent, function (event, body) {
        if (dataService.applicationDetailsModel.assessmentType.name == 'Development') {
            $scope.vc.vegetationTab.addPctObject()
        }
    })

    $rootScope.$on(dataService.events.requestVegzoneUpdateEvent, function (event, body) {
        if (dataService.applicationDetailsModel.assessmentType.name == 'Development') {
            $scope.vc.vegetationTab.dispatchVegzoneUpdateEvent()
        }
    })

    $rootScope.$on(dataService.events.recalculateVisEvent, function (event, body) {
        if (dataService.applicationDetailsModel.assessmentType.name == 'Development') {
            $scope.vc.vegetationTab.recalculateVis()
        }
    })

    this.vegetationTab = {

        model: dataService.vegetationModel,

        getKeithClassesForWhichBenchmarkDataIsAvailable: function (formation) {
            availableKeithClasses = new Array();
            if (formation != null) {
                keithClasses = formation.keithClass
                keithClasses.forEach(function (keithClass) {
                    kcn = keithClass.name
                    ibra = dataService.siteContextModel.inputs.ibra.name
                    if (referenceDataService.compositionBenchmarkData[kcn][ibra] != undefined && referenceDataService.functionBenchmarkData[kcn][ibra] != undefined && referenceDataService.structureBenchmarkData[kcn][ibra] != undefined) {
                        availableKeithClasses.push(keithClass)
                    }
                })
            }
            return availableKeithClasses
        },

        getAvailableFormationsForWhichBenchmarkDataIsAvailable: function () {
            availableFormations = []
            this.model.referenceData.formation.forEach(function (formation) {
                if ($scope.vc.vegetationTab.getKeithClassesForWhichBenchmarkDataIsAvailable(formation).length > 0) {
                    availableFormations.push(formation)
                }
            })
            return availableFormations
        },

        calculateGeomean: function (index, calculatorMode) {
            var cs, ss, fs = 0
            if (calculatorMode == 'current') {
                cs = dataService.compositionModel.compositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.structureCalcResults[index].structureSubtotal
                fs = dataService.functionModel.functionCalcResults[index].functionSubtotal
            } else {
                cs = dataService.compositionModel.futureCompositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.futureStructureCalcResults[index].structureSubtotal
                fs = dataService.functionModel.futureFunctionCalcResults[index].functionSubtotal
            }
            var product = 1
            var count = 0
            if (cs > 0) {
                product *= cs
                count++
            }
            if (ss > 0) {
                product *= ss
                count++
            }
            if (fs > 0) {
                product *= fs
                count++
            }
            result = 0
            if (product > 0 && count > 0) {
                result = Math.pow(product, 1 / count)
            } else {
                result = 0
            }
            eval("this.model.input.vegetationZones[index]." + calculatorMode + "Vis = " + result)
            return result
        },

        addToZoneMap: function (vegetationZoneItem) {
            this.model.zoneMap.push(vegetationZoneItem.pctCode.pct.id + "_" + vegetationZoneItem.conditionClass)
        },

        shouldOfferPctCode: function (pctCode) {
            return (this.model.zoneMap.indexOf(pctCode + "_Derived") == -1 || this.model.zoneMap.indexOf(pctCode + "_Good") == -1 || this.model.zoneMap.indexOf(pctCode + "_Low") == -1 || this.model.zoneMap.indexOf(pctCode + "_Degraded") == -1 || this.model.zoneMap.indexOf(pctCode + "_Moderate") == -1 || this.model.zoneMap.indexOf(pctCode + "_High") == -1) ? true : false
        },

        close: function () {
            this.model.isPopupOpen = false
        },

        shouldThisPopupBeOpened: function (calculatorMode, $index, calcType) {
            return (this.model.isPopupOpen && calcType == this.model.calcTypeToPopup && $index == eval("dataService." + calcType + "Model.inFocusVegetationZoneIndex") && calculatorMode == eval("dataService." + calcType + "Model.calculatorMode")) ? true : false
        },

        populateKeithClassForZone: function (vegetationZoneItem) {
            this.model.input.pct.forEach(function (pct) {
                if (pct.pct.id == vegetationZoneItem.pctCode.pct.id) {
                    vegetationZoneItem.keithClass = pct.keithClass.name
                }
            })
        },

        setCalcToDisplay: function (inFocusVegetationZoneIndex, calculatorMode, keithClass, calcType) {
            this.model.isPopupOpen = true
            this.model.calcTypeToPopup = calcType
            dataService.compositionModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            dataService.functionModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            dataService.structureModel.setInputs(inFocusVegetationZoneIndex, calculatorMode, keithClass)
            body = dataService.events.createOpenCalculatorEvent(calcType, calculatorMode)
            $rootScope.$emit(dataService.events.openCalculatorEvent, body)
        },

        dispatchVegzoneUpdateEvent: function () {
            var body = dataService.events.createVegetationZoneUpdateEvent(this.model.input.vegetationZones, this.model.input.pct)
            $rootScope.$emit(dataService.events.vegetationZoneUpdateEvent, body)
        },

        recalculateVis: function () {
            for (i = 0; i < this.model.input.vegetationZones.length; i++) {
                futureVis = this.calculateGeomean(i, 'future')
                currentVis = this.calculateGeomean(i, 'current')
                eval("this.model.input.vegetationZones[" + i + "].futureAndCurrentDeltaVis = " + (futureVis - currentVis))
            }
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
                identifier: function () {
                    return (this.pctCode != null && this.pctCode.pct.id != null && this.conditionClass != null) ? this.pctCode.pct.id + "_" + this.conditionClass : "..."
                }
            }
        },

        addPctObject: function () {
            this.model.input.pct.push(this.createPctObject())
        },

        removePctObject: function (index) {
            pctArray = this.model.input.pct
            pctId = pctArray[index].pct.id
            pctArray.splice(index, 1)
            this.removeVegetationZoneByPctCode(pctId)
            this.pctChange();
        },

        canAddMoreVegetationZones: function () {
            var canAddMore = false
            this.model.input.pct.forEach(function (item) {
                if (item.pct != null) {
                    if ($scope.vc.vegetationTab.shouldOfferPctCode(item.pct.id)) {
                        canAddMore = true
                    }
                }
            })
            return canAddMore
        },

        addVegetationZone: function () {
            if (this.canAddMoreVegetationZones()) {
                this.model.input.vegetationZones.push(this.createVegetationZoneItem())
                dataService.compositionModel.compositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.compositionModel.futureCompositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.structureModel.structureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.structureModel.futureStructureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.functionModel.functionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
                dataService.functionModel.futureFunctionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
            }
        },
        pctChange: function() {
            var body = dataService.events.createVegetationPctChangeEvent()
            $rootScope.$emit(dataService.events.vegetationPctChangeEvent, body)

        },
        removeVegetationZoneByPctCode: function (pctId) {
            itemsToRemove = []
            vegZones = this.model.input.vegetationZones
            currentCompositionCalcResults = dataService.compositionModel.compositionCalcResults
            futureCompositionCalcResults = dataService.compositionModel.futureCompositionCalcResults
            currentStructureCalcResults = dataService.structureModel.structureCalcResults
            futureStructureCalcResults = dataService.structureModel.futureStructureCalcResults
            currentFunctionCalcResults = dataService.functionModel.functionCalcResults
            futureFunctionCalcResults = dataService.functionModel.futureFunctionCalcResults
            for (i = 0; i < vegZones.length; i++) {
                if (vegZones[i].pctCode.pct.id == pctId) {
                    itemsToRemove.push(i)
                }
            }
            itemsRemoved = 0
            function removeItem(index) {
                vegZones.splice(index, 1)
                currentCompositionCalcResults.splice(index, 1)
                futureCompositionCalcResults.splice(index, 1)
                currentStructureCalcResults.splice(index, 1)
                futureStructureCalcResults.splice(index, 1)
                currentFunctionCalcResults.splice(index, 1)
                futureFunctionCalcResults.splice(index, 1)
            }

            if (itemsToRemove[0] != undefined) {
                removeItem(itemsToRemove[0])
                itemsRemoved++
            }
            if (itemsToRemove.length > 0) {
                for (i = 1; i < itemsToRemove.length; i++) {
                    shiftedIndex = itemsToRemove[i] - itemsRemoved
                    removeItem(shiftedIndex)
                    itemsRemoved++
                }
            }
        },
    };
}]);



