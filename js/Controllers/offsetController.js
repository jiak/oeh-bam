bamApp.controller('offsetController', ["$scope", "dataService", "referenceDataService", function ($scope, dataService, referenceDataService) {

    this.dataService = dataService

    this.offset = {

        model: dataService.offsetModel,

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
                if ($scope.oc.offset.getKeithClassesForWhichBenchmarkDataIsAvailable(formation).length > 0) {
                    availableFormations.push(formation)
                }
            })
            return availableFormations
        },

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
            dataService.locationModel.setInputs(inFocusVegetationZoneIndex, calculatorMode)
        },

        shouldThisPopupBeOpened: function (calculatorMode, $index, calcType) {
            return (this.model.isPopupOpen && calcType == this.model.calcTypeToPopup && $index == eval("dataService." + calcType + "Model.inFocusVegetationZoneIndex") && calculatorMode == eval("dataService." + calcType + "Model.calculatorMode")) ? true : false
        },

        calculateGeomean: function (index, calculatorMode) {
            var cs, ss, fs = 0
            if (calculatorMode == 'current') {
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
                fs = dataService.functionModel.offsetFutureWithoutManagementFunctionCalcResults[index].functionSubtotal
            } else if (calculatorMode == 'offsetFutureWithManagement') {
                cs = dataService.compositionModel.offsetFutureWithManagementCompositionCalcResults[index].compositionSubtotal
                ss = dataService.structureModel.offsetFutureWithManagementStructureCalcResults[index].structureSubtotal
                fs = dataService.functionModel.offsetFutureWithManagementFunctionCalcResults[index].functionSubtotal
            }
            var sum = 1
            var count = 0
            if (cs > 0) {
                sum *= cs
                count++
            }
            if (ss > 0) {
                sum *= ss
                count++
            }
            if (fs > 0) {
                sum *= fs
                count++
            }
            if (sum > 0 && count > 0) {
                return Math.pow(sum, 1 / count).toFixed(0)
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
            if (canAddMore) {
                this.model.input.vegetationZones.push(this.createVegetationZoneItem())
                dataService.compositionModel.compositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.compositionModel.offsetFutureWithoutManagementCompositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.compositionModel.offsetFutureWithManagementCompositionCalcResults.push(dataService.compositionModel.createCompositionCalcResult())
                dataService.structureModel.structureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.structureModel.offsetFutureWithoutManagementStructureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.structureModel.offsetFutureWithManagementStructureCalcResults.push(dataService.structureModel.createStructureCalcResult())
                dataService.functionModel.functionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
                dataService.functionModel.offsetFutureWithoutManagementFunctionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
                dataService.functionModel.offsetFutureWithManagementFunctionCalcResults.push(dataService.functionModel.createFunctionCalcResult())
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