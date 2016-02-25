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
		sensitivityClass: dataService.habitatModel.referenceData.sensitivityClass,
		optionClass:dataService.habitatModel.referenceData.optionClass,
		refEcoSystemCredit: function ()
		{
			if (dataService.habitatModel.inputs.current != null )
			{
				var ibraId = dataService.habitatModel.inputs[dataService.habitatModel.inputs.current].ibraId;
				return dataService.habitatModel.findEcosystemCreditBySubRegion(ibraId);
			}

			return null;
			
		},
		refSpeciesCredit:null,
		input:{} 
		
	};



}]);
