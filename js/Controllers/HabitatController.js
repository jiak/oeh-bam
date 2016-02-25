angular.module('bamApp').controller('habitatController', ["$scope", "referenceDataService", "$rootScope", "dataService",  function ($scope, referenceDataService, $rootScope, dataService) {

	/*
	data layout

	inputs:[input];
	input:{
		ibraId:null,
		ecoSystemCredit:[
			{
				presence:null,
				sensitivity:null
			}
		],
		speciesCredit:[
			{
				candidate:null,
				assessRequired:null,
				presence:null,
				UOM:null,
				value: null,
				SOISelected: null
			}
		]
	}
	*/
	//init
	$scope.model =
	{
		sensitivityClass:null,
		optionClass:null,
		refEcoSystemCredit: {},
		refSpeciesCredit:{},
		input:{},

		createEcoSystemCreditInput: function()
		{
			return {
				presence:null,
				sensitivity:null
			}
		},
		initEcoSystemCreditInput: function()
		{
			for (var i = 0; i < this.refEcoSystemCredit.threatendedSpecies.length; i++)
			{
				this.input.ecoSystemCredit.push(this.createEcoSystemCreditInput());
			}
		},

		createSpeciesCreditInput: function()
		{
			return {
				candidate:null,
				assessRequired:null,
				presence:null,
				UOM:null,
				value: null,
				SOISelected: null
			}
		},

		initSpeciesCreditInput: function()
		{
			for (var i = 0; i < this.refSpeciesCredit.threatendedSpecies.length; i++)
			{
				this.input.speciesCredit.push(this.createSpeciesCreditInput());
			}
		},

		createInput: function(id)
		{
			return{
				ibraId:id,
				ecoSystemCredit:[],
				speciesCredit:[]

			}
		}
	};

	//get ibra id
	var ibraId = 1;

	//assign the static data definition
	$scope.model.sensitivityClass = dataService.habitatModel.referenceData.sensitivityClass;
	$scope.model.optionClass = dataService.habitatModel.referenceData.optionClass;

	//get the dataset
	for (var i = 0;i < dataService.habitatModel.referenceData.ecosystemCredit.ibraSubRegion.length; i++)
	{
		if (dataService.habitatModel.referenceData.ecosystemCredit.ibraSubRegion[i].id == ibraId)
		{
			$scope.model.refEcoSystemCredit = dataService.habitatModel.referenceData.ecosystemCredit.ibraSubRegion[i];
		}
	}

	for (var i = 0; i < dataService.habitatModel.referenceData.speciesCredit.ibraSubRegion.length; i++)
	{
		if (dataService.habitatModel.referenceData.speciesCredit.ibraSubRegion[i].id == ibraId)
		{
			$scope.model.refSpeciesCredit = dataService.habitatModel.referenceData.speciesCredit.ibraSubRegion[i];
		}
	}

	//init scope input
	$scope.model.input = $scope.model.createInput(ibraId);

	var i = 0

	for (i=0; i < dataService.habitatModel.inputs.length; i++)
	{
		if (dataService.habitatModel.inputs[i].ibraId == ibraId)
		{
			$scope.model.input = dataService.habitatModel.inputs[i];
		}
	}

	if (i == dataService.habitatModel.inputs.length)
	{
		$scope.model.initEcoSystemCreditInput();
		$scope.model.initSpeciesCreditInput();

		dataService.habitatModel.inputs.push($scope.model.input);
	}

}]);
