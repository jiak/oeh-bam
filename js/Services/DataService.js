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
    functionBenchmarkData: {
        "Coastal Swamp Forests": {
            "North Coast": {
                numberOfLargeTrees: 2,
                litterCover: 40,
                coarseWoodyDebris: 10,
                stemSizeClasses: 4,
                regeneration: "present"
            },
            "SE Queensland": {
                numberOfLargeTrees: 2,
                litterCover: 40,
                coarseWoodyDebris: 10,
                stemSizeClasses: 4,
                regeneration: "present"
            },
            "Sydney Basin": {
                numberOfLargeTrees: 2,
                litterCover: 30,
                coarseWoodyDebris: 10,
                stemSizeClasses: 4,
                regeneration: "present"
            }
        },
        "Coastal Valley Grassy Woodlands": {
            "SE Corner": {
                numberOfLargeTrees: 4,
                litterCover: 58,
                coarseWoodyDebris: 68,
                stemSizeClasses: 4,
                regeneration: "present"
            },
            "Sydney Basin": {
                numberOfLargeTrees: 4,
                litterCover: 58,
                coarseWoodyDebris: 68,
                stemSizeClasses: 4,
                regeneration: "present"
            }
        },
        "Cumberland Dry Sclerophyll Forests": {
            "Sydney Basin": {
                numberOfLargeTrees: 4,
                litterCover: 58,
                coarseWoodyDebris: 68,
                stemSizeClasses: 4,
                regeneration: "present"
            }
        },
        "Hunter-Macleay Dry Sclerophyll": {
            "North Coast": {
                numberOfLargeTrees: 3,
                litterCover: 55,
                coarseWoodyDebris: 43,
                stemSizeClasses: 4,
                regeneration: "present"
            },
            "Sydney Basin": {
                numberOfLargeTrees: 3,
                litterCover: 55,
                coarseWoodyDebris: 43,
                stemSizeClasses: 4,
                regeneration: "present"
            },
        },
        "Western Slopes Grassy Woodlands": {
            "Brigalow Belt South": {
                numberOfLargeTrees: 5,
                litterCover: 40,
                coarseWoodyDebris: 48,
                stemSizeClasses: 4,
                regeneration: "present"
            },
            "Nandewar": {
                numberOfLargeTrees: 5,
                litterCover: 40,
                coarseWoodyDebris: 48,
                stemSizeClasses: 4
            },
            "Sydney Basin": {
                numberOfLargeTrees: 5,
                litterCover: 40,
                coarseWoodyDebris: 48,
                stemSizeClasses: 4
            }
        },
        "Temperate Montane Grasslands": {
            "South Eastern Highlands": {
                numberOfLargeTrees: 0,
                litterCover: 0,
                coarseWoodyDebris: 0,
                stemSizeClasses: 0
            }
        }
    },
    structureBenchmarkData: {
        "Coastal Swamp Forests": {
            "North Coast": {
                treeCover: 51,
                shrubCover: 26,
                grassAndGrassLikeCover: 59,
                forbCover: 10,
                fernCover: 7,
                otherCover: 7
            },
            "SE Queensland": {
                treeCover: 53,
                shrubCover: 17,
                grassAndGrassLikeCover: 42,
                forbCover: 8,
                fernCover: 8,
                otherCover: 10
            },
            "Sydney Basin": {
                treeCover: 21,
                shrubCover: 35,
                grassAndGrassLikeCover: 71,
                forbCover: 10,
                fernCover: 6,
                otherCover: 6
            },
        },
        "Coastal Valley Grassy Woodlands": {
            "SE Corner": {
                treeCover: 21,
                shrubCover: 20,
                grassAndGrassLikeCover: 40,
                forbCover: 13,
                fernCover: 2,
                otherCover: 5
            },
            "Sydney Basin": {
                treeCover: 24,
                shrubCover: 21,
                grassAndGrassLikeCover: 39,
                forbCover: 20,
                fernCover: 2,
                otherCover: 5
            }
        },
        "Cumberland Dry Sclerophyll Forests": {
            "Sydney Basin": {
                treeCover: 16,
                shrubCover: 18,
                grassAndGrassLikeCover: 27,
                forbCover: 16,
                fernCover: 2,
                otherCover: 5
            }
        },
        "Hunter-Macleay Dry Sclerophyll Forests": {
            "North Coast": {
                treeCover: 39,
                shrubCover: 27,
                grassAndGrassLikeCover: 58,
                forbCover: 24,
                fernCover: 2,
                otherCover: 8
            },
            "Sydney Basin": {
                treeCover: 29,
                shrubCover: 29,
                grassAndGrassLikeCover: 41,
                forbCover: 17,
                fernCover: 2,
                otherCover: 6
            }
        },
        "Western Slopes Grassy Woodlands": {
            "Brigalow Belt South": {
                treeCover: 34,
                shrubCover: 12,
                grassAndGrassLikeCover: 66,
                forbCover: 21,
                fernCover: 1,
                otherCover: 3
            },
            "Nandewar": {
                treeCover: 30,
                shrubCover: 6,
                grassAndGrassLikeCover: 55,
                forbCover: 19,
                fernCover: 1,
                otherCover: 3
            },
            "Sydney Basin": {
                treeCover: 32,
                shrubCover: 29,
                grassAndGrassLikeCover: 28,
                forbCover: 25,
                fernCover: 2,
                otherCover: 6
            }
        },
        "Temperate Montane Grasslands": {
            "South Eastern Highlands": {
                treeCover: 1,
                shrubCover: 5,
                grassAndGrassLikeCover: 80,
                forbCover: 21,
                fernCover: 1,
                otherCover: 0
            }
        }
    },
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

