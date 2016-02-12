angular.module('BAMApp.dataService').service('dataService', function () {
	var _dataObject = Data;
	return _dataObject;
});


var Data = 
{
	Current:0,

	Items:
	[
		{
			Type:'Development site',
			ProposalId: '0059/2012/0309D',
			ProposalVersion: '1',
			ProposalName:'Summer Beach Development',
			MajorCatchmentArea: 'Northern Rivers',
			StreetAddress: 'Hume Highway Summer Beach NSW 2888',
		},
		{
			Type:'Offset site',
			ProposalId: '0080/2013/0524B',
			ProposalVersion: '1',
			ProposalName:'Forest Drive Offset Site',
			MajorCatchmentArea: 'Hunter/Central Rivers',
			StreetAddress: 'Forest Drive Forest Town NSW 2999'
		},
		{
			Type: 'Biocertification site',
			ProposalId: '0112/2014/1452MP',
			ProposalVersion: '1',
			ProposalName:'Beverly Hills Quarry Expansion',
			MajorCatchmentArea: 'Hunter/Central Rivers',
			StreetAddress: '1009 Forest Road Beverly Hills NSW 2209'
		}

	],
	"referenceData": {
		"formations": [
			{
				"id": 1, 
				"name": "formation 1",
				"keithClass": [
					{
						"id": "1.1", 
						"name": "f1 kc1",
						"pct": [
							{
								"id": "1.1.1",
								"name": "f1 kc1 pct1",
								"percCleared": 20,
								"threatStatusClass": "the class",
								"tec": [
									{
										"id": 1,
										"name": "tec 1"
									}
								]
							}
						]
					},
					{
						"id": "1.2", 
						"name": "f1 kc2",
						"pct": [
							{
								"id": "1.2.2",
								"name": "f1 kc2 pct1",
								"percCleared": 20,
								"threatStatusClass": "the class",
								"tec": [
									{
										"id": 1,
										"name": "tec 1"
									}
								]

							}
						]

					}
				]
			},
			{
				"id": 2, 
				"name": "formation 2",
				"keithClass": [
					{
						"id": "2.1", 
						"name": "f2 kc1",
						"pct": [
							{
								"id": "2.1.1",
								"name": "f2 kc1 pct1",
								"percCleared": 20,
								"threatStatusClass": "the class",
								"tec": [
									{
										"id": 1,
										"name": "tec 1"
									}
								]

							}
						]

					},
					{
						"id": "2.2", 
						"name": "f2 kc2",
						"pct": [
							{
								"id": ":.2.1",
								"name": "f2 kc2 pct1",
								"percCleared": 20,
								"threatStatusClass": "the class",
								"tec": [
									{
										"id": 1,
										"name": "tec 1"
									}
								]

							}
						]

					}
				]
			}
		]
	}
}

