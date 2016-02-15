angular.module('BAMApp.dataService').service('dataService', function () {
    var _dataObject = Data;
    return _dataObject;
});


var Data =
{
    Current: 0,

    Items: [
        {
            Type: 'Development site',
            ProposalId: '0059/2012/0309D',
            ProposalVersion: '1',
            ProposalName: 'Summer Beach Development',
            MajorCatchmentArea: 'Northern Rivers',
            StreetAddress: 'Hume Highway Summer Beach NSW 2888',
        },
        {
            Type: 'Offset site',
            ProposalId: '0080/2013/0524B',
            ProposalVersion: '1',
            ProposalName: 'Forest Drive Offset Site',
            MajorCatchmentArea: 'Hunter/Central Rivers',
            StreetAddress: 'Forest Drive Forest Town NSW 2999'
        },
        {
            Type: 'Biocertification site',
            ProposalId: '0112/2014/1452MP',
            ProposalVersion: '1',
            ProposalName: 'Beverly Hills Quarry Expansion',
            MajorCatchmentArea: 'Hunter/Central Rivers',
            StreetAddress: '1009 Forest Road Beverly Hills NSW 2209'
        }

    ],
    compositionBenchmarkData: {
        "Coastal Swamp Forests": {
            "North Coast": {
                treeComposition: 5,
                shrubComposition: 10,
                grassAndGrassLikeComposition: 10,
                forbComposition: 8,
                fernComposition: 2,
                otherComposition: 5,
            },
            "SE Queensland": {
                treeComposition: 8,
                shrubComposition: 8,
                grassAndGrassLikeComposition: 7,
                forbComposition: 6,
                fernComposition: 3,
                otherComposition: 6
            },
            "Sydney Basin": {
                treeComposition: 4,
                shrubComposition: 10,
                grassAndGrassLikeComposition: 8,
                forbComposition: 8,
                fernComposition: 2,
                otherComposition: 5
            }
        },
        "Coastal Valley Grassy Woodlands": {
            "SE Corner": {
                treeComposition: 4,
                shrubComposition: 10,
                grassAndGrassLikeComposition: 13,
                forbComposition: 16,
                fernComposition: 3,
                otherComposition: 6,
            },
            "Sydney Basin": {
                treeComposition: 5,
                shrubComposition: 9,
                grassAndGrassLikeComposition: 14,
                forbComposition: 17,
                fernComposition: 2,
                otherComposition: 5
            },
        },
        "Cumberland Dry Sclerophyll Forests": {
            "Sydney Basin": {
                treeComposition: 6,
                shrubComposition: 13,
                grassAndGrassLikeComposition: 15,
                forbComposition: 15,
                fernComposition: 1,
                otherComposition: 6
            }
        },
        "Hunter-Macleay Dry Sclerophyll Forests": {
            "North Coast": {
                treeComposition: 7,
                shrubComposition: 12,
                grassAndGrassLikeComposition: 16,
                forbComposition: 17,
                fernComposition: 2,
                otherComposition: 7
            },
            "Sydney Basin": {
                treeComposition: 5,
                shrubComposition: 13,
                grassAndGrassLikeComposition: 11,
                forbComposition: 13,
                fernComposition: 1,
                otherComposition: 6
            }
        },
        "Western Slopes Grassy Woodlands ()": {
            "Brigalow Belt South": {
                treeComposition: 3,
                shrubComposition: 5,
                grassAndGrassLikeComposition: 15,
                forbComposition: 18,
                fernComposition: 1,
                otherComposition: 3
            },
            "Nandewar": {
                treeComposition: 3,
                shrubComposition: 5,
                grassAndGrassLikeComposition: 13,
                forbComposition: 17,
                fernComposition: 1,
                otherComposition: 3
            },
            "Sydney Basin": {
                treeComposition: 4,
                shrubComposition: 9,
                grassAndGrassLikeComposition: 9,
                forbComposition: 17,
                fernComposition: 1,
                otherComposition: 4
            }
        },
        "Temperate Montane Grasslands": {
            "South Eastern Highlands": {
                treeComposition: 0,
                shrubComposition: 2,
                grassAndGrassLikeComposition: 5,
                forbComposition: 20,
                fernComposition: 1,
                otherComposition: 1
            }
        }
    },
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

