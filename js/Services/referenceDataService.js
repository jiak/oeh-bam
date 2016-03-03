bamApp.service('referenceDataService', function () {
    return {
        functionBenchmarkData: {
            "Coastal Swamp Forests": {
                "NSW North Coast": {
                    numberOfLargeTrees: 2,
                    litterCover: 40,
                    coarseWoodyDebris: 10,
                    stemSizeClasses: 4,
                    regeneration: "present"
                },
                "South East Queensland": {
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
            "Hunter-Macleay Dry Sclerophyll Forests": {
                "NSW North Coast": {
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
                }
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
                    stemSizeClasses: 4,
                    regeneration: "present"
                },
                "Sydney Basin": {
                    numberOfLargeTrees: 5,
                    litterCover: 40,
                    coarseWoodyDebris: 48,
                    stemSizeClasses: 4,
                    regeneration: "present"
                }
            },
            "Temperate Montane Grasslands": {
                "South Eastern Highlands": {
                    numberOfLargeTrees: 0,
                    litterCover: 0,
                    coarseWoodyDebris: 0,
                    stemSizeClasses: 0,
                    regeneration: "absent"
                }
            }
        },
        structureBenchmarkData: {
            "Coastal Swamp Forests": {
                "NSW North Coast": {
                    treeCover: 60,
                    shrubCover: 32,
                    grassAndGrassLikeCover: 72,
                    forbCover: 10,
                    fernCover: 10,
                    otherCover: 10
                },
                "South East Queensland": {
                    treeCover: 61,
                    shrubCover: 21,
                    grassAndGrassLikeCover: 59,
                    forbCover: 3,
                    fernCover: 12,
                    otherCover: 11
                },
                "Sydney Basin": {
                    treeCover: 31,
                    shrubCover: 43,
                    grassAndGrassLikeCover: 84,
                    forbCover: 3,
                    fernCover: 10,
                    otherCover: 2
                }
            },
            "Coastal Valley Grassy Woodlands": {
                "SE Corner": {
                    treeCover: 31,
                    shrubCover: 30,
                    grassAndGrassLikeCover: 44,
                    forbCover: 5,
                    fernCover: 1,
                    otherCover: 2
                },
                "Sydney Basin": {
                    treeCover: 31,
                    shrubCover: 22,
                    grassAndGrassLikeCover: 36,
                    forbCover: 5,
                    fernCover: 1,
                    otherCover: 1
                }
            },
            "Cumberland Dry Sclerophyll Forests": {
                "Sydney Basin": {
                    treeCover: 22,
                    shrubCover: 12,
                    grassAndGrassLikeCover: 24,
                    forbCover: 3,
                    fernCover: 1,
                    otherCover: 1
                }
            },
            "Hunter-Macleay Dry Sclerophyll Forests": {
                "NSW North Coast": {
                    treeCover: 57,
                    shrubCover: 31,
                    grassAndGrassLikeCover: 63,
                    forbCover: 8,
                    fernCover: 1,
                    otherCover: 3
                },
                "Sydney Basin": {
                    treeCover: 41,
                    shrubCover: 33,
                    grassAndGrassLikeCover: 48,
                    forbCover: 3,
                    fernCover: 1,
                    otherCover: 2
                }
            },
            "Western Slopes Grassy Woodlands": {
                "Brigalow Belt South": {
                    treeCover: 34,
                    shrubCover: 12,
                    grassAndGrassLikeCover: 66,
                    forbCover: 20,
                    fernCover: 1,
                    otherCover: 4
                },
                "Nandewar": {
                    treeCover: 31,
                    shrubCover: 10,
                    grassAndGrassLikeCover: 56,
                    forbCover: 15,
                    fernCover: 1,
                    otherCover: 3
                },
                "Sydney Basin": {
                    treeCover: 46,
                    shrubCover: 36,
                    grassAndGrassLikeCover: 34,
                    forbCover: 15,
                    fernCover: 1,
                    otherCover: 2
                }
            },
            "Temperate Montane Grasslands": {
                "South Eastern Highlands": {
                    treeCover: 1,
                    shrubCover: 5,
                    grassAndGrassLikeCover: 80,
                    forbCover: 20,
                    fernCover: 1,
                    otherCover: 0
                }
            }
        },
        compositionBenchmarkData: {
            "Coastal Swamp Forests": {
                "NSW North Coast": {
                    treeComposition: 5,
                    shrubComposition: 10,
                    grassAndGrassLikeComposition: 10,
                    forbComposition: 8,
                    fernComposition: 2,
                    otherComposition: 5
                },
                "South East Queensland": {
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
                    otherComposition: 6
                },
                "Sydney Basin": {
                    treeComposition: 5,
                    shrubComposition: 9,
                    grassAndGrassLikeComposition: 14,
                    forbComposition: 17,
                    fernComposition: 2,
                    otherComposition: 5
                }
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
                "NSW North Coast": {
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
            "Western Slopes Grassy Woodlands": {
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
        "applicationDetails": {
            "applicationType": [
                {"id": 0, "name": "Development"},
                {"id": 1, "name": "Offset"},
                {"id": 2, "name": "Biocertification"},
                {"id": 3, "name": "Streamlined - Small Area Development"}
            ]
        },
        "vegetation": {
            "formation": [
                {
                    "id": 1,
                    "name": "Forested Wetlands",
                    "type": "1",
                    "keithClass": [
                        {
                            "id": 1,
                            "name": "Coastal Swamp Forests",
                            "pct": [
                                {
                                    "id": 839,
                                    "name": "Forest Red Gum - Woollybutt - Pithy Sword-sedge swamp woodland in dune swales near Pambula, southern South East Corner Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Only known from a single dune swale wetland in Ben Boyd National Park, east of Pambula.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 1, "name": " River-Flat Eucalypt Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions  ", "status": ""},
                                        {"id": 2, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1227,
                                    "name": "Swamp Box swamp forest of the coastal lowlands of the NSW North Coast Bioregion",
                                    "description": "Other Diagnostics Features: Little detailed floristic information available.;  LandscapePosition: Occurs on poorly drained flats and valley floors.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 3, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"},
                                        {"id": 4, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1230,
                                    "name": "Swamp Mahogany swamp forest on coastal lowlands of the NSW North Coast Bioregion and northern Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: Mid-high (rarely low) to very tall woodland and forest.;  LandscapePosition: In drainage lines and open depressions mainly on the coastal lowlands, but occasionally further inland",
                                    "percentCleared": 75,
                                    "tec": [
                                        {"id": 5, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"},
                                        {"id": 6, "name": " Swamp Oak Floodplain Forest of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"},
                                        {"id": 7, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]
                                },

                                {
                                    "id": 1649,
                                    "name": "Smooth-barked Apple - Red Mahogany - Swamp Mahogany - Melaleuca sieberi heathy swamp woodland of coastal lowlands",
                                    "description": "Damp Woodlands dominated in the canopy by Angophoras. The mid-stratum is characteristic and is dominated by Melaleucas and Leptospermums. The ground cover is moderately sparse to sparse and is comprised of a variety of graminoids.| This community is characteristic of low; poorly drained sands from Tumbi Umbi to just north of Crowdy Head. Elevation is below 50m.",
                                    "percentCleared": 46,
                                    "tec": [
                                        {"id": 8, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1716,
                                    "name": "Prickly-leaved Paperbark forest on coastal lowlands of the Central Coast and Lower North Coast",
                                    "description": "Myrtaceous; seasonally wet; Tall Shrubland/Low Open Forest with emergent Eucalypts. The main canopy may contain a variety of species in association with M. nodosa. The ground stratum is relatively dense and is dominated by grasses.| This community is found on poorly drained areas on the undulating coastal lowlands from Wamberal north to Yarratt State Forest. This community typically occurs on unconsolidated sediments or on fine-grained sedimentary geologies at elevations up to 100m.",
                                    "percentCleared": 66,
                                    "tec": [
                                        {"id": 9, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1717,
                                    "name": "Broad-leaved Paperbark - Swamp Mahogany - Swamp Oak - Saw Sedge swamp forest of the Central Coast and Lower North Coast",
                                    "description": "Myrtaceous Swamp Open Forests with a mid-stratum of small trees. The ground stratum is dense and dominated by wet-loving grasses and graminoid species.| This community is common on coastal floodplains and poorly drained lowlands from the Broadwater to Failford| it mainly occurs on unconsolidated sediments at elevations below 50m. More isolated examples occur as far south as Macmasters Beach.",
                                    "percentCleared": 68,
                                    "tec": [
                                        {"id": 10, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1718,
                                    "name": "Swamp Mahogany - Flax-leaved Paperbark swamp forest on coastal lowlands of the Central Coast",
                                    "description": "Myrtaceous Swamp Open Forests| the mid-stratum is likewise Myrtaceous comprising small trees and tall shrubs. The ground stratum is made up of grasses and graminoid species with some ferns and forbs.| This community is distributed from the southern boundary of the study area north to Karuah. It occurs typically on poorly drained unconsolidated sediments of the coastal lowlands| elevations are typically under 50m.",
                                    "percentCleared": 74,
                                    "tec": [
                                        {"id": 11, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1719,
                                    "name": "Paperbarks - Woollybutt swamp forest on coastal lowlands of the Central Coast",
                                    "description": "Myrtaceous Swamp Open Forests| the mid-stratum is typically dense and is dominated by Melaleucas. The ground stratum is dominated by sedges.| This community is found on low-lying land to the west of both Doyalson and Warnervale. The substrate is sandstone or unconsolidated sediments and elevations are typically less than 20m.",
                                    "percentCleared": 56,
                                    "tec": [
                                        {"id": 12, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1721,
                                    "name": "Swamp Mahogany - Broad-leaved Paperbark - Saw Sedge - Yellow Marsh Flower swamp forest of coastal lowlands",
                                    "description": "Myrtaceous Swamp Open Forests with areas of open water. The mid-stratum is typically characterised by smaller Melaleuca species. The ground stratum is dominated by either aquatic species or grasses and graminoids.| This community is found along the southern shores of Lake Macquarie on unconsolidated sediments and at elevations of less than 20m.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 13, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1722,
                                    "name": "Swamp Mahogany - Paperbarks - Harsh Ground Fern swamp forest of the Central Coast",
                                    "description": "Eucalypt dominated Swamp Open Forests with variety of co-dominants possible. The mid-stratum is comprised of tall shrubs and may be dense in places. The ground stratum is characterised by ferns and sedges.| This community is distributed within the study area on poorly drained sites on barrier sands of the lower North Coast and Central Coast at elevations below 100m.",
                                    "percentCleared": 26,
                                    "tec": [
                                        {"id": 14, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1723,
                                    "name": "Melaleuca biconvexa - Swamp Mahogany - Cabbage Palm swamp forest of the Central Coast",
                                    "description": "Myrtaceous Swamp Open Forests| the mid-stratum is also Myrtaceous and may be moderately dense. The ground stratum is sedge dominated.| This community is found on poorly drained sites in the Central Coast hinterlands from Copacabana to Tuggerah. The substrate is most commonly unconsolidated sands| some sites occur on sandstone substrates. Elevation is under 30m.",
                                    "percentCleared": 92,
                                    "tec": [
                                        {"id": 15, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1724,
                                    "name": "Broad-leaved Paperbark - Swamp Oak - Saw Sedge swamp forest on coastal lowlands of the Central Coast and Lower North Coast",
                                    "description": "Swamp Open Forest with area of standing water| dominated by Melaleucas. The mid-stratum comprises small trees and the ground stratum is typically a mix of sedges; ferns; grasses and graminoid species.| This community occurs on alluvial sands and muds on floodplains and barrier sands of the lower North Coast and Central Coast| elevations are in the range 1 to 350m.",
                                    "percentCleared": 31,
                                    "tec": [
                                        {"id": 16, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1725,
                                    "name": "Swamp Mahogany - Broad-leaved Paperbark - Swamp Water Fern - Plume Rush swamp forest on coastal lowlands of the Central Coast and Lower North Coast",
                                    "description": "Eucalypt dominated swamp Open Forest. The mid-stratum is dominated by tall myrtaceous shrubs. The ground stratum is typically dense and is characteristically a mix of grasses; sedges and ferns.| This community occurs on alluvial sands and muds at poorly drained sites from the southern boundary of the study area north to Failford. Elevations are usually less than 40m.",
                                    "percentCleared": 35,
                                    "tec": [
                                        {"id": 17, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1726,
                                    "name": "Flax-leaved Paperbark - Tall Sedge shrubland of the Sydney Basin",
                                    "description": "Myrtaceous Tall Shrublands with occasional emergent Eucalypts. The ground stratum is characterised by sedges and related species with some grasses favouring wet conditions.| This community is found in poorly drained sites and on some waterways on the lower Central Coast and hinterlands. Elevations range from 5 to 200m.",
                                    "percentCleared": 41,
                                    "tec": [
                                        {"id": 18, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1729,
                                    "name": "Swamp Oak swamp forest on coastal lowlands of the Central Coast and Lower North Coast",
                                    "description": "Casuarina dominated Swamp Open Forests| there is virtually no mid-stratum in this community. The ground stratum is dominated by sedges or grasses depending on local inundation conditions.| This community is found on the margins of brackish water bodies from Tuggerah to Nabiac| the main substrate is alluvial sand and elevations are under 15m.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 19, "name": " Swamp Oak Floodplain Forest of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1730,
                                    "name": "Swamp paperbark - Baumea juncea swamp shrubland on coastal lowlands of the Central Coast and Lower North Coast",
                                    "description": "This community may appear as an Open Forest dominated by Casuarina with a Melaleuca mid-stratum| or; more typically; as a Tall Dense Shrubland dominated by Melaleuca with emergent Casuarinas. In both cases the ground stratum is dominated by sedges and related species.| This community is found in Lacustrine and Coastal sites from Empire Bay to Black Head. It occurs on poorly drained areas with unconsolidated sediment substrates at elevations below 10m.",
                                    "percentCleared": 62,
                                    "tec": [
                                        {"id": 20, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) partially subset of", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1731,
                                    "name": "Swamp Oak - Weeping Grass grassy riparian forest of the Hunter Valley",
                                    "description": "Casuarina dominated Swamp Open Forests| there is no mid-stratum and shrubs occur as isolated individuals. The ground stratum is typically grassy; it also includes a number of forbs.| This community occurs on riparian and poorly drained floodplain sites; frequently associated with brackish water in the central an upper Hunter Valley. Substrates are sedimentary or unconsolidated alluvium| elevations range from 30 to 300m.",
                                    "percentCleared": 62,
                                    "tec": [
                                        {"id": 21, "name": " Swamp Oak Floodplain Forest of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1064,
                                    "name": "Paperbark swamp forest of the coastal lowlands of the NSW North Coast Bioregion and Sydney Basin Bioregion",
                                    "description": "",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 22, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions  ", "status": ""},
                                        {"id": 23, "name": " Coastal Saltmarsh in the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"},
                                        {"id": 24, "name": " Littoral Rainforest in the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"},
                                        {"id": 25, "name": " Swamp Oak Floodplain Forest of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Grassy Woodlands",
                    "type": "1",
                    "keithClass": [
                        {
                            "id": 1,
                            "name": "Coastal Valley Grassy Woodlands",
                            "pct": [
                                {
                                    "id": 116,
                                    "name": "Weeping Myall - Coobah - Scrub Wilga shrubland of the Hunter Valley",
                                    "description": "Mid-high woodland of Weeping Myall (Acacia pendula) up to 10 m high with Cooba (Acacia salicina), Scrub Wilga (Geijera salicifolia), Acacia homalophylla and Psydrax odorata f. buxifolia. The ground strata is dense and is primarily composed of native and exotic grass species. Grasses include Kangaroo Grass (Themeda australia), wallaby grass Austrodanthonia spp., snow grass (Poa sieberiana) and Cymbopogon refractus. Occurring in small stands on a colluvial heavy, brown clay soil on lower slopes of the Hunter Valley. Restricted in extent occurring around Jerrys Plains and near Wybalong in the Hunter Valley, in the South Hunter sub-region of the Sydney Basin Bioregion. This is an outlier of the main occurrence of Weeping Myall on the western plains. It is endangered and the remnants require fencing off from stock and conservation planning. Much of the associated flora occurs in dry rainforest in the Hunter Valley.",
                                    "percentCleared": 90,
                                    "tec": [
                                        {"id": 26, "name": " Hunter Valley Weeping Myall Woodland of the Sydney Basin Bioregion (Equivalent) ", "status": "E"},
                                        {"id": 27, "name": " Weeping Myall - Coobah - Scrub Wilga Shrubland of the Hunter Valley (Equivalent) ", "status": "E"},
                                        {"id": 28, "name": " Hunter Valley Weeping Myall Woodland of the Sydney Basin Bioregion (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 618,
                                    "name": "White Box x Grey Box - red gum - Rough-barked Apple grassy woodland on rich soils on hills in the upper Hunter Valley",
                                    "description": "Mid-high to tall woodland to open forest dominated by Grey Box x White Box (Eucalyptus albens <-> moluccana intermediate) Forest Red Gum (Eucalyptus tereticornis) x Blakelys Red Gum (Eucalyptus blakelyi), Rough-barked Apple (Angophora floribunda) sometimes with Yellow Box (Eucalyptus melliodora), Kurrajong (Brachychiton populneus subsp. populneus), Narrow-leaved Ironbark (Eucalyptus crebra) or Narrow-leaved Stringybark (Eucalyptus eugenioides). Shrubs are absent or very sparse being more common on shallow soils such as on knolls or on small areas of rock scree. Shrub species include Bursaria spinosa subsp. spinosa, Acacia implexa, Solanum stelligerum, Notelaea microcarpa, Olearia elliptica subsp. elliptica, Breynia oblongifolia and Pittosporum undulatum. The vines Pandorea pandorana subsp. pandorana and Clematis glycinoides occur on rocky areas. The ground cover is dense to mid-dense. Grass species include Cymbopogon refractus, Austrodanthonia racemosa, Microlaena stipoides var. stipoides, Sporobolus creber and Chloris truncata. The scrambler Desmodium varians and rock fern Cheilanthes distans may be present. Forb species include Vittadinia sulcata, Brunoniella australis, Scutellaria humilis, Pratia purpurascens, Geranium solanderi var. solanderi, Dichondra repens, Wahlenbergia communis, Mentha satureiodes, Oxalis exilis, Rumex brownii, Senecio lautus var. dissectifolius, Urtica incisa and Hydrocotyle laxiflora. Occurs on clay to loam soils derived from basalt or fine-grained sedimentary substrates on footslopes, hillslopes, hillcrests on the lower slopes of the Liverpool Range and other ranges in the upper Hunter Valley. Mostly cleared with some regrowth.",
                                    "percentCleared": 75,
                                    "tec": [
                                        {"id": 29, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 30, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 622,
                                    "name": "Grey Gum - Forest Red Gum - Yellow Box grassy tall open forest on mid-slopes of the Hunter Valley - North Coast escarpment",
                                    "description": "Tall to very tall open forest dominated by Grey Gum (Eucalyptus biturbinata), Yellow Box (Eucalyptus melliodora), Forest Red Gum (Eucalyptus tereticornis) often with Angophora floribunda and Forest Oak (Allocasuarina torulosa) more rarely Narrow-leaved Stringybark (Eucalyptus eugenioides). Shrubs are very sparse and include Acaca implexa with vines such as Clematis glycinoides var. glycinoides, Hibbertia scandens, Eustrephus latifolius and Rubus parvifolius. The ground cover is dense to mid-dense and dominated by grasses such as Poa labillardierei var. labillardierei, Microlaena stipoides var. stipoides and Austrodanthonia racemosa var. racemosa. Scramblers include Desmodium varians and Hardenbergia violacea. The mat-rush Lomandra longifolia may be common. Forbs include Pratia purpurascens, Dichondra repens, Veronica calycina, Lagenifera stipitata, Geranium solanderi var. solanderi, Plantago debilis, Euchiton involucratus, Acaena ovina and Viola betonicifolia. Occurs on dark brown to orange brown clay loam to sandy clay loam soils derived from basalt or fine-grained sedimentary rocks on hillslopes in hill or mountain landforms on the southern slopes of the eastern Liverpool Range to Barrington Tops southern slopes mainly in the NSW North Coast Bioregion. Often adjoins wet sclerophyll forest or rainforest. Partly cleared and much of its extent is regrowth composed of young trees.",
                                    "percentCleared": 55,
                                    "tec": [
                                        {"id": 31, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 32, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 623,
                                    "name": "Narrow-leaved Ironbark +/- Grey Box grassy woodland of the upper Hunter Valley, mainly Sydney Basin Bioregion",
                                    "description": "Tall woodland dominated by Narrow-leaved Ironbark (Eucalyptus crebra) often with Grey Box (Eucalyptus moluccana) with the occasional Kurrajong (Brachychiton populneus). The shrub layer is sparse and includes Maireana microphylla, Notelaea microcarpa var. microcarpa, Eremophila debilis, Cassinia quinquefaria, Myoporum montanum, Sclerolaena birchii, Acacia pravifolia and Acacia implexa. The ground cover is dense or mid-dense and dominated by grasses including Aristida ramosa, Microlaena stipoides var. stipoides, Sporobolus creber, Eragrostis leptostachya, Austrostipa scabra and Cymbopogon refractus. The mat-rush Lomandra bracteata may be present. Forb species include Calotis lappulacea Calotis cuneifolia, Chrysocephalum apiculatum, Dichondra repens, Einadia nutans subsp. nutans, Sida corrugata, Brunoniella australis, Vittadinia cuneata, Oxalis radicosa, Ajuga australis and Vernonia cinerea var. cinerea. Glossocardia bidens and Veronica calycina. Scramblers include Glycine tabacina, Glycine stenophita, Hardenbergia violacea and Desmodium brachypodum. Occurs on brown clay soil derived from fine-grained sedimentary substrates on hillcrests and upper hillslopes in hill and low hill landforms from 70 m to 350 m altitude with about 1000 mm rainfall in the central to upper parts of the Hunter Valley around Scone. Not well protected in reserves and mostly cleared. A threatened community.",
                                    "percentCleared": 60,
                                    "tec": []

                                },
                                {
                                    "id": 760,
                                    "name": "Cabbage Gum forest in Sun Valley, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Occurs on soils formed from diatremes (pipes of volcanic material) at Sun Valley.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 34, "name": " Sun Valley Cabbage Gum Forest in the Sydney Basin Bioregion  ", "status": ""}
                                    ]

                                },
                                {
                                    "id": 761,
                                    "name": "Cabbage Gum - Broad-leaved Apple open forest of the eastern escarpment, NSW North Coast Bioregion and South Eastern Queensland Bioregion",
                                    "description": "An open forest on sedimentary high quartz soils on undulating low hills and rises from the upper Clarence valley to Nymboida and the Macleay valley. The overstorey includes Cabbage Gum (Eucalyptus amplifolia) and Broad-leaved Apple (Angophora subvelutina). Grey Ironbark (Eucalyptus siderophloia) and Swamp Turpentine (Lophostemon suaveolens) and Pink Bloodwood (Corymbia intermedia) are also often present. The understorey is open but commonly includes Red Ash (Alphitonia excelsa) and climbers Glycine tabacina and Polymeria calycina. The ground cover is dominated by grasses, particularly Threeawn Speargrass (Aristida vagans), Barbed Wire Grass (Cymbopogon refractus), Small-flowered Finger Grass (Digitaria parviflora), Weeping Grass (Microlaena stipoides var. stipoides), Hairy Panic (Panicum effusum) and Slender Rats Tail Grass (Sporobolus elongatus). Other grass species present may include Red Grass (Bothriochloa macra), Bushy Hedgehog Grass (Echinopogon caespitosus), Browns Lovegrass (Eragrostis brownii), Paddock Lovegrass (Eragrostis leptostachya), Australian Basketgrass (Oplismenus aemulus), Paspalidium distans and Ditch Millet (Paspalum orbiculare). The ground cover also includes sedges Cyperus polystachyos and Common Fringe-sedge (Fimbristylis dichotoma) and herbs Grass Lily (Murdannia graminea), Phyllanthus virgatus and Whiteroot (Pratia purpurascens). Other ground cover species that are likely to occur are Cut-leaved Daisy (Brachyscome multifida), Forest Daisy (Brachyscome microcarpa), Carex longebrachiata, Indian Pennywort (Centella asiatica), a rock fern Cheilanthes sieberi subsp. sieberi, Plump Windmill Grass (Chloris ventricosa), Common Everlasting (Chrysocephalum apiculatum), Crotalaria montana var. angustifolia, Curculigo ensifolia var. ensifolia, Slender Flat-sedge (Cyperus gracilis), Cyperus imbecillis, Kidney Weed (Dichondra repens), Euchiton sphaericus, Hybanthus stellarioides, Golden Weather-grass (Hypoxis hygrometrica), Slender Wire Lily (Laxmannia gracilis), Prickly Beard-heath (Leucopogon juniperinus), Poranthera microphylla, Scleria mackaviensis, Spermacoce brachystema, Yellow Autumn-lily (Tricoryne elatior), Vernonia cinerea and Trailing Speedwell (Veronica plebeia).",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 35, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion  ", "status": ""}
                                    ]

                                },
                                {
                                    "id": 762,
                                    "name": "Cabbage Gum open forest or woodland on flats of the North Coast",
                                    "description": "Other Diagnostics Features: Two communities; one on coastal lowlands and the other on flats on the eastern side of the New England Tableland.;  LandscapePosition: Poorly drained lower slopes, valley flats and creek banks.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 36, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion  ", "status": ""}
                                    ]

                                },
                                {
                                    "id": 829,
                                    "name": "Forest Red Gum - Coast Grey Box shrubby open forest on steep hills in the Bega Valley, South East Corner Bioregion",
                                    "description": "Other Diagnostics Features: Open forest to 20m tall sometimes with a mid layer of rainforest elements and with a dense ground cover of forbs and grasses.;  LandscapePosition: Occurs on steep hilly terrain in the Brogo -Bega area at 100 - 300 m elevation, usually on granitic substrates, but sometimes on outcrops of Ordovician mudstones near Bega. There are also stands in the Candelo - Myrtle Mountain area.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 37, "name": " Brogo Wet Vine Forest in the South East Corner Bioregion  ", "status": ""}
                                    ]
                                },
                                {
                                    "id": 834,
                                    "name": "Forest Red Gum - Rough-barked Apple - White Stringybark grassy woodlands on hills in dry valleys, southern South East Corner Bioregion",
                                    "description": "Other Diagnostics Features: Woodland about 20 tall, with sparse small trees and shrubs layer, and groundcover dominated by grasses and forbs.;  LandscapePosition: Occurs on undulating terrain in the drier parts of the Araluen, Bega and Towamba valleys below 300 m elevation, usually on granitic substrates.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 38, "name": " Lowland Grassy Woodland in the South East Corner Bioregion  ", "status": ""},
                                        {"id": 39, "name": " Brogo Wet Vine Forest in the South East Corner Bioregion (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 837,
                                    "name": "Forest Red Gum - Swamp Box of the Clarence Valley lowlands of the NSW North Coast Bioregion",
                                    "description": "Other Diagnostics Features: Tall to very tall open forest.;  LandscapePosition: On high and low quartz sediments in the Clarence lowlands.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 40, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"},
                                        {"id": 41, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 838,
                                    "name": "Forest Red Gum - Thin-leaved Stringybark grassy woodland on coastal lowlands, southern Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: Woodland with an open shrub layer and a continuous grassy groundcover.;  LandscapePosition: Occurs on lower slopes in coastal rainshadow valleys, below 350m ASL, from Wollongong to Milton and west to Yalwal.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 42, "name": " Illawarra Lowlands Grassy Woodland in the Sydney Basin Bioregion  ", "status": ""},
                                        {"id": 43, "name": " Lowland Grassy Woodland in the South East Corner Bioregion (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 848,
                                    "name": "Grey Box - Forest Red Gum - Grey Ironbark open forest of the hinterland ranges of the North Coast",
                                    "description": "Other Diagnostics Features: Tall to very tall dry grassy open forest.;  LandscapePosition: Occurs in hilly areas of valleys north from the Copeland Tops.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 44, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"},
                                        {"id": 45, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 971,
                                    "name": "Narrow-leaved Red Gum woodlands of the lowlands of the North Coast",
                                    "description": "Other Diagnostics Features: Coarse textured soils of fair to moderate fertility.;  LandscapePosition: On low poorly drained sites near coastal streams and swamps.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 46, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"},
                                        {"id": 47, "name": " Swamp Sclerophyll Forest on Coastal Floodplains of the New South Wales North Coast, Sydney Basin and South East Corner Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1326,
                                    "name": "Woollybutt - White Stringybark - Forest Red Gum grassy woodland on coastal lowlands, southern Sydney Basin Bioregion and South East Corner Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Restricted to flats below 100m ASL with sandy loam soils and partially impeded drainage mainly between the Illawarra and Moruya.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 48, "name": " Illawarra Lowlands Grassy Woodland in the Sydney Basin Bioregion (Equivalent) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1603,
                                    "name": "Narrow-leaved Ironbark - Bull Oak - Grey Box shrub - grass open forest of the central and lower Hunter",
                                    "description": "Open forests with a canopy dominated by Eucalyptus crebra. The mid-storey consists of an open shrub layer. The ground layer is predominately grassy with various graminoids; forbs and small ferns.| Central and Lower Hunter Valley.",
                                    "percentCleared": 74,
                                    "tec": [
                                        {"id": 49, "name": " Central Hunter Grey Box-Ironbark Woodland in the New South Wales North Coast and Sydney Basin Bioregions (Equivalent) largely equivalent to", "status": "E"},
                                        {"id": 50, "name": " Hunter Lowland Redgum Forest in the Sydney Basin and New South Wales North Coast Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1604,
                                    "name": "Narrow-leaved Ironbark - Grey Box - Spotted Gum shrub - grass woodland of the central and lower Hunter",
                                    "description": "Open forests with a canopy dominated by Eucalyptus crebra and Eucalyptus moluccana. The mid-storey consists of a sparse shrub layer. The ground layer is predominately grassy with scattered graminoids; forbs and small ferns.| Central and Lower Hunter Valley.",
                                    "percentCleared": 71,
                                    "tec": [
                                        {"id": 51, "name": " Central Hunter Ironbark-Spotted Gum-Grey Box Forest in the New South Wales North Coast and Sydney Basin Bioregions (Equivalent) largely equivalent to", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1691,
                                    "name": "Narrow-leaved Ironbark - Grey Box grassy woodland of the central and upper Hunter",
                                    "description": "Eucalypt Woodlands| the mid-stratum is sparse and comprises tall shrubs. The ground stratum is the prominent understorey and is typically grassy with scattered forbs. | This community is distributed across the upper Hunter Valley and adjacent low hills from Broke west to Merriwa and north to above Scone. It typically occurs on coal-bearing sedimentary geologies (e.g. Wittingham Coal Measures) at elevations between 70 and 350m.",
                                    "percentCleared": 79,
                                    "tec": [
                                        {"id": 53, "name": " Hunter Lowland Redgum Forest in the Sydney Basin and New South Wales North Coast Bioregions (Part) ", "status": "E"},
                                        {"id": 54, "name": " Central Hunter Grey Box-Ironbark Woodland in the New South Wales North Coast and Sydney Basin Bioregions (Part) ", "status": "E"},
                                        {"id": 55, "name": " Hunter Lowland Redgum Forest in the Sydney Basin and New South Wales North Coast Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1692,
                                    "name": "Bull Oak grassy woodland of the central Hunter Valley",
                                    "description": "Allocasuarina Woodlands| the mid-stratum is usually absent| the ground stratum is well developed with a wide range of grasses represented.| This community is distributed from about Denman southeast to Belford. It is found on a variety of sedimentary geologies at elevations of 50 to 150m.",
                                    "percentCleared": 53,
                                    "tec": [
                                        {"id": 55, "name": " Hunter Lowland Redgum Forest in the Sydney Basin and New South Wales North Coast Bioregions (Part) ", "status": "E"},
                                        {"id": 56, "name": " Central Hunter Grey Box-Ironbark Woodland in the New South Wales North Coast and Sydney Basin Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1696,
                                    "name": "Blakelys Red Gum - Rough-barked Apple shrubby woodland of central and upper Hunter",
                                    "description": "Eucalypt Open Forests to Woodlands. The mid-stratum is usually present and well developed and comprises a variety of shrubs. The ground stratum is typically grassy with a mix of forbs.| This community is typically found on sandstone hills from Goulburn River NP to near Bulga at elevations of between 50 and 300m.",
                                    "percentCleared": 46,
                                    "tec": []
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Western Slopes Grassy Woodlands",
                            "pct": [
                                {
                                    "id": 201,
                                    "name": "Fuzzy Box Woodland on alluvial brown loam soils mainly in the NSW South Western Slopes Bioregion",
                                    "description": "Tall woodland or open forest dominated by Fuzzy Box (Eucalyptus conica) often growing with Western Grey Box (Eucalyptus microcarpa), Yellow Box (Eucalyptus melliodora) or Kurrajong (Brachychiton populneus subsp. populneus). Buloke (Allocasuarina luehmannii) is common in places. Shrubs are generally sparse and include Acacia deanei subsp. deanei, Dodonaea viscosa subsp. cuneata, Geijera parviflora, Acacia implexa, Senna artemisioides sens lat., Myoporum montanum and Cassinia aculeata. Small shrubs include Maireana enchylaenoides, Maireana microphylla and Sclerolaena muricata var. muricata. The ground cover may be dense after rain but is usually mid-dense and may be dominated by weed species. Native forbs include Calotis cuneifolia, Eremophila debilis, Sida corrugata, Einadia hastata, Dianella revoluta var. revoluta and Xerochrysum viscosa. Native grasses include Austrostipa scabra subsp. scabra, Chloris truncata, Elymus scaber var. scaber, Themeda australis and Austrodanthonia setacea. Weeds may be very common. They include the pepper Tree Schinus areica and forb species such as Plantago lanceolata, Lepidium africanum, Verbena bonariensis and Marrubium vulgare and the grass species Bromus diandrus, Vulpia myuros, Lolium perenne and Paspalum dilatatum. This community occurs on brown loam or clay, alluvial or colluvial soils on flats, low slopes, prior streams and abandoned channels or slight depressions on the undulating plains mainly in the NSW South-western Slopes Bioregion but extending into the Cobar Peneplain and Brigalow Belt South Bioregions. Outliers occur near Byalong in the east. Most abundant in the Forbes district but extends north to Narromine. This community often occurs upslope from River Red Gum communities just above frequently inundated areas on the floodplain. Less than 5% of this community is estimated to remain compared to pre-European times due to past clearing. Clearing has largely ceased now but other ecological problems prevail such as sensescence, lack of fire and weed invasion. It is considered a critically endangered community with less than 0.5% in protected areas. as of 2005 a small stand of 27 ha was represented in a reserve - at Weddin Mountains National Park. This community requires both protection in reserves or on private land and rehabilitation. Grades into and similar to ID202 in the central part of the Brigalow Belt South Bioregion.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 99, "name": " Fuzzy Box Woodland on alluvial soils of the South Western Slopes, Darling Riverine Plains and Brigalow Belt South Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 202,
                                    "name": "Fuzzy Box woodland on colluvium and alluvial flats in the Brigalow Belt South Bioregion (including Pilliga) and Nandewar Bioregion",
                                    "description": "Tall woodland up to 20 m high dominated by Fuzzy Box (Eucalyptus conica) (and intergrades) as the sole tree species or co-existing with Blakelys Red Gum (Eucalyptus blakelyi), Yellow Box (Eucalyptus melliodora), White Cypress Pine (Callitris glaucophylla), Poplar Box (Eucalyptus populnea subsp. bimbil), Pilliga Box (Eucalyptus pilligaensis). Other trees may include White Box (Eucalyptus albens) or Buloke (Allocasuarina luehmannii). Grey Box (Eucalyptus moluccana) occurs in the north east near the Dumaresq River and Slaty Gum (Eucalyptus dawsonii) in the south. Understorey shrubs are very sparse and include Acacia deanei, Geijera parviflora, Dodonaea viscosa subsp. spatulata, Acacia implexa and Cassinia laevis and Jasmine lineare. The ground cover may be dense after rain but is normally mid-dense to sparse. It contains a rich herb/grassy flora. Forb species include Ajuga australis, Dichondra repens, Vittadinia dissecta var. hirta, Boerhavia dominii, Brunoniella australis, Einadia nutans subsp. nutans, Hydrocotyle laxiflora and the twiner Glycine tabacina. The graminoids Lomandra filiformis and Lomandra longifolia are often present. Grass species include Austrostipa verticillata, Austrostipa scabra, Aristida ramosa, Elymus scaber, Microlaena stipoides, Austrodanthonia fulva, Austrodanthonia racemosa, Chloris truncata, Poa sieberiana and Panicum effusum. A high proporation of ground cover may be composed of exotic weed species including Hypochaeris glabra, Hypochaeris radicata, Conyza bonariensis, Conyza albida, Bidens subalternans and Opuntia tomentosa. Occurs on alluvial and colluvial sandy loam to light clay soils on undulating plains, terraces, footslopes or lining creeks in the region from Coonabarabran north to the Queensland border extending into Queensland in the Brigalow Belt South and Nandewar Bioregions. Most of the original extent of this community has been cleared with small patches remaining along roadsides, in forests or reserves or along creeklines on private land. An listed endangered ecological community that is poorly represented in protected areas as of 2009.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 100, "name": " Fuzzy Box Woodland on alluvial soils of the South Western Slopes, Darling Riverine Plains and Brigalow Belt South Bioregions (Equivalent) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 266,
                                    "name": "White Box grassy woodland in the upper slopes sub-region of the NSW South Western Slopes Bioregion",
                                    "description": "Tall woodland with trees to 25 m high dominated by White Box (Eucalyptus albens) often as the only tree species. Kurrajong (Brachychiton populneus subsp. populneus) is often present, particuarly on limestone or rocky ground. Eucalyptus bridgesiana or Eucalyptus blakelyi or Eucalyptus melliodora may also be present as minor components of the canopy. The shrub layer is usually sparse or absent depending on grazing history or soil type. Wattles are common shrubs including Acacia decora, Acacia implexa, Acacia pycnantha, Acacia deanei subsp. paucijuga, Acacia genistifolia, Acacia penninervis var. penninervis, Acacia buxifolia subsp. buxifolia and Acacia paradoxa. Other shrubs include Dodonaea viscosa subsp. cuneata, Bursaria spinosa subsp. spinosa and Cassinia spp. The ground cover is usually mid-dense to dense except during drought and may be very diverse in grass and forb species. Very few areas contain a native ground cover with a rich flora but where this occurs it typically contains grasses such as Themeda australis, Poa sieberiana, Elymus scaber var. scaber and a range of Austrodanthonia species including Monachather paradoxus and Austrodanthonia auriculata. Forbs in such sites include Wurmbea dioica, Gonocarpus elatus, Microseris lanceolata, Leptorhynchos squamatus sens lat., Craspedia variabilis, Podolepis jaceoides, Hypericum gramineum, Stackhousia monogyna, Ranunculus lappaceous, Dichopogon strictus, Velleia paradoxa and Diuris dendrobioides. In heavily grazed sites fewer native species are present and the sites are dominated by Austrostipa spp, Aristida spp. and Austrodanthonia spp. Grasses with some hardy forbs such as Calotis spp, Xerochrysum viscosa, Vittadinia cuneata, Wahlenbergia luteola, Solenogyne dominii, Scutellaria humilis and Oxalis perennans. In sites exposed to continuous grazing, soil disturbance and fertilizer application, exotic species dominate the ground cover including Bromus spp., Vulpia spp., Avena fatua, Echium plantagineum, Trifolium spp. and Plantago lanceolata. Floristic composition varies from north to south and on different aspects and soil types. Occurs between 300 - 600 m altitude in the 500 - 700 mm rainfall zone, most of which falls in winter. The soils are mainly red-brown earths, red or yellow podsols with some brown and black earths. The soils are derived from a variety of lithologies including shale, limestone, fine grained metamorhic rocks, granite and basalt. Species composition appears not to vary greatly across these lithologies. Mainly occurs on hillslopes in low hill or hill landform patterns in the NSW South-western Slopes Bioregion overlapping into the South Eastern Highlands Bioregion. Most of this community has been cleared and most of the extent of ground cover has been replaced by exotic annual plant species. Sheet erosion has lead to top soil loss on heavily grazed slopes. Small areas with an intact ground cover remain in cemetries, roadsides and travelling stock reserves. While this community is poorly sampled in public reserves, some progress is being made in protecting remnants in non-reserve conservation measures. A highly threatened plant community due to ground cover change and clearing.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 101, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 102, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 267,
                                    "name": "White Box - White Cypress Pine - Western Grey Box shrub/grass/forb woodland in the NSW South Western Slopes Bioregion",
                                    "description": "Tall or mid-high woodland or open woodland with trees to about 15 m high dominated by White Box (Eucalyptus albens), White Cypress Pine (Callitris glaucophylla) and often Western Grey Box (Eucalyptus microcarpa) and rarely Black Cypress Pine (Callitris endlicheri). The shrub layer is sparse containing wattles such as Acacia decora, Acacia hakeoides, Acacia deanei subsp. paucijuga, Acacia implexa and in the south Acacia pycnantha. Other shrubs include Dodonaea viscosa subsp. cuneata, Myoporum montanum, Pittosporum angustifolium, Senna artemisioides, Maireana enchylaenoides and Maireana microphylla. The ground cover is mid-dense to very sparse depending on rainfall. It may contain the decumbent shrubs Eremophila debilis. Grass species include Austrostipa densiflora, Austrostipa bigeniculata, Austrostipa verticillata, Austrodanthonia caespitosa,Themeda australis, Enteropogon acicularis and Bothriochloa macra. Forb species include Xerochrysum viscosa, Dianella revoluta, Dichopogon strictus, Chrysocephalum apiculatum, Hydrocotyle laxiflora, Podolepis jaceoides, Vittadinia cuneata, Wahlenbergia luteola, Einadia hastata, Einadia nutans, Plantago varia and Atriplex semibaccata. The mat-rushes Lomandra multiflora and Lomandra filiformis subsp. coriacea may be present. Weeds dominate distrubed locations. Occurs on red-brown loamy soils or loamy sandy soils derived from sedimentary or volcanic rocks on hillslopes and hillcrests or parna soils on low rises in undulating low hills landscapes in the mid-western part of the NSW South-western Slopes Bioregion. Contains elements of White Box woodland on the slopes (e.g. ID266), White Cypress Pine woodland (ID70) and Western Grey Box woodlands on the plains (ID76 and ID80). Mostly cleared with remnant stands affected by heavy grazing and weed invasion.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 103, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 104, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 268,
                                    "name": "White Box - Blakelys Red Gum - Long-leaved Box - Nortons Box - Red Stringybark grass-shrub woodland on shallow soils on hills in the NSW South Western Slopes Bioregion",
                                    "description": "Tall to mid-high woodland or open forest dominated by White Box (Eucalyptus albens), Blakelys Red Gum (Eucalyptus blakelyi), Long-leaved Box (Eucalyptus goniocalyx) and Red Stringybark (Eucalyptus macrorhyncha) and often with Red Box (Eucalyptus polyanthemos). Some areas may contain occasional Mugga Ironbark (Eucalyptus sideroxylon). Shrubs are sparse and include Acacia paradoxa, Dillwynia sericea, Acacia implexa, Acacia genistifolia, Lissanthe strigosa subsp. strigosa, Bursaria spinosa subsp. spinosa, Daviesia latifolia, Hibbertia obtusifolia and Melichrus urceolatus. The ground cover is generally mid-dense. Grass species include Microlaena stipoides var. stipoides, Poa sieberiana, Themeda australis, Austrodanthonia eriantha, Austrostipa densiflora and Elymus scaber var. scaber. Forb species include Dianella revoluta var. revoluta, Hydrocotyle laxiflora, Solenogyne dominii, Acaena spp., Gonocarpus tetragynus, Geranium solanderi var. solanderi, Xerochrysum spp. and Arthropodium minus. The rush Luzula densiflora and sedges Schoenus apogon, Carex breviculmis and Carex inversa may occur. The mat-rush Lomandra filiformis is susually common. Occurs on shallow clay or loamy clay soils derived from fine grained sedimentary, metamorphic or igneous substrates on hillcrests hillslopes in low hill and hill landform patterns in the upper slopes sub-region of the NSW South-western Slopes Bioregion. Mostly cleared with some remnants in more rugged terrain or in public land with degraded patches on private land. Weeds are abundant in some locations including St Johns Wort (Hypericum perforatum) that may be a problem. A threatened plant community due to the degree of clearing and alteration of the ground cover. This woodland provides habitat for a number of threatened woodland bird species and its restoration would assist with landscape function for some key species of fauna.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 105, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 106, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 272,
                                    "name": "White Box - Black Cypress Pine - red gum +/- Mugga Ironbark shrubby woodland in hills of the NSW central western slopes",
                                    "description": "Mid-high woodland containing White Box (Eucalyptus albens), Black Cypress Pine (Callitris endlicheri) with either Tumbledown Red Gum (Eucalyptus dealbata) or Blakelys Red Gum (Eucalyptus blakelyi) and Red Stringybark (Eucalyptus macroryncha) or occasionally Mugga Ironbark (Eucalyptus sideroxylon). The understorey conatains a sparse shrub layer including the wattles Acacia vestita, Acacia paradoxa, Acacia penninervis, Acacia decora and Acacia implexa and along with Cassinia laevis, Lissanthe strigosa subsp. strigosa, Leucopogon virgatus and Dodonaea viscosa s. lat. Dense regenerating stands of Black Cypress Pine (Callitris endlicheri) may be present in the understorey. The ground cover is sparse dominated by grasses such as Austrodanthonia racemosa, Austrostipa densiflora, Echinopogon ovatus and Joycea pallida. Forbs include Hydrocotyle laxiflora, Acaena ovina, Scutellaria humilis, Cymbonotus preissianus, Geranium solanderi var. solanderi, Xerochrysum bracteata, Wahlenbergia communis and Einadia hastata. The rock fern Cheilanthes sieberi is often present. Occurs on brown clay loam or loam texture contrast soils derived from acid volcanics, igneous or sedimentary rocks in gullies or on hillslopes on the central western slopes of NSW mainly in the northern part of the NSW South-western Slopes Bioregion. Weeds may dominate the edge of remnants. Most of this woodland has been cleared but more of it remains than the grassy White Box woodland on deeper soils (ID266). As of 2006 only a few small areas were sampled in protected areas. The main threats are over-grazing and clearing.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 274,
                                    "name": "White Box - Rough-barked Apple alluvial woodland of the NSW central western slopes including in the Mudgee region",
                                    "description": "Tall woodland dominated by White Box (Eucalyptus albens) and Rough-barked Apple (Angophora floribunda) with a sparse shrub cover including Acacia buxifolia, Acacia implexa, Olearia elliptica, Hibbertia spp. and Swainsona galegifolia. The ground cover may be dense in places and mid-dense overall and includes the grasses Panicum effusum, Themeda australis, Microlaena stipoides, Lachnagrostis filiformis, Austrostipa ramosissima and Echinopogon ovatus; forbs include Acaena novae-zelandiae, Arthropodium milleflorum, Daucus glochidiatus form F and Dichopogon fimbriatus; sedges include Carex appressa. Occurs on alluvial or colluvial red clay soils derived from shale in valley bottoms and on adjoining lower slopes in hill landscapes in the Central Western Slopes Botanical Division being the northern section of the NSW South-western Slopes Bioregion around the town of Mudgee. A similar Apple Box woodland occurs on alluvium in valleys in the north-western section of the Sydney Basin Bioregion to the east (Wollemi and Goulburn River NPs). Due to its position in valleys, most of this community has been cleared for grazing. Weed infestation is very high in some locations including along creeks. It is moderate-poorly represented in protected areas and is a threatened plant community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 108, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 109, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 275,
                                    "name": "Herbaceous White Box - Apple Box valley woodland of the NSW central western slopes",
                                    "description": "Tall woodland dominated by White Box (Eucalyptus albens) and Apple Box (Eucalyptus bridgesiana) occasionally with Blackwood (Acacia melanoxylon) with a sparse shrub layer that includes Pomaderris angustifolia, Cassinia laevis and Acacia vestita. The ground cover is dense and dominated by a high diversity of grass and forb species. Grasses include Austrodanthonia caespitosa, Microlaena stipoides var. stipoides, Lachnagrostis filiformis, Poa labillardierei var. labillardierei, Poa sieberiana var. sieberiana, Echinopogon ovatus. Forbs include Urtica incisa, Hydrocotyle laxiflora, Alternanthera denticulata, Senecio prenanthoides and Rumex brownii. Sedges include Carex inversa and Carex incomitata. The rush Juncus usitatus is also common. Occurs on brown loam soil, derived from sedimentary rocks including shale in valleys and along creeks at higher altitudes in the central western slopes part of the NSW South-western Slopes Bioregion extending into the NSW South East Highland Bioregion. Grades into grassy White Box woodland on undulating country at lower elevations and into Red Box - Red Stringybark - Long-leaved Box - Black Cypress Pine on slopes and ridges on more siliceous lithologies. Mainly cleared and affected by weed infestation.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 110, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 111, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 276,
                                    "name": "Yellow Box grassy tall woodland on alluvium or parna loams and clays on flats in NSW South Western Slopes Bioregion",
                                    "description": "Tall grassy woodland dominated by Yellow Box (Eucalyptus melliodora) generally without other tree species or if present they are in low numbers. The shrub layer is either absent or very sparse and includes wattles such as Acacia decora, Acacia implexa and Acacia pycnantha. The ground cover is generally dense and dominated by grasses including Bothriochloa macra, Austrostipa bigeniculata, Elymus scaber var. scaber and Chloris truncata. Forbs include Sida corrugata, Goodenia pinnatifida and Vittadinia cuneata. Occurs on alluvial or aelian (parna) red-brown loam or clay soils on flats on floodplains or plains in the NSW South-western Slopes Bioregion generally west of the Hume Highway around Wagga Wagga to Temora and north to Wellington. Grades into the more common Yellow Box - Blakelys Red Gum community and White Box (Eucalyptus albens) woodland on uuper slopes to the east and a similar ID312 in this same region. This is an endangered community because most of it has been cleared due to its occurrence on arable soils and its location on flat terrain that is suitable for grazing and cropping including irrigation. Pasture weeds have invaded most remnants.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 112, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 113, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 277,
                                    "name": "Blakelys Red Gum - Yellow Box grassy tall woodland of the NSW South Western Slopes Bioregion",
                                    "description": "Tall woodland to about 20 m high dominated by Blakelys Red Gum (Eucalyptus blakelyi) and Yellow Box (Eucalyptus melliodora). Blakelys Red Gum or Yellow Box vfary in their dominance and either can be absent in some places grading into areas with more Apple Box (Eucalyptus bridgesiana), Long-leaved Box (Eucalyptus goniocalyx) and rarely Eucalyptus microcarpa. Shrubs are sparse or absent and may include Acacia dealbata. The ground cover may be dense to sparse depending on rainfall and is dominated by grass species including Poa sieberiana, Bothriochloa macra, Aristida ramosa, Themeda australis, Austrodanthonia spp and Austrostipa spp. Forbs include Vittadinia cuneata, Chrysocephalum apiculatum and Sida corrugata. A very widespread community on fertile deep, loam or clay soils derived from a range of substrates including fine-grained sedimentary and metamorphic rocks but also volcanics and fine-grained granite. Occurs on flats, footslopes and hillslopes mainly in the upper slopes sub-region of the NSW South-western Slopes Bioregion mainly east of Wagga Wagga. Grades into White Box (Eucalyptus albens) grassy woodland (ID266) on hillslopes and into either ID76 (Western Grey Box woodland) or ID276 (Yellow Box woodland) on parna or alluvial flats. Mainly cleared and subjected to nutrification from fertilizers and associated weed invasion.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 114, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "E"},
                                        {"id": 115, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 278,
                                    "name": "Riparian Blakelys Red Gum - box - shrub - sedge - grass tall open forest of the central NSW South Western Slopes Bioregion",
                                    "description": "Tall open forest or woodland dominated by Blakelys Red Gum (Eucalyptus blakelyi) often with Yellow Box (Eucalyptus melliodora), Apple Box (Eucalyptus bridgesiana) or Long-leaved Box (Eucalyptus goniocalyx). Shrubs are sparse and usually contain a number of wattles (Acacia spp) with tea tree (Leptsopsermum spp) or hopbush (Dodonaea viscosa var. cuneata. The ground cover is often dense containing sedges such as Carex appressa and other Carex species. Rushes Juncus spp.) may be common in wet sites. Grasses include Poa labillardierei var. labillardierei and Microlaena stipoides var. stipoides. Forbs include Rumex brownii, Ranunculus spp., Hydrocotyle laxiflora, Dichondra repens, Dianella revoluta var. revoluta, Geranium retrorsum, Acaena ovina, Persicaria lapathifolia and Ranunculus sessiliflorus var. sessiliflorus. Occurs on deep alluvial silty clay-loam soils in gullies and on creek flats in hill landscapses or along creeks mainly in the Upper Slopes sub-region of the NSW South-western Slopes Bioregion. Mostly cleared with some areas remaining along creeks in forested hills. Grades into the widespread ID277 Blakelys Red Gum - Yellow Box woodland on hillslopes with deep soil.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 116, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "CE"},
                                        {"id": 117, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 279,
                                    "name": "Blakelys Red Gum - White Cypress Pine woodland on footslopes of hills in central part of the NSW South Western Slopes Bioregion",
                                    "description": "Mid-high to tall woodland dominated by Blakelys Red Gum (Eucalyptus blakelyi) and White Cypress Pine (Eucalyptus glaucophylla) with Red Stringybark (Eucalyptus macrorhyncha), Kurrajong (Brachychiton populneus) or Tumbledown Red Gum (Eucalyptus dealbata). A very sparse to sparse shrub layer may include Acacia penninervis, Hibbertia obtusifolia, Acacia buxifolia, Acacia paradoxa, Cassinia laevis or Bursaria spinosa subsp. lasiophylla. The ground cover is mid-dense to very sparse and includes grasses such as Microlaena stipoides var. stipoides, Austrodanthonia caespitosa, Austrostipa scabra, Dichelachne micranthra and Elymus scaber. Forbs include Dichondra repens, Geranium solanderi var. solanderi, Dampiera lanceolata var. lanceolata, Xerochrysum viscosa, Hydrocotyle laxiflora, Rumex brownii, Sigesbeckia orientalis subsp. orientalis and Calotis cuneifolia. Climbers include Glycine clandestina, Desmodium varians and Hardenbergia violacea. Weed species are often abundant due to this community occurring on lower slopes near cleared land. Occurs on sandy loam soils derived from colluvium of sedimentary substrates on the lower slopes or washouts in hill landform patterns in the central part of the NSW South-western Slopes Bioregion, including on footslopes in the Weddin Mountains region. Heavily grazed.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 118, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 119, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 280,
                                    "name": "Red Stringybark - Blakelys Red Gum +/- Long-leaved Box shrub/grass hill woodland of the NSW South Western Slopes Bioregion",
                                    "description": "Mid-high woodland dominated by Red Stringybark (Eucalyptus macrorhynca) and Blakelys Red Gum (Eucalyptus blakelyi) sometimes with Long-leaved Box (Eucalyptus goniocalyx) or Yellow Box (Eucalyptus melliodora). The shrub layer is sparse to mid-dense and includes Bursaria spinosa, Acacia buxifolia, Lissanthe strigosa, Hibbertia obtusiflora and Cassinia spp. Cootamundra Wattle (Acacia baileyana) may be a dominant shrub in the Cootamundra region. The ground cover is mid-dense and is dominated by grasses such as Themeda australis, Austrodanthonia setacea and Austrostipa densiflora and forbs such as Chrysocephalum semipapposum, Xerochrysum viscosa, Dianella revoluta var. revoluta, Hydrocotyle laxiflora and Stackhousia monogyna. Occurs on red- brown loamy clay soils derived from granite, granodiorite, sedimentary or metamorphic rocks on steep hillslopes and hillcrests in hilly country from Cootamundra and eastwards in the NSW South-western Slopes Bioregion. Mainly cleared with limited representation in protected areas. A threatened community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 120, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 121, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 281,
                                    "name": "Rough-Barked Apple - red gum - Yellow Box woodland on alluvial clay to loam soils on valley flats in the northern NSW South Western Slopes Bioregion and Brigalow Belt South Bioregion",
                                    "description": "Tall open forest or woodland with trees up to 30 m high dominated by Rough-barked Apple (Angophora floribunda) usually with Eucalyptus blakelyi or Eucalyptus melliodora. Other tree species may include Callitris glaucophylla, Brachychiton populneus and various red gum intergrades. River Oak (Casuarina cunninghamiana subsp. cunninghamiana) may be present but often forms its own riparian community in nearby river banks. The shrub layer is sparse or absent in heavily grazed locations. Shrub species may include wattles such as Acacia implexa, Acacia decora, Acacia penninervis var. penninervis and Acacia deanei. Other shrub species may include Dodonaea viscosa subsp. angustifolia, Bursaria spinosa, Olearia elliptica subsp. elliptica and Hibbertia obtusifolia. The ground cover is usually dense to mid-dense. It includes grass species such as Austrostipa verticillata, Austrostipa scabra, Arundinella nepalensis, Digitaria breviglumis, Echinopogon spp., Dichelachne micrantha, Poa labillardierei var. labillardierei and Themeda australis. The mat-rush Lomandra longifolia may be common. Rush (Juncus spp.) occur along creeks and in depressions along with sedges such as Carex incomitata. Forb species include Swainsona galegifolia, Haloragis heterophylla, Dianella revoluta var. revoluta, Ranunculus sessiliflorus var. sessiliflorus, Dichondra repens, Epaltes australis, Haloragis heterophylla, Epaltes australis, Calotis cuneifolia, Ajuga australis, Dichondra repens, Scutellaria humilis and Hydrocotyle laxiflora. Scramblers include Desmodium brachypodium, Desmodium repens and Glycine clandestina. A widespread community that occurs on black, brown and grey alluivial and colluvial clay loam, loam or sandy loam soils derived from a range of substrates on valley flats and footslopes in valleys in hill landform patterns mainly in the Brigalow Belt South Bioregion. Some areas also occur north of Mudgee in the Gulgong-Dunedoo area in the NSW South-western Slopes Bioregion. Most of its original extent has been cleared and weeds have invaded many remnants but some stands remain.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 120, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 121, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 282,
                                    "name": "Blakelys Red Gum - White Box - Yellow Box - Black Cypress Pine box grass/shrub woodland on clay loam soils on undulating hills of central NSW South Western Slopes Bioregion",
                                    "description": "Tall grassy woodland co-dominated by Blakelys Red Gum (Eucalyptus blakelyi) and White Box (Eucalyptus albens) often with either Yellow Box (Eucalyptus melliodora) or Apple Box (Eucalyptus bridgesiana). Stands of Black Cypress Pine (Callitris endlicheri) may be present. The shrub layer is absent or sparse and may include wattles such as Acacia decora, Acacia dealbata or Acacia implexa. The heath Lissanthe strigosa mat be common. The ground cover is mid-dense to dense dominated by grasses and forbs or weeds in disturbed sites. The ground cover in remnants of good condition include grasses such as Themeda australis, Aristida ramosa, Austrodanthonia racemosa var. racemosa, Austrodanthonia caespitosa, Poa sieberiana, Chloris truncata, Aristida behriana, Bothriochloa macra and Elymus scaber. Forbs species include Arthropodium minus, Acaena ovina, Bulbine bulbosa, Dichopogon fimbriatus, Asperula conferta, Chrysocephalum apiculatum, Hypericum graminum, Microseris lanceloata, Solenogyne dominii, Stackhousia monogyna and Wurmbea dioica. In low lying areas the rush Juncus remotiflorus and the sedge Carex appressa are often present. Weeds are abundant in most remnants due to ground distrubance, application of fertilizer and sowing of exotic pastures. Occurs on shallow clay loam soils, derived from igneous, volcanic (e.g. rhyolite) or fine grained sedimentary lithologies on hillslopes, hillcrests or footslopes on undulating hills in the NSW South-western Slopes Bioregion including in the Gundagai - Cootamundra - Cowra - Young - Boorowa region. Grades into Grassy White Box woodland (ID266) on better soils and Blakelys Red Gum - Yellow Box woodland (ID277) of Yellow Box woodland (ID276) on flats and lower hills. Mostly cleared and weed infested. A threatened community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 126, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 127, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 283,
                                    "name": "Apple Box - Blakelys Red Gum moist valley and footslopes grass-forb open forest of the NSW South Western Slopes Bioregion",
                                    "description": "Tall open forest or woodland dominated by Apple Box (Eucalyptus bridgesiana) often with Blakelys Red Gum (Eucalyptus blakelyi) or Yellow Box (Eucalyptus melliodora). The shrub layer is very sparse or absent and often contains wattes such as Acacia dealbata at higher elevations or Acacia deanii and Acacia implexa in western locations along with Cassinia and Leptospermum. The ground cover is mid-dense to dense and dominated by grass species such as Microlaena stipoides var. stipoides, Elymus scaber var. scaber and Themeda australis. Forb species include Dichondra repens, Acaena ovina, Hydrocotyle laxiflora, Epilobium billardiereanum subsp. hydrophilum, Craspedia variabilis and Solenogyne dominii. Sedges include such as Cyperus lucidus and Carex appressa and the rush Luzula meridionalis may be present. Occurs on clay loams or silty clay loam soils derived from colluvium or sedimentary, metamorphic, igneous or volcanic substrates on flats and gentle hillslopes in hill landscape patterns of the NSW South-western Slopes Bioregion. Grades into Blakelys Red Gum and Yellow Box dominated communities. Mostly cleared and often infested with weeds. An endangered community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 126, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 127, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 284,
                                    "name": "Red Stringybark - Blakelys Red Gum - tea tree herbaceous swampy valley open forest of the southern NSW South Western Slopes Bioregion",
                                    "description": "Tall woodland dominated by Red Stringybark (Eucalyptus macrorhyncha) and Blakelys Red Gum (Eucalyptus blakelyi) occasionally with Long-leaved Box (Eucalyptus goniocalyx) with a herbaceous ground cover. Shrubs are sparse with some dense patches and include Acacia dealbata and Leptospermum continental. The ground cover is dense and includes the grass Microlaena stipoides var. stipoides, forbs such as Acaena novae-zelandiae, Hydrocotyle laxiflora, Dichopogon strictus, Hypericum gramineum, Ranunculus lappaceus,Senecio lautus subsp. dissectifolius and Viola betonicifolia and sedges sucha s Carex appressa along with the rush Juncus remotiflorus. Occurs on yellow to brown podzolic moist soils derived from ademellite lithology in broad, gently sloping drainage lines in the Murraguldrie region in the southern part of the NSW South-western Slopes Bioregion. Restricted in extent. Sampled in one flora reserve as of 2007.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 128, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) partially contains", "status": "CE"},
                                        {"id": 129, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 286,
                                    "name": "Red Box - Blakelys Red Gum sedge woodland on colluvial clay drainage lines in the NSW South Western Slopes Bioregion",
                                    "description": "Tall woodland dominated by Red Box (Eucalyptus polyanthemos subsp. polyanthemos) often with Blakelys Red Gum (Eucalyptus blakelyi) and occasionally White Box (Eucalyptus albens) or Red Stringybark (Eucalyptus macrorhyncha) with a very sparse shrub layer (or it may be absent) and a dense ground cover that contains a high cover of sedges. Ground cover species includes: the rush Juncus subsecundus, the sedges Schoenus apogon, Carex appressa and Carex breviculmis, the mat-rush Lomandra cylindrica, the grasses Microlaena stipoides var. stipoides and Poa labillardierei var. labillardierei and the forbs Hydrocotyle laxiflora, Leptorhynchos squamatus subsp. A, Senecio lautus subsp. dissectifolius, Senecio prenanthoides, Dichopogon strictus, Tricoryne elatior and Dichondra repens. Occurs on deep clay soils derived from colluvium, conglomerate and other sedimentary rocks in flat areas along drainage lines. Restricted in extent and apparently confined to the southern part of the NSW South-western Slopes Bioregion including in Benandra National Park north of Albury. A sub-type of the more common Red Box - White Box woodland (ID268) that is common on adjoining hillslopes.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 130, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 131, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 301,
                                    "name": "Drooping Sheoke - Ricinocarpus bowmannii - grasstree tall open shrubland of the Coolac - Tumut Serpentinite Belt",
                                    "description": "A floristically and structurally distinct tall open heath or low sparse woodland dominated by the tall shrub/small tree Drooping Sheoke (Allocasuarina verticillata), the shrub Ricinocarpus bowmannii, the grasstree Xanthorrhoea glauca subsp. angustifolia and wattle shrubs such as Hickory (Acacia implexa), Western Golden Wattle (Acacia decora), Acacia penninervis var. penninervis, Native Cherry (Exocarpos cupressiformis) and the relatively rare Spyridium parvifolium. Taller trees are scattered and include Nortons Box (Eucalyptus nortonii), White Box (Eucalyptus albens) with occasional Kurrajong (Brachychiton populneus subsp. populneus). Rocks over about 50% of the ground. The plant species ground cover is sparse on exposed slopes and dense in creeklines. Ground cover species includes grasses such as Themeda australis, Aristida ramosa var. ramosa, Austrodanthonia laevis, Bothriochloa macra, Poa sieberiana var. sieberiana, Panicum effusum and Austrostipa scabra subsp. falcata; the climber Clematis microphylla var. leptophylla is very common; forb species include Stellaria pungens, Hypericum gramineum, Euchiton gymnocephalus, Acaena novae-zelandiae, Geranium solanderi var. solanderi, Oxalis exilis, Senecio quadridentatus and an eastern occurrence of the semi-arid forb Ptilotus spathulatus; the rock fern Cheilanthes sieberi subsp. sieberii is common. Weeds may be common in heavily grazed locations. They include Saffron Thistle (Carthamus lanatus), St Johns Wort (Hypericum perforatum), wild oat (Avena barbata), Petrorhagia nanteuilii, Briza maxima, Hypochaeris radicata and, in gullies, Blackberry (Rubus discolor). The endangered shrub Grevillea wilkinsonii may have been widespread in this community but has been grazed out. Occurs on shallow dark brown clays being euchrozem or red podzolic soils derived from in a 50 kilometre narrow band of serpentinite and associated substrates between Coolac - Gundagai and Tumut in the NSW South-western Slopes Bioregion. A small area may also occur near Talbingo in the South Easter Highlands Bioregion. The vegetation is structurally and floristically distinct from the surrounding Eucalyptus-dominated grassy box woodlands that occur on non-serpentinite substrates. Restricted in area and mostly cleared, with most areas grazed by sheep. As of 2007, this community was not sampled in any protected area.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 316,
                                    "name": "Nortons Box - Red Box - Red Stringybark +/- Nodding Flax Lily forb-grass open forest mainly on the Tumut region",
                                    "description": "Mid-high open forest to woodland dominated by Nortons Box (Eucalyptus nortonii), Red Box (Eucalyptus polyanthemos subsp. polyanthemos) and Red Stringybark (Eucalyptus macrorhyncha) with patches of Callitris endlicheri or more exposed sites. Scattered Kurrajong (Brachychiton populneus subsp. populneus) may be present. The shrub layer is very sparse and includes Acacia buxifolia subsp. buxifolia, Brachyloma daphnoides subsp. daphnoides, Acacia verniciflua, Acacia implexa, Acacia gunnii, Hibbertia obtusifolia and Dodonaea viscosa subsp. cuneata. The ground cover is dense contain a rich composition of forbs and grasses although it may be weedy in places. Grasses include Poa sieberiana sens lat., Austrodanthonia racemosa var. racemosa, Dichelachne sieberiana and Elymus scaber var. scaber. Forbs include Noddling Flax Lily (Stypandra glauca) which is very common along with Poranthera microphylla. Bulbine bulbosa, Euchiton gymnocephalus. Daucus glochidiatus sens lat., Cynoglossum australe, Wahlenbergia spp., Oxalis perennans, Hydrocotyle laxiflora, Glycine clandestina, Dichondra repens, Microtis unifolia, Stellaria pungens, Hypericum gramineum, Geranium retrorsum, Gonocarpus tetragynus, Cymbonotus preissianus and Senecio spp. The rock fern Cheilanthes austrotenuifolia is common. The sedge Carex breviculmis and rush Luzula densiflora are often present along with mat-rushes Lomandra filiformis subsp. filiformis and Lomandra filiformis subsp. coriacea occur. The climber Glycine clandestina is common. Occurs on shallow sandy loam soils derived from granite on steep hillslopes and hillcrests in hill landform patterns on the Minjary Range and surrounding region north of Tumut in the upper slope sub-region of the NSW South-western Slopes Bioregion. Cleared over much of its distribution but sampled in Minjary National Park.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 326,
                                    "name": "Long-leaved Box - Red Box grass-shrub open forest on hillslopes in the Mudgee Region, NSW central western slopes",
                                    "description": "Mid-high to tall open forest dominated by Long-leaved Box (Eucalyptus goniocalyx) and Red Box (Eucalyptus polyanthemos). White Box (Eucalyptus albens) or Red Stringybark (Eucalyptus macrorhyncha) may also be present. Shrubs are very sparse and include Olearia elliptica subsp. Elliptica, Podolobium ilicifolium, Pultenaea cinerascens, Indigofera australis and Persoonia linearis. The ground cover is mid-dense to sparse and includes grass species such as Austrodanthonia fulva, Austrodanthonia racemosa var. racemosa, Joycea pallida, Poa sieberiana and Dichelachne rara. Lomandra spp may be common. Forb species include Goodenia rotundifolia, Hydrocotyle laxiflora, Stellaria pungens, Pomax umbellata and Poranthera microphylla. The climbers Hardenbergia violacea and Glycine tabacina are often present. Occurs on shallow, well drained red or brown podzolic clay soils derived from shale or siltstone on mid-hillslopes in hill landscapes in the Mudgee region of the northern part of the NSW South-western Slopes Bioregion. Mostly cleared outside reserves.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 337,
                                    "name": "Apple Box - Silver Banksia - Drooping Sheoak open woodland - tall shrubland in protected gullies of the Coolac - Tumut serpentinite belt, NSW South Western Slopes Bioregion.",
                                    "description": "Tall open heath or sparse woodland with scattered trees such as Eucalyptus bridgesiana, Eucalyptus melliodora or Eucalyptus nortonii with a mid-dense tall shrub layer containing shrubs such as Banksia marginata, Allocasuarina verticillata, Dodonaea viscosa subsp. spatulata, Bursaria spinosa subsp. lasiophylla, Leptospermum brevipes, Abutilon oxycarpum, Acacia decora, Ricinocarpos bowmanii and Exocarpos cupressiformis. The ground cover is dense to mid-dense with the sedte Carex appressa and the tussock grass Poa labillardierei var. labillardierei common along creeks and forbs such as Acaena novae-zelandiae, Ranunculus lappaceus, Rumex brownii, Geranium solanderi var. solanderi, Hypericum gramineum, Viola betonicifolia and Epilobium billardiereanum subsp. cinereum on flats and lower slopes. Bracken Fern (Pteridium esculentum) may be abundant along with the climber Clematis microphylla var. leptophylla. Weeds are common including St Johns Wort (Hypericum perforatum), Saffron Thistle (Carthamus lanatu) and Blackberry along creeks. Occurs on dark brown clay euchrozem soil derived from colluvial or on alluvial soils on serpentinite substrate, on lower colluvial slopes, incised drainage lines, gullies and on valley flats on the Coolac to Tumut serpentinite belt. A very rare and endangered community with the best known site at Brungle Gap on the Tumut to Wee Jasper Road north east of Tumut. Banksia marginata was probably more widespread but has been grazed out with very little remaining on the south western slopes generally.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 347,
                                    "name": "White Box - Blakelys Red Gum shrub/grass woodland on metamorphic hillslopes in the mid-southern part of the upper slopes sub-region of the NSW South Western Slopes Bioregion",
                                    "description": "Mid-high to tall woodland or open forest dominated White Box (Eucalyptus albens), Blakelys Red Gum (Eucalyptus blakelyi) with Red Stringybark (Eucalyptus macrorhyncha) and occasionally Mugga Ironbark (Eucalyptus sideroxylon). The shrub layer may be sparse to mid-dense in less grazed sites but absent or very sparse in heavily grazed areas. It includes Cassinia aculeata, Hibbertia obtusifolia, Hibbertia riparia, Dillwynia sericea, Daviesia leptophylla, Acrotriche serrulata, Brachyloma daphnoides subsp. daphnoides, Platylobium formosum subsp. formosum, Pultenaea foliolosa, Melichrus urceolatus, Acacia buxifolia subsp. buxifolia, Acacia dealbata, Acacia gunnii, Acacia implexa and Acacia paradoxa. The ground cover is usually sparse and includes the grasses Austrodanthonia eriantha, Austrodanthonia racemosa var. racemosa, Poa sieberiana var. sieberiana and Austrostipa densiflora.along with the mat-rushes Lomandra filiformis subsp. filiformis and Lomandra multiflora subsp. multiflora. Forb species include Hydrocotyle laxiflora, Xerochrysum viscosa, Senecio quadridentatus, Hypericum gramineum, Goodenia hederacea subsp. hederacea, Gonocarpus tetragynus, Cheiranthera cyanea var. cyanea, Opercularia aspera, Dianella revoluta var. revoluta and Stypandra glauca. The rock fern Cheilanthes sieberi subsp. sieberi may be present. Occurs on shallow, often stony clay loam soils mainly derived from fine-grained metamorphic rocks on hillslopes and gullies in hill landscape patterns in the central part of the upper slopes sub-region of the NSW South-western Slopes Bioregion, generally north of the Murray CMA area. Mostly cleared and therefore a threatened community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 136, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 137, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 383,
                                    "name": "Apple Box - Rough-barked Apple terrace flats woodland of the southern Brigalow Belt South Bioregion",
                                    "description": "Tall woodland or open forest containing Apple Box (Eucalyptus bridgesiana) with Rough-barked Apple (Angophora floribunda) and occasionally Kurrajong (Brachychiton populneus subsp. populneus). Shrubs are sparse and include Acacia implexa, Hibbertia obtusifolia, Melicytus dentatus, Hovea lanceolata, Olearia elliptica subsp. elliptica and Rubus parvifolius. The ground cover is dense to mid-dense containing grasses, forbs and sedges. Grass species include Microlaena stipoides var. stipoides, Poa sieberiana, Aristida vagans, Austrodanthonia racemosa var. racemosa and Echinopogon caespitosa and Echinopogon nutans. Forb species include Geranium solanderi var. solanderi, Dichondra repens, Hydrocotyle laxiflora, Rumex brownii, Scutellaria humilis, Cynoglossum suaveolens, Swainsona galegifolia, Acaena novae-zelandiae and Dianella longifolia var. longifolia. The climber Clematis glycinoides var. glycinoides may be common along with the sedge Carex incomitata and the rush Juncus vaginatus. Occurs on loam soil derived from basalt or trachyte on terrace flats in hills and mountains including in the Warrumbungle NP and Coolah Tops regions of the Brigalow Belt South Bioregion. Limited in extent, often cleared with a high degree of weediness in some locations.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 395,
                                    "name": "Derived speargrass - wallaby grass - wire grass mixed forb grassland mainly in the Coonabarabran - Pilliga - Coolah region",
                                    "description": "Mid-high to tall grassland or open grassland derived from the clearing of grassy woodlands. Original tree species may have included Callitris glaucophylla, Atalaya hemiglauca, Alstonia constricta, Geijera parviflora, Alectryon oleifolius subsp. canescens or Eucalyptus albens. Re-generating shrub species include Notelaea microcarpa var. microcarpa, Dodonaea viscosa subsp. angustifolia, Acacia salicina, Acacia deanei subsp. deanei, Acacia decora and Senna aciphylla. The ground cover is dense to mid-dense or sparse in dry times. It is dominated by a range of grass and forb species including a high number of exotic species. Native grasses include Austrostipa scabra, Austrostipa verticillata, Dichanthium sericeum subsp. sericeum, Austrodanthonia racemosa, Austrodanthonia bipartita, Austrodanthonia caespitosa, Aristida caput-medusae, Chloris truncata, Sporobolus elongatus, Bothriochloa decipiens, Themeda australis, Enteropogon acicularis and Aristida vagans. Native forb species include Calotis lappulacea, Vittadinia dissecta, Wahlenbergia stricta subsp. stricta, Einadia hastata, Xerochrysum bracteata, Sida corrugata, Cheilanthes sieberi subsp. sieberi, Rumex brownii, Podolepis neglecta, Carex inversa, Cymbopogon refractus, Panicum queenslandicum var. queenslandicum, Austrodanthonia racemosa var. obtusata, Vittadinia cuneata, Vittadinia muelleri, Cymbonotus lawsonianus, Hydrocotyle laxiflora and Cynoglossum australe. Occurs on a range of soils including clay to sandy loams on a ange of landscapes including hills, low hills, rises and outwash plains across a large geographical area from the Pilliga Scrub and Warrumbungle Range region in the north to Coolah in the south where woodland has been cleared for grazing. While being a derived vegetation type, this community may contain threatened species and form a native ground cover matrix between bushland areas.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 139, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 140, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) partially contains", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 421,
                                    "name": "Yellow Box - White Cypress Pine alluvial terrace flats grassy woodland in the Pilliga forests and surrounds, Brigalow Belt South Bioregion",
                                    "description": "Tall woodland dominated by Yellow Box with White Cypress Pine and sometimes Angophora floribunda. Shrubs are very sparse and include Maireana microphylla, Acacia deanei subsp. paucijuga, Cassinia arcuata, Geijera parviflora, Solanum ferocissimum and Bursaria spinosa subsp. spinosa. The ground cover is also sparse often containing large areas of bare ground or leaf litter. Grass species include Austrostipa scabra subsp. scabra, Aristida ramosa and Austrodanthonia bipartita. Forb species include Vittadinia dissecta var. hirta, Sida corrugata, Swainsona galegifolia, Geranium solanderi, Crinum flaccidum, Wahlenbergia gracilis, Brunoniella australis, Boerhavia dominii, Oxalis perennans, Senecio quadridentatus and Chenopodium pumilio. Occurs on brown clay loam to light clay alluvial soils on terrace flats above creeks and rivers in hill and low hill landscapes mainly between Moree and Dubbb in the BBS Bioregion with areas in the Pilliga forests. Restricted to small areas and mostly cleared on private land. Part of the box-gum grassy woodland EEC.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 141, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 142, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 426,
                                    "name": "Red Box - White Box +/- Red Stringybark hill woodland in the NSW South Western Slopes Bioregion",
                                    "description": "Tall to mid-high woodland dominated by Red Box (Eucalyptus polyanthemos subsp. polyanthemos) often with White Box (Eucalyptus albens), Kurrajong (Brachychiton populneus subsp. populneus) or Red Stringybark (Eucalyptus macrorhyncha). Mugga Ironbark may be present. The mistletoe Amyema miquelii is often abundant. The shrub layer is sparse to very sparse and includes species such as Acacia implexa, Lissanthe strigosa subsp. strigosa, Hibbertia obtusifolia or Dillwynia sericea. The ground is often bare or mostly covered with litter. Grass species include Austrostipa scabra subsp. falcata, Aristida personata, Austrostipa densiflora, Austrodanthonia racemosa var. racemosa, Themeda australis and Microlaena stipoides var. stipoides. The sedge Carex inversa may be present along with species of Juncus. Forb species include Daucus glochidiatus, Goodenia hederacea subsp. hederacea, Einadia polygonoides, Euchiton sphaericus, Lagenifera stipitata, Oxalis radicosa, Rumex brownii and Veronica plebeia. Occurs on shallow loam to clay soils often derived from shale or phyllite substrates on hills from north of Wellington in the north to around Cootamundra in the south in the NSW South-western Slopes Bioregion. Most of the original extent has been cleared, remnants are moslty in poor condition and subject to heavy stock grazing. Overall, this community is critically endangered with few if any examples in protected areas as of 2009.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 433,
                                    "name": "White Box grassy woodland to open woodland on basalt flats and rises in the Liverpool Plains sub-region, BBS Bioregion",
                                    "description": "Tall to mid-high open woodland or woodland with trees dominated by White Box (Eucalyptus albens) occasionally with Kurrajong (Brachychiton populneus subsp. populneus) or the small tree Weeping Myall (Acacia pendula). Shrubs are absent or very sparse and include Acacia implexa, Sclerolaena birchii or Sclerolaena muricata var. muricata. The ground cover is dense with good sites containing a rich array of grasses and forbs - many of which also occur in the Liverpool Plains grasslands community (ID102). Grass species include Austrostipa aristiglumis, Austrodanthonia bipartita, Dichanthium sericeum subsp. sericeum, Themeda avenacea, Austrostipa bigeniculata, Enteropogon acicularis, Chloris ventricosa, Bothriochloa decipiens, Bothriochloa macra, Elymus scaber and Panicum buncei. Sedges include Carex inversa and Cyperus bifax. Forb species include Mentha satureioides, Boerhavia dominii, Asperula conferta, Plantago debilis, Dichondra repens, Rumex brownii, Chamaesyce drummondii, Eremophila debilis, Oxalis perennans, Euchiton sphaericus, Wahlenbergia communis, Vittadinia pterochaeta, Goodenia fascicularis, Sida corrugata, Einadia nutans subsp. nutans and Cullen tenax. Ground scramblers include Convolvulus graminetinus and Rhynchosia minima. Occurs on black earth to chocolate loam to clay soils that are often cracking, derived from basalt, on flats or low slopes in plains or low hill landform patterns predominantly in the Liverpool Plains IBRA sub-region from Boggabri in the north to Willow Tree in the south and Garawilla in the west. Occurs on slightly sloping land or flats on the edge of the original treeless plains. Grades into other White Box woodlands upslope on hillslopes such as grassy White Box hills woodland (ID434) or the White Box - White Cypress Pine woodland (ID435). Grades into and contains a similar ground cover floristic composition to ID102 Liverpool Plains grasslands and ID101 Poplar Box grassy woodland. Mostly cleared and cropped. A critically endangered plant community and NSW and Federally listed as part of the Grassy Box-Gum Woodland EEC.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 144, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 145, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 434,
                                    "name": "White Box grass shrub hill woodland on clay to loam soils on volcanic and sedimentary hills in the southern Brigalow Belt South Bioregion",
                                    "description": "Tall to mid-high woodland to open woodland dominated by White Box (Eucalyptus albens) often with Kurrajong (Brachychiton populneus subsp. populneus). The shrub layer is very sparse to sparse and includes Acacia implexa, Notelaea microcarpa var. microcarpa, Acacia decora, Cassinia quinquefaria and Pimelea curviflora var. curviflora. The ground cover is dense to mid-dense and dominated by grasses and forbs. Grass species include Poa sieberiana, Aristida personata, Austrodanthonia racemosa var. racemosa, Bothriochloa macra, Austrostipa scabra subsp. scabra, Dichanthium sericeum subsp. sericeum, Microlaena stipoides var. stipoides, Elymus scaber var. scaber and Cymbopogon refractus. Forb species include Dichondra repens, Cymbonotus lawsonianus, Boerhavia dominii, Senecio quadridentatus, Sida corrugata, Einadia nutans subsp. nutans, Swainsona cadellii, Rostellularia adscendens, Oxalis perennans, Wahlenbergia communis, Scutellaria humilis, Hypericum gramineum, Mentha satureioides, Veronica plebeia and Vittadinia muelleri. Sedges include Carex inversa and Cyperus graciils. Occurs on red to chocolate clay to loam, often duplex, soils derived from basalt, fine grained metamorphic or sedimentary substrates on hillslopes, hillcrests and footslopes in low hill and hill landform patterns in the southern half of the Brigalow Belt South Bioregion in NSW. Mostly cleared for grazing and cropping and part of the listed EEC box-gum woodland.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 146, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 147, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 436,
                                    "name": "Derived Kurrajong grassy open woodland / isolated trees in the Brigalow Belt South Bioregion and Nandewar Bioregion",
                                    "description": "Mid-high isolated trees to open woodland dominated by Kurrajong. Other trees include White Box (Eucalyptus albens) and White Cypress Pine (Callitris glaucophylla). Shrubs are generally absent due to clearing but the mistletoe Notothixos cornifolius is often growing on Kurrajong trees. The ground cover is usually dense due to absence of tree cover and loam to clay soils. Grasses include Austrodanthonia racemosa var. racemosa, Aristida personata, Bothriochloa decipiens, Austrostipa verticillata, Austrostipa scabra subsp. scabra and Elymus scaber var. scaber. Forbs include  Rumex brownii, Crassula sieberiana subsp. sieberiana, Daucus glochidiatus, Dichondra repens, Asperula conferta, Senecio quadridentatus, Cymbonotus lawsonianus, Geranium solanderi var. solanderi, Hydrocotyle laxiflora, Oxalis perennans, Sida corrugata, Solanum cinereum, Vittadinia muelleri and Urtica incisa. Scramblers include Glycine tabacina and Desmodium varians. Weeds are often abundant and may dominate some sites. Occurs on clayer soils often derived from basalt but also fine-grained sedimentary or metamorphic substrates on hillslopes and hillcrests in low hill and hills landform patterns in the Brigalow Belt South Bioregion and Nandewar Bioregions common between Gunnedah to Coolah. A derived community where the vegetation has been cleared leaving Kurrajong as paddock trees. The palatable leaves on this tree are often lopped during drought to feed domestic stock. Mainly derived from grassy White Box woodland (ID434) or White Cypress Pine - White Box woodland (ID435). While not a conservation priority, this community may form a partial natural matrix linking bushland remnants.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 148, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 149, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) partially contains", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 437,
                                    "name": "Yellow Box grassy woodland on lower hillslopes and valley flats in the southern NSW Brigalow Belt South Bioregion",
                                    "description": "Tall woodland dominated by Yellow Box (Eucalyptus melliodora) sometimes with Angophora floribunda or Brachychiton populneus. Shrubs are absent or very sparse and include Acacia implexa, Pimelia curviflora, Solanum cinereum, Acacia caesiella or Acacia decora. The ground cover is often dense and dominated by grasses and forbs. Grass species include Bothriochloa decipiens, Aristida personata, Austrostipa verticillata, Dichelachne micrantha, Aristida vagans, Poa sieberiana, Elymus scaber var. scaber, Austrostipa scabra subsp. scabra and Austrostipa aristiglumis. The sedge Cyperus fulvus may occur. Forb species inlcude Einadia trigonos, Rumex brownii, Cymbonotus lawsonianus, Dichondra sp. A, Einadia nutans subsp. nutans, Oxalis perennans, Hydrocotyle laxiflora, Tribulus micrococcus, Euchiton sphaericus, Vittadinia cervicus, Calotis lappulacea and Sida corrugata. The sedge Carex inversa and the climbers Glycine clandestina, Rhynchosia minima, Glycine latifolia, Glycine tabacina and Convolvulus graminetinus may be present. Occurs on clay loam to light clay soils on valley flats, plains and hillslopes mainly in the southern half of the NSW Brigalow Belt South Bioregion grading into the floristically similar Blakelys Red gum - Yellow Box woodland (ID599) on the Liverpool Plains or in the upper Hunter into Grey Box - White Box grassy woodland (ID483). Exotic weed species dominates many sites and represent over 30% of the species and ground cover present. Part of the grassy box woodland EEC.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 150, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 151, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) is", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 441,
                                    "name": "Carbeen - White Box +/- Silver-leaved Ironbark grassy tall woodland on basalt hills, Brigalow Belt South Bioregion",
                                    "description": "Tall woodland to open woodland dominated by Carbeen (Corymbia tessellaris) often with White Box (Eucalyptus albens) or Silver-leaved Ironbark (Eucalyptus melanophloia). The shrub layer is absent or very sparse and includes Acacia implexa, Acacia salicina, Pimelea neo-anglica, Desmodium brachpodium, Alectryon oleifolius with the vine Parsonsia eucalyptophylla. The ground cover is mid-dense or sparse and includes grasses such as Aristida leptopoda, Elymus scaber, Themeda australis, Bothriochloa decipiens, Panicum decompositum, Dichanthium sericeum subsp. sericeum and Cymbopogon refractus. Forb species inlcude Sida subspicata, Wahlenbergia communis, Asperula conferta, Chrysocephalum apiculatum, Calotis lappulacea, Bulbine semibarbata, Boerhavia dominii, Eremophila debilis and Glossocardia bidens. Ground scramblers include Desmodium varians, Glycine tabicina and Glycine stenophita. Occurs on brown to black earth soil derived from basalt on hillslopes and flats in low hills and hills landform patterns mainly in the Northern Basalts sub-region of the Brigalow Belt South Bioregion including east of Bellata and between Yetman and Warialda. A highly restricted and threatened plant community that is mostly cleared with the ground cover threatened by Coolatai Grass (Hyparrhenia hirta) in some locations. Possibly partly a grassy community due to clearing of previous shrubs and grades into SEVT type (ID442) on some basalt hills.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 152, "name": " Carbeen Open Forest community in the Darling Riverine Plains and Brigalow Belt South Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 444,
                                    "name": "Silver-leaved Ironbark grassy tall woodland on clay-loam soils on plains in the Brigalow Belt South Bioregion",
                                    "description": "Tall to mid-high woodland dominated by Silver-leaved Ironbark (Eucalyptus melanophloia) sometimes with Kurrajong (Brachychiton populneus) or Rough-barked Apple (Angophora floribunda). A shrub layer is absent of if present very sparse including Geijera parviflora and Indigofera australis. The ground cover may be dense after rain or mid-dense to sparse in dry times. Grass species include Austrodanthonia bipartita, Enteropogon acicularis, Sporobolus creber, Enneapogon nigricans, Astrebla elymoides, Austrostipa scabra and Chloris truncata. Forb species include Dichondra repens, Cymbonotus lawsonianus, Rumex brownii, Brunoniella australis, Calotis lappulacea, Solanum esuriale, Plantago debilis, Wahlenbergia spp and Swainsona galegifolia. Occurs on deep brown to black clay loam to light clay soils on alluvial or valley flats. The soil may be derived from basalt. Retricted in extent in NSW mostly in the Warialda to Moree and Mullaley regions of the Brigalow Belt South Bioregion. Mainly cleared and an endangered plant community.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 451,
                                    "name": "Derived Spear Grass - Slender Bamboo Grass mixed tussock grassland mainly of the northern Brigalow Belt South Bioregion and Nandewar Bioregion",
                                    "description": "Mid-high derived grassland dominated by spear grass Austrostipa scabra subsp. scabra and/or Slender Bamboo Grass (Austrostipa verticillata). Other grasses include Bothriochloa decipiens, Aristida personata, Sporobolus elongatus, Sporobolus creber, Sporobolus caroli, Elymus scaber var. scaber, Microlaena stipoides var. stipoides, Poa sieberiana, Eriochloa pseudoacrotricha and Cymbopogon refractus. Sedges include Cyperus gracilis and Carex inversa and the rush Juncus usitatus may be present. Forbs include Oxalis perennans, Cymbonotus lawsonianus, Dichondra sp. A, Daucus glochidiatus, Geranium solanderi var. solanderi, Euchiton sphaericus, Sida corrugata, Panicum queenslandicum var. queenslandicum, Mentha diemenica, Calotis lappulacea and Vittadinia muelleri. Shrubs include Pimelea neo-anglica and Sclerolaena birchii. Original tree specis include Callitris glaucophylla, Eucalyptus crebra, Eucalyptus albens and Eucalyptus melanophloia and some may be present. Occurs on well-drained sandy soils on hillslopes, footslopes, valley flats or terrace flats. Many areas are weed infested and the sowing of exotic pasture species and cropping is expanding into the community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 154, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 155, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) partially contains", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 461,
                                    "name": "Tumbledown Gum woodland on hills in the northern NSW South Western Slopes Bioregion and southern Brigalow Belt South Bioregion",
                                    "description": "Mid-high to low open woodland to woodland dominated by Tumbledown Gum (Eucalyptus dealbata) often with no other tree species. Other trees that may be present include Kurrajong (Brachychiton populneus subsp. populneus), White Box (Eucalyptus albens), Callitris endlicheri, Eucalyptus macrorhyncha and Eucalyptus sideroxylon. The shrub layer is very sparse or absent. Tall shrubs include Acacia implexa and Allocasuarina verticillata. Low shrubs include Acacia decora, Xanthorrhoea glauca subsp. angustifolia, Hibbertia obtusifolia, Calytrix tetragona, Brachyloma daphnoides, Pultenaea spinosa and Harmogia densifolia. The ground cover is mainly composed of bare earth or stones with the vegetation cover very sparse to sparse depending on rainfall. Grass species include Austrostipa scabra subsp. scabra, Austrodanthonia racemosa var. racemosa, Aristida personata, Aristida vagans, Poa sieberiana, Bothriochloa macra, Elymus scaber var. scaber and Panicum effusum. Forb species include Daucus glochidiatus, Stypandra glauca, Dichondra sp. A, Einadia nutans subsp. nutans, Oxalis radicosa, Chamaesyce drummondii and Cymbonotus lawsonianus. The rock ferns Cheilanthese sieberi and Cheilanthes distans are common as it the scrambler Desmodium varians. Occurs on shallow to stony brown to red sandy loam to light clay soils derived from metasediments or granite on hillslopes, hillcrests and gullies in rises, low hills and hills landform patterns mainly in the Gulgong - Dunedoo - Goolma - Tanner Springs region in the NSW South-western Slopes Bioregion with minor outliers to the north at the southern edge of the Brigalow Belt South Bioregion. Probably also in Capertee Valley south of Mudgee. Mostly cleared and overgrazed with some pasture weed infestation. A poorly protected and threatened community.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 464,
                                    "name": "Red Stringybark - Kurrajong - mixed eucalypt grassy open forest of the Coonabarabran - Gulgong region in the Brigalow Belt South and NSW SWS Bioregion",
                                    "description": "Mid-high to tall open forest dominated by Red Stringybark (Eucalyptus macrorhyncha) with Kurrajong (Brachychiton populneus subsp. populneus). Other trees may include Corymbia trachyphloia subsp. amphistomatica, Eucalyptus albens, Eucalyptus blakelyi and Eucalyptus melliodora. The shrub layer is very sparse with species including Cassinia quinquefaria, Acacia implexa, Allocasuarina verticillata, Hibbertia obtusifolia, Indigofera australis, Xanthorrhoea johnsonii, Cassinia arcuata, Pultenaea microphylla, Lissanthe strigosa subsp. strigosa, Exocarpos cupressiformis, Indigofera adesmiifolia and Melichrus urceolatus. The ground cover is mid-dense or dense after rain and rich in forbs and grasses. Grass species include Joycea pallida, Austrodanthonia racemosa var. obtusata, Microlaena stipoides var. stipoides, Austrostipa scabra subsp. scabra, Aristida personata, Echinopogon caespitosus var. caespitosus, Panicum effusum, Paspalidium gracile and Poa sieberiana. The mat-rushes Lomandra multiflora subsp. multiflora and Lomandra filiforms are abundant. Forb species include Stypandra glauca, Oxalis radicosa, Hypericum gramineum, Solenogyne bellioides, Calotis lappulacea, Hydrocotyle laxiflora, Glossocardia bidens, Vittadinia cuneata and Einadia nutans. Occurs on brown sandy loam or sandy clay loam soils derived from sandstone, siltstone, granite and shale on hillcrests and hillslopes in hill and low hill landscape patterns in the Coonabarabran - Garawilla region in the BBS Bioregion and in the Gulgong region in the NSW SWS Bioregion. Partly cleared. Distinctly grassy Red Stringybark forest compared to the more shrubby ID379.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 483,
                                    "name": "Grey Box x White Box grassy open woodland on basalt hills in the Merriwa region, upper Hunter Valley",
                                    "description": "Mid-high to tall open woodland or woodland dominated by a Grey Box (Eucalyptus moluccana) x White Box (Eucalyptus albens) hybrid forming an Eucalyptus albens <-> moluccana intermediate taxon. The trees tend to be closer to Grey Box than White Box over most of this region. Few other tree species occur with Rough-barked Apple (Angophora floribunda) and Yellow Box (Eucalyptus melliodora) occurring on footslopes and valley flats. Shrubs are absent or very sparse and include Sclerolaena muricata, Sida trichopoda and Pimelea curviflora var. curviflora. The ground cover is dense after rain but mid-dense to sparse in dry times. Grass species include Austrostipa bigeniculata, Bothriochloa macra, Austrostipa aristiglumis, Elymus scaber var. scaber, Cynodon dactylon and Panicum queenslandicum var. queenslandicum. The sedge Cyperus gracilis may be present. Forb species include Boerhavia dominii, Oxalis perennans, Chamaesyce drummondii, Hibiscus trionum, Einadia nutans subsp. nutans, Asperula conferta, Rumex brownii, Mentha diemenica, Geranium solanderi var. solanderi and Calotis lappulacea. Occurs on brown to black earth, chocolate loam to clay soils derived from basalt on hillslopes, hillcrests, footslopes and valley flats on rolling hills and low hills on the Merriwa Plain and lower southern slopes of the Liverpool Range in the upper Hunter Valley in the far south-eastern corner of the Brigalow Belt South Bioregion. Mainly cleared. Listed as part of the grassy box-gum woodland EEC in both the EPBC and NSW TSC Acts. Threatened by fragmentation, weed invasion, tree dieback and intensive agricultural development of ground cover. Very poorly or not represented in protected areas as of 2009.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 158, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 159, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 509,
                                    "name": "Blakelys Red Gum - White Cypress Pine - Rough-barked Apple grassy open forest of drainage lines of the northern Nandewar Bioregion and New England Tableland Bioregion",
                                    "description": "Tall to very tall open forest or woodland, mainly confined to granite substrate, at intermediate altitudes north from the Bundarra district. BlakelyÃ¯Â¿Â½s Red Gum (Eucalyptus blakelyi), White Cypress Pine (Callitris glaucophylla) and Rough-barked Apple (Angophora floribunda) compose the dominant canopy species. Black Cypress Pine (Callitris endlicheri) may be present. A shrub layer is sometimes present, with Leptospermum brevipes and Hakea microcarpa along with other Leptospermum and Leucopogon species and Hibbertia riparia. The ground layer is dominated by Arundinella nepalensis at most sites. Other common groundcover species include Microlaena stipoides var. stipoides, Cheilanthes sieberi subsp. sieberi and Cymbopogon refractus. Other less frequent groundcover species include Aristida ramosa, Imperata cylindrica var. major, Dichondra sp. A, Eragrostis leptostachya, Glycine tabacina, Carex inversa, Bothriochloa macra, Echinopogon caespitosus var. caespitosus, Epilobium billardiereanum subsp. cinereum and Euchiton involucratus. This association represents part of the TSC Act and EPBC Act listed Box-Gum Grassy Woodland TEC.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 158, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 159, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 511,
                                    "name": "Queensland Bluegrass - Redleg Grass - Rats Tail Grass - spear grass - panic grass derived grassland of the Nandewar Bioregion and Brigalow Belt South Bioregion",
                                    "description": "Derived tussock grassland dominated by Queensland Bluegrass (Dichanthium sericeum subsp. sericeum), Queensland Panic (Panicum queenslandicum), Redleg Grass (Bothriochloa decipiens or Bothriochloa macra), Rats-tail Grass (Sporobolus creber) and spear grasses (Austrostipa scabra) with other grass species including Aristida ramosa, Aristida personata, Chloris truncata, Cymbopogon refractus, Enneapogon gracilis, Eragrostis elongata and Aristida caput-medusae. Sedges include Carex inversa and Cyperus gracilis. Forb species include Einadia nutans, Dichondra repens, Hypericum gramineum, Vittadinia muelleri, Oxalis perennans, Cymbonotus lawsonianus, Mentha diementica, Rumex brownii, Asperula conferta, Euchiton sphaericus and Geranium solanderi. Climbers include Desmodium varians, Convolvulus sp., Glycine clandestina and Glycine tabacina. Shrubs are absent or very sparse and include Maireana microphylla, Pimelea neo-anglica and Sclerolaena birchii. Occurs on loam to clay soils derived from mainly fine grained sedimentary and metamorphic substrates on flats or undulating hills mainly in the Nandewar Bioregion with some areas in the BBS Bioregion at low to intermediate altitudes between Tamworth and Yetman. The presence of tree species and tree stumps at some sites, and the floristic composition of the ground layer, suggest this unit is an artefact of disturbance and clearing, and much of its predicted range is considered to have once supported woodland communities with tree species including Eucalyptus albens, Callitris glaucophylla, Acacia pendula and Eucalyptus melanophloia. However, small areas of native grassland may have occupied parts of the extent of those grassy woodlands prior to European settlement, particularly on the low elevation northern margins. A mainly derived and broadly classified native grassland containing considerable variation over its range. Some examples represent the derived native grassland component of the EPBC Act Critically Endangered Box-Gum Grassy Woodland ecological community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 162, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 163, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) partially contains", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 516,
                                    "name": "Grey Box grassy woodland or open forest of the Nandewar Bioregion and New England Tableland Bioregion",
                                    "description": "A widespread, mid-high to very tall woodland or open forest occurring on flat to undulating sites at low to mid elevation, mainly on fine-grained soils on sedimentary and metasedimentary substrates. It is dominated by Grey Box (Eucalyptus moluccana) (crossing with Eucalyptus albens at sites with basalt influence) which is associated with Blakely Red Gum (Eucalyptus blakelyi), Yellow Box (Eucalyptus melliodora) and/or White Cypress Pine (Callitris glaucophylla), with occasional Rough-barked Apple (Angophora floribunda). A sparse shrub layer of Notelaea microcarpa var. microcarpa and/or Dodonaea viscosa subsp. spatulata is sometimes present. The ground layer is dense and diverse, containing a mix of grasses and forbs including Cymbopogon refractus, Austrostipa scabra subsp. scabra, Aristida ramosa, Asperula conferta, Bothriochloa decipiens, Daucus glochidiatus, Dichanthium sericeum subsp. sericeum, Carex inversa, Chrysocephalum apiculatum, Cymbonotus lawsonianus, Dichondra sp. A, Glycine tabacina, Poa sieberiana, Desmodium varians, Eremophila debilis, Austrodanthonia racemosa var. obtusata, Austrostipa verticillata, Dichondra repens, Hydrocotyle laxiflora, Plantago debilis, Rostellularia adscendens subsp. adscendens, Chloris ventricosa, Geranium solanderi var. solanderi, Cyperus gracilis, Hypericum gramineum, and (rarely) Panicum paludosum. This community often supports a relatively high number of exotic species - the invasive weed Coolatai Grass (Hyparrhenia hirta) is dominant in some areas. This woodland is structurally and floristically similar to ID589 White Box grassy woodland of the Brigalow Belt South, Nandewar and New England Tablelands Bioregions, with which it adjoins, both communities dominating the undulating floors of the major river valleys of the Nandewar and far western New England bioregions. This is an endangered community with only an estimated 15% of pre-European extent remaining. Most remnants are small, modified through continuing disturbance associated with agricultural activities, and support a high frequency of exotic weed species.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 544,
                                    "name": "Rough-barked Apple - White Cypress Pine - Blakelys Red Gum riparian open forest / woodland of the Nandewar Bioregion and New England Tableland Bioregion",
                                    "description": "Tall open forest to woodland dominated by Rough-barked Apple (Angophora floribunda) in association with Blakely Red Gum (Eucalyptus blakelyi), White Cypress Pine (Callitris glaucophylla) or Yellow Box (Eucalyptus melliodora) or Black Cypress Pine (Callitris endlicheri) or White Box (Eucalyptus albens). The shrub layer is sparse comprising species such as Notelaea microcarpa var. microcarpa, Leptospermum polygalifolium subsp. transmontanum, Olearia elliptica, Leptospermum brevipes, Beyeria viscosa, Cassinia quinquefaria, Dodonaea viscosa subsp. angustifolia, Pimelea neo-anglica, Maineana microphylla and Acacia neriifolia. The ground layer is often dense and is composed of the mat-rush (Lomandra longifolia) and a range of grasses including Microlaena stipoides var. stipoides, Bothriochloa macra, Austrostipa verticillata, Echinipogon caespitosus, Eragrostis leptostachya and blady grass (Imperata cylindrica). Forb species include Dichondra sp. A, Dichondra repens, Plantago debilis, Oxalis perennans, Rostellularia adscendens subsp.adscendens, Swainsona galegifolia, Urtica incisa, Cynoglossum australe and Vittadinia dissecta. Sedges include Cyperus gracilis and Carex inversa. The invasive weed Coolatai grass (Hyparrhenia hirta) occurs at some sites. Occurs on a variety of alluvial or colluvial soils from sand to loamy-clay soil along stream banks and on valley flats throughout the Nandewar and west New England Tablelands Bioregions. Grades into ID84 River Oak Riparian Woodland or ID78 River Red Gum woodland. Similar to the Rough-barked Apple woodland ID281 in the BBS Bioregion. Mainly cleared and often weed infested. A threatened community.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 165, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 166, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 589,
                                    "name": "White Box - White Cypress Pine - Silver-leaved Ironbark grassy woodland on mainly clay loam soils on hills mainly in the Nandewar Bioregion",
                                    "description": "Tall woodland to open forest (with Callitris regrowth) dominated by White Box (Eucalyptus albens) and White Cypress Pine (Callitris glaucophylla) and sometimes with Silver-leaved Ironbark (Eucalyptus melanophloia) or Yellow Box (Eucalyptus melliodora). The shrub layer is sparse and includes Geijera parviflora, Cassinia laevis, Notelaea microcarpa var. microcarpa, Dodonaea viscosa subsp. angustifolia, Beyeria viscosa, Senna form taxon coriacea, Cassinia quinquefaria and Bursaria spinosa subsp. spinosa. The ground layer is dense to mid-dense with a well developed mix of grasses and forbs. Grass species include Austrostipa scabra, Cymbopogon refractus, Dichanthium sericeum subsp. sericeum, Themeda australis, Aristida personata, Austrostipa aristiglumis, Austrodanthonia bipartita, Eragrostis leptostachya and Aristida leptopoda. Forb species inlcude Dichondra species A, Asperula conferta, Brunoniella australis, Calotis lappacea, Cullen tenax, Mentha satureioides along with the sedge Cyperus gracilis and the climber Glycine tabacina. The invasive weed Coolatai grass (Hyparrhenia hirta) is a serious threat to this community and is the dominant groundcover in some areas. Occurs on brown to red sand loam to clay soils derived from fine-grained sedimentary or volcanic substrates on upper hillslopes and hillcrests throughout the Nandewar and north-eastern Briglalow Belt South Bioregions. Mostly cleared.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 167, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 168, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 590,
                                    "name": "White Box grassy woodland on the Inverell basalts mainly in the Nandewar Bioregion",
                                    "description": "Woodland dominated by White Box (Eucalyptus albens) sometimes with Rough-barked Apple (Angophora floribunda), White Cypress Pine (Callitris glaucophylla) and/or Yellow Box (Eucalyptus melliodora). The shrub layer is either sparse or absent and includes Pimelea curviflora, Acacia salicina, Myoporum montanum, Geijera parviflora or Alectryon oleifolius. The ground cover is usually dense being dominated by grasses and forbs. Grass species include Bluegrass (Dichanthium sericeum subsp. sericeum), Aristida leptopoda, Austrodanthonia bipartita, Themeda avenacea, Cymbopogon refractus, Snow Grass (Poa sieberiana), Kangaroo Grass (Themeda australis), Bothriochloa biloba and Panicum queenslandicum var. queenslandicum. Forb species include Hydrocotyle laxiflora, Asperula conferta, Ajuga australis, Plantago debilis, Calotis scapigera, Leptorhynchos elongatus, Brachyscome chrysoglossa, Picris evae, Rumex dumosus and Mentha satureioides. Scramblers include Glycine tabacina and Convolvulus graminetinus. The invasive weed Coolatai grass (Hyparrhenia hirta) is dominant at some sites and poses a major threat to this community, which represents significant areas of the Box-Gum Woodland EEC. Occurs on black earth and chocolate soils derived from basalt on flats or low hills on the largely cleared Inverell basalts, and to a lesser extent on rich sedimentary or volcanic soils north of Barraba. Much of the White Box grassy woodland on the Inverell basalts of the Nandewar Bioregion community exists as a derived grassland community. The presence of scattered eucalypts and tree stumps at some sites and the floristic composition of the ground layer suggest that the grassland community is an artefact of disturbance and clearing, and the original vegetation of much of these grasslands is likely to have been woodland dominated by White Box. This community probably includes small patches of natural Bluegrass/Speargrass grassland. These natural grassland patches occur on flat valley floors where Angophora floribunda and/or Eucalyptus blakelyi start to associate with, or sometimes replace White Box. Mainly cleared and part of the grassy box-gum woodland EEC.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 169, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 170, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 593,
                                    "name": "Silver-leaved Ironbark - White Cypress Pine grassy woodland mainly in the northern Nandewar Bioregion",
                                    "description": "Tall woodland or mid-high to tall open forest on undulating to hilly sedimentary terrain at low altitudes in a north-east band from the northern end of Mt Kaputar National Park to the Bunal State Forest and Mole River areas. Dominated by Silver-leaved Ironbark (Eucalyptus melanophloia) and White Cypress Pine (Callitris glaucophylla) with infrequent co-dominant White Box (Eucalyptus albens) and Tumbledown Red Gum (Eucalyptus dealbata), and less commonly Eucalyptus crebra, Angophora floribunda, Brachychiton populneus subsp. populneus and Eucalyptus melliodora. The community supports an open sparse shrub layer with Notelaea microcarpa var. microcarpa and Dodonaea viscosa subsp. angustifolia most frequent, and occasional Beyeria viscosa. The most frequent twiners are Desmodium varians, Glycine clandestina and Glycine tabacina. The grassy ground layer includes Cheilanthes sieberi subsp. sieberi, Dichanthium sericeum subsp. sericeum, Eragrostis leptostachya, Austrostipa scabra subsp. scabra, Daucus glochidiatus, Cymbonotus lawsonianus, Bothriochloa decipiens, Wahlenbergia communis, Aristida vagans, Solenogyne bellioides, Desmodium brachypodum, Vittadinia muelleri, Brunoniella australis, Chrysocephalum apiculatum, Erodium crinitum, Geranium solanderi var. solanderi, Glossocardia bidens, Chloris truncata, Chrysocephalum semipapposum, Dichondra species A, Goodenia glabra, Lomandra filiformis, Ophioglossum lusitanicum, Austrostipa verticillata, Aristida ramosa, Chamaesyce drummondii, Panicum effusum, Sporobolus elongatus, Aristida caput-medusae, Cymbopogon refractus, Dichondra repens, Calotis cuneifolia, Fimbristylis dichotoma, Mentha satureioides, Plantago debilis and Elachanthus pusillus. The invasive weed Coolatai grass (Hyparrhenia hirta) dominates the ground layer at some sites. Largely cleared for agriculture with most remnants on steeper hillsides.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 599,
                                    "name": "Blakelys Red Gum - Yellow Box grassy tall woodland on flats and hills in the Brigalow Belt South Bioregion and Nandewar Bioregion",
                                    "description": "Tall woodland dominated by Blakelys Red Gum (Eucalyptus blakelyi) and Yellow Box (Eucalyptus melliodora) often with Angophora floribubnda on flats or White Box (Eucalyptus albens) on hills. The shrub layer is absent to sparse and includes species such as Acacia implexa, Olearia elliptica subsp. elliptica, Geijera parviflora, Myoporum montanum, or Pimelea neo-anglica. The ground cover is usually mid-dense to dense dominated by grasses and forbs. Grass species include Aristida personata, Austrostipa verticillata, Themeda australis, Bothriochloa macra or Dichanthium sericeum. Forb species include Dichondra repens, Geranium solanderi, Hydrocotyle laxiflora, Rumex brownii, Scutellaria humilis, Hypericum gramineum, Senecio quadridentatus, Haloragis heterophylla, Dianella longifolia var. longifolia and Chrysocephalum apiculatum. The sedges Cyperus gracilis or Carex inversa may be present along with the climbers Glycine tabacina or Glycine clandestina. Juncus and other wetland species occur in drainage depressions. Occurs on brown, red to black sandy loam to clay loam soils that may be either alluviual / colluvial or derived from fine-grained sedimentary or metamorphic substrates and sometimes volcanic rocks on valley flats, hillslopes in hills and low hills landform patterns. Widespread in the Nandewar Bioregion and on the eastern edge of the Brigalow Belt South Bioregion. Mostly cleared. Part of the grassy box-gum woodland TSC and EPBC Act listed EECs.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 172, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 173, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 711,
                                    "name": "Bluegrass - Spear Grass - Redleg Grass derived grasslands of the Nandewar Bioregion",
                                    "description": "Other Diagnostics Features: Usually a derived grassland community, sometimes with scattered trees.;  LandscapePosition: Flats or lower slopes in undulating terrain.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 847,
                                    "name": "Grey Box - Blakelys Red Gum - Yellow Box grassy open forest of the Nandewar Bioregion and New England Tableland Bioregion",
                                    "description": "Other Diagnostics Features: Sites in this community often have a high number of exotic species.;  LandscapePosition: On flat to undulating areas at low to intermediate altitudes mainly on sedimentary substrates",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 851,
                                    "name": "Grey Box - grass tree - spinifex woodland on limestone hills of the western Hunter and Capertee Valleys, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Restricted to limestone hills around Crown Creek, Coco Creek and north of Mount Airly near Oaky Creek.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 955,
                                    "name": "Mugga Ironbark - Black Cypress Pine woodland on hillslopes and ridges of the Central Lachlan region of the NSW South Western Slopes Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Slopes; Hillcrests; Ridges",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 1303,
                                    "name": "White Box - Grey Gum - Kurrajong grassy woodland on slopes of the northern Capertee Valley, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: The community occurs near the transition between the sandstone colluvium of the escarpment, metamorphic basement rocks and the lower elevations of the Permian valley floor itself.;  LandscapePosition: Occurs on lower slopes in the northern parts of the Capertee Valley.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 178, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1304,
                                    "name": "White Box - Narrow-leaved Ironbark grassy woodland of the Capertee Valley, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: This community occurs extensively on the basal Permian Sediments of the Capertee Valley floor.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 1315,
                                    "name": "White Cypress Pine - Silver-leaved Ironbark grassy woodland of the Nandewar Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: On slopes or ridges in undulating terrain",
                                    "percentCleared": 85,
                                    "tec": []
                                },
                                {
                                    "id": 1329,
                                    "name": "Yellow Box - Blakelys Red Gum grassy woodland of the Nandewar Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: On fertile loamy-clay soils on slopes, drainage lines and alluvial plains",
                                    "percentCleared": 85,
                                    "tec": [
                                        {"id": 182, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 1383,
                                    "name": "White Box grassy woodland of the Nandewar Bioregion and Brigalow Belt South Bioregion",
                                    "description": "Other Diagnostics Features: None; LandscapePosition: On creek flats, lower slopes and alluvial plains mainly on sedimentary substrates.",
                                    "percentCleared": 90,
                                    "tec": [
                                        {"id": 183, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 184, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "CE"}
                                    ]
                                },
                                {
                                    "id": 1401,
                                    "name": "Narrow-leaved Ironbark - Forest Red Gum woodland on rocky slopes of the lower Burragorang Gorge, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: None; LandscapePosition: On creek flats, lower slopes and alluvial plains mainly on sedimentary substrates.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 185, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "E"},
                                        {"id": 186, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 1609,
                                    "name": "White Box - White Cypress Pine - Native Olive woodland of upper Hunter and northern Wollemi",
                                    "description": "Woodlands characterised by a canopy strongly dominated by Eucalyptus albens in association with Callitris glaucophylla. The mid-storey consists of an open shrub layer. The ground layer is typically a mix of grasses with various forbs and graminoids.| Ranges of central and upper Hunter Valley and northern Wollemi at mid elevations.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 1687,
                                    "name": "White Box - Grass Tree - Spinifex woodland of the Upper Hunter",
                                    "description": "Eucalypt Woodlands to Open Woodlands| the mid-stratum is typically shrubby but is characterised by grass trees. The ground stratum is grassy and is characterised by the presence of spinifex.| Confined to a limited area on the western site of Glenbawn Dam at elevations of 280-410m. This community occurs on sandstone geologies and may well be confined to the heavy mineral sandstone sub-component.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 1693,
                                    "name": "Yellow Box - Rough-barked Apple grassy woodland of the upper Hunter and Liverpool Plains",
                                    "description": "Eucalypt/Angophora Open Forests to Woodlands| no consistent mid-stratum is recorded| the ground stratum is typically grassy with other graminoids and sub-shrubs.| This community is widely distributed from Pine Ridge to west of Coolah and east to Ellerston. Its most southerly occurrence is in northern Yengo NP. It is found on a range of bedrocks but is most frequently found on unconsolidated sediments| it ranges from 300 to 750m in elevation.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 189, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) largely equivalent to", "status": "E"},
                                        {"id": 190, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) largely equivalent to", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 1695,
                                    "name": "Yellow Box grassy woodland on basalt soils of the upper Hunter",
                                    "description": "Eucalypt Woodlands| mid-stratum rarely present; mostly isolated shrubs. The ground stratum is moderately dense and is typically grasses with a mix of forbs and sub-shrubs. | This community is found in a restricted area on the lower slopes of the Merriwa plateau on basalt-derived soils at elevations of 300-400m.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 191, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) largely equivalent to", "status": "CE"},
                                        {"id": 192, "name": " White Box Yellow Box Blakely Red Gum Woodland (Equivalent) largely equivalent to", "status": "E"},
                                        {"id": 193, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 194, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"}
                                    ]

                                },
                                {
                                    "id": 1767,
                                    "name": "Rough-barked Apple grassy tall woodlands of the Brigalow Belt South",
                                    "description": "Riparian Tall Open Forest to Woodlands dominated by Rough-barked Apple| the mid-stratum is sparse and frequently absent. The ground stratum is characterised by grasses with a mix of associated forbs.| This community occurs along minor stream lines in their headwater areas| substrates are sandy at elevations of 480 to 550m.",
                                    "percentCleared": 0,
                                    "tec": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Dry Sclerophyll Forests (Shrub/grass sub-formation)",
                    "type": "1",
                    "keithClass": [
                        {
                            "id": 1,
                            "name": "Hunter-Macleay Dry Sclerophyll Forests",
                            "pct": [
                                {
                                    "id": 715,
                                    "name": "Blue-leaved Stringybark - Blackbutt open forest of the NSW North Coast Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Very scattered distribution in the southern part of the bioregion (e.g. Dooragan National Park near Port Macquarie and near Wauchope).",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 904,
                                    "name": "Large-fruited Blackbutt shrubby open forest of the Broken Bago Range of the NSW North Coast Bioregion",
                                    "description": "Other Diagnostics Features: Restricted to a small area south west of Wauchope.;  LandscapePosition: Occurs on upper slopes and ridges often near clifflines.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 922,
                                    "name": "Melaleuca decora low forest of the central Hunter Valley, Sydney Basin Bioregion",
                                    "description": "Other Diagnostics Features: Low forest 5 to 7 metres tall.;  LandscapePosition: Occurs from west of Cessnock to west of Muswellbrook. Occurs in soaks where drainage is impeded, but may also occur along drainage lines where water movement is negligible.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 1178,
                                    "name": "Slaty Red Gum grassy woodland on hinterland foothills of the southern North Coast",
                                    "description": "Other Diagnostics Features: Usually occurs as a grassy woodland on deep, moderately fertile and well-watered soils.;  LandscapePosition: Occurs in the Belford-Pokolbin district, Glendon Brook and Dungog-Paterson districts.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 1215,
                                    "name": "Spotted Gum - Grey Ironbark open forest of the Macleay Valley lowlands of the NSW North Coast Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Occurs slopes and ridges of coastal foothills",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 62, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1588,
                                    "name": "Grey Ironbark - Broad-leaved Mahogany - Forest Red Gum shrubby open forest on Coastal Lowlands of the Central Coast",
                                    "description": "Open forests characterised by Eucalyptus paniculata. The understorey is typically shrubby with sparse climbers. The ground layer is characteristically grassy with various graminoids and forbs.| Coastal lowlands of the Central Coast mainly on sandstones.",
                                    "percentCleared": 56,
                                    "tec": [
                                        {"id": 63, "name": " Subtropical Coastal Floodplain Forest of the New South Wales North Coast Bioregion (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1589,
                                    "name": "Spotted Gum - Broad-leaved Mahogany - Grey Gum grass - shrub open forest on Coastal Lowlands of the Central Coast",
                                    "description": "Open forests characterised by a canopy dominated by Corymbia maculata. The mid-storey is generally shrubby with various climbers. The ground layer is dominated by a range of grasses along with other graminoid and forbs.| Coastal lowlands of the Central Coast mainly on sandstones.",
                                    "percentCleared": 71,
                                    "tec": [
                                        {"id": 64, "name": " Pittwater and Wagstaffe Spotted Gum Forest in the Sydney Basin Bioregion (Part) likely relates", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1590,
                                    "name": "Spotted Gum - Broad-leaved Mahogany - Red Ironbark shrubby open forest",
                                    "description": "Open forests with a canopy dominated by Corymbia maculata. The mid-storey consists of a diverse open shrub layer along with various small climbers. The ground layer in characteristically grassy with a mix of forbs; small ferns and other graminoids.| Low ranges of the lower Hunter Valley and Central Coast at lower",
                                    "percentCleared": 48,
                                    "tec": [
                                        {"id": 65, "name": " Lower Hunter Spotted Gum-Ironbark Forest in the Sydney Basin Bioregion (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1592,
                                    "name": "Spotted Gum - Red Ironbark - Grey Gum shrub - grass open forest of the Lower Hunter",
                                    "description": "Open forests dominated by Corymbia maculata; Eucalyptus fibrosa. The mid- storey is typically shrubby with sparse climbers. The ground storey is dominated by grasses with scattered forbs.| Mainly restricted to the lower Hunter Valley.",
                                    "percentCleared": 44,
                                    "tec": [
                                        {"id": 65, "name": " Lower Hunter Spotted Gum-Ironbark Forest in the Sydney Basin Bioregion (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1593,
                                    "name": "Red Ironbark - Spotted Gum - Prickly-leaved Paperbark shrubby open forest of the Lower Hunter",
                                    "description": "Open forests with a canopy dominated by Eucalyptus fibrosa. The mid-storey consists of a diverse open shrub layer. The ground layer is typically dominated by grasses with forbs and small ferns.| Restricted to the lower Hunter Valley.",
                                    "percentCleared": 49,
                                    "tec": [
                                        {"id": 65, "name": " Lower Hunter Spotted Gum-Ironbark Forest in the Sydney Basin Bioregion (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1600,
                                    "name": "Spotted Gum - Red Ironbark - Narrow-leaved Ironbark - Grey Box shrub-grass open forest of the lower Hunter",
                                    "description": "Open forests with a canopy dominated by Corymbia maculata. The mid-storey consists of an open shrub layer. The ground layer is predominately grassy with various graminoids; forbs and small ferns.| Restricted to the lower Hunter Valley.",
                                    "percentCleared": 66,
                                    "tec": [
                                        {"id": 68, "name": " Lower Hunter Spotted Gum-Ironbark Forest in the Sydney Basin Bioregion (Equivalent) largely equivalent to", "status": "E"},
                                        {"id": 69, "name": " Central Hunter Ironbark-Spotted Gum-Grey Box Forest in the New South Wales North Coast and Sydney Basin Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1601,
                                    "name": "Spotted Gum - Narrow-leaved Ironbark-Red Ironbark shrub - grass open forest of the central and lower Hunter",
                                    "description": "Open forests with a canopy dominated by Corymbia maculata and Eucalyptus crebra. The mid-storey consists of a sparse shrub layer. The ground layer is predominately grassy with various graminoids; forbs and small ferns.| Central and Lower Hunter Valley.",
                                    "percentCleared": 76,
                                    "tec": [
                                        {"id": 70, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 71, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"},
                                        {"id": 72, "name": " Central Hunter Ironbark-Spotted Gum-Grey Box Forest in the New South Wales North Coast and Sydney Basin Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1602,
                                    "name": "Spotted Gum - Narrow-leaved Ironbark shrub - grass open forest of the central and lower Hunter",
                                    "description": "Open forests with a canopy dominated by Corymbia maculata. The mid-storey consists of an open shrub layer. The ground layer is predominately grassy with various graminoids; forbs and small ferns.| Central and Lower Hunter Valley.",
                                    "percentCleared": 54,
                                    "percentCleared": 76,
                                    "tec": [
                                        {"id": 73, "name": " Lower Hunter Spotted Gum-Ironbark Forest in the Sydney Basin Bioregion (Part) partially subset of", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1608,
                                    "name": "Grey Box - Grey Gum - Rough-barked Apple - Blakelys Red Gum grassy open forest of the central Hunter",
                                    "description": "Open forests to woodlands characterised by Eucalyptus moluccana in association with a range of other eucalypts. The mid-storey consists of a relatively diverse shrub layer and sparse climbers. The ground layer is predominately grassy with various forbs and graminoids.| Hills of the central and upper Hunter Valley at mid to low elevations.",
                                    "percentCleared": 50,
                                    "tec": [
                                        {"id": 74, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "CE"},
                                        {"id": 75, "name": " White Box Yellow Box Blakely Red Gum Woodland (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1626,
                                    "name": "Smooth-barked Apple - Broad-leaved Mahogany - Red Bloodwood heathy low open forest on hills at Nelson Bay",
                                    "description": "Open forests to woodlands with an overstorey dominated by Angophora costata along with a range of other eucalypts. The mid-storey typically consists of a diverse range of shrubs along with scrambling climbers and often has a high cover of Doryanthes excelsa. The ground layer is typically dominated by grasses and graminoids.| Low hills on the coastal lowlands of the lower North Coast in the Nelson Bay area; mainly on sands.",
                                    "percentCleared": 3,
                                    "tec": []

                                },
                                {
                                    "id": 1748,
                                    "name": "Grey Box grassy open forest of the Central and Lower Hunter Valley",
                                    "description": "open forests with a canopy dominated by Eucalyptus moluccana. The mid- storey consists of an open shrub layer. The ground layer is dominated by grasses.| Central and Lower Hunter Valley",
                                    "percentCleared": 0,
                                    "tec": []

                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Grasslands",
                    "type": "1",
                    "keithClass": [
                        {
                            "id": 1,
                            "name": "Temperate Montane Grasslands",
                            "pct": [
                                {
                                    "id": 797,
                                    "name": "Derived grassland of the South Eastern Highlands Bioregion and South East Corner Bioregion",
                                    "description": "Other Diagnostics Features: Derived grassland communities resulting from the clearing of various grassy woodland and forest communities.  May occur on any landscape position formerly occupied by woodland and dry and wet forest communities, from which these grassland communities are derived.;  LandscapePosition: On footslopes, midslopes, upper slopes and crests, on all lithologies.  Widespread throughout the tablelands.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 78, "name": " Lowland Grassy Woodland in the South East Corner Bioregion (Part) ", "status": "E"},
                                        {"id": 79, "name": " Natural Temperate Grassland of the Southern Tablelands of NSW and the Australian Capital Territory (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 802,
                                    "name": "Derived grasslands of the South Eastern Highlands Bioregion and South East Corner Bioregion - exposed slopes and ridges around Oberon and Gurnang",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Exposed slopes and ridges of the tablelands around Oberon and Gurnang.  It occurs in higher elevation situations, from 980 to 1360m ASL .",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 80, "name": " Tableland Basalt Forest in the Sydney Basin and South Eastern Highlands Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 803,
                                    "name": "Derived grasslands of the South Eastern Highlands Bioregion and South East Corner Bioregion - exposed slopes and ridges between Lithgow and Mt Lambie",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Exposed ridges and slopes on generally rocky terrain  between 790m and 1160m ASL.  It genarally occurs on hard metamorphic rocks between Lithgow and Mount Lambie, in particular from Mount Walker to Rydal.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 81, "name": " Tableland Basalt Forest in the Sydney Basin and South Eastern Highlands Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 804,
                                    "name": "Derived grasslands of the South Eastern Highlands Bioregion and South East Corner Bioregion - lower slopes and flats of upper Coxs and Tuglow River catchments",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Lower slopes, gullies and flats on undulating tablelands in the upper CoxÃ†s and  Tuglow River catchments. It occurs on clay-loam soils on a range of geological substrates between 780m and 1270m ASL.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 82, "name": " Tableland Basalt Forest in the Sydney Basin and South Eastern Highlands Bioregions (Part) ", "status": "E"},
                                        {"id": 83, "name": " Tablelands Snow Gum, Black Sallee, Candlebark and Ribbon Gum Grassy Woodland in the South Eastern Highlands, Sydney Basin, South East Corner and NSW South Western Slopes Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 893,
                                    "name": "Kangaroo Grass - Poa fawcettiae open grassland on limestone in northern Kosciuszko NP, Australian Alps Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Occurs on steep slopes in karst areas between 1100 and 1200m at Cave Creek and Yarrangobilly in northern Kosciuszko NP.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 894,
                                    "name": "Kangaroo Grass - Purple Wire-grass - Mat-rush - Wallaby Grass - Common Buttons dry tussock grassland in the north-western and Eastern parts of the Southern Tablelands of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense tall tussock grassland.  Occurs in dry and sometimes steeply sloping sites in the areas to the north-west and east of Canberra in the Southern Tablelands, sometimes in riparian or upperslope situations on shallow or skeletal soils (though not in the dry rainshadow of the Monaro).;  LandscapePosition: Widespread thougjh restricted to steep dry hillsides in the Yass, Goulburn, Braidwood and Tarago districts;  occurs on well-drained, steep and often rocky, west facing footslopes, midslopes and upperslopes, mainly on sedimentary strata.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 895,
                                    "name": "Kangaroo Grass - Purple Wire-grass - Mat-rush - Wallaby Grass - Common Buttons dry tussock grassland on steep sites in the north-western and Eastern parts of the Southern Tablelands of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense tall tussock grassland.  Occurs in dry and sometimes steeply sloping sites in the areas to the north-west and east of Canberra in the Southern Tablelands, sometimes in riparian or upperslope situations on shallow or skeletal soils (though not in the dry rainshadow of the Monaro).;  LandscapePosition: Widespread thougjh restricted to steep dry hillsides in the Yass, Goulburn, Braidwood and Tarago districts;  occurs on well-drained, steep and often rocky, west facing footslopes, midslopes and upperslopes, mainly on sedimentary strata.",
                                    "percentCleared": 0,
                                    "tec": []

                                },
                                {
                                    "id": 896,
                                    "name": "Kangaroo Grass - Wallaby Grass - Snow Grass moist tussock grassland in the Monaro and the Southern Tablelands regions of the South Eastern Highlands Bioregion and NSW South Western Slopes Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense tall tussock grassland.  Widespread on moist sites in the Southern Tablelands and NSW South Western Slopes, and in moist sites in the outer rim of the Monaro region.  Also occurs in the region near Tumbarumba, but absent from the dry rainshadow areas of the Monaro.;  LandscapePosition: Widespread on the moister fringes of Monaro Tableland, and also in the Southern Tablelands (Canberra, Yass, Crookwell, Goulburn, Braidwood and Bungendore districts; also isolated occurences in the Tumbarumba, Rosewood, Khancoban, Orange and Oberon districts; also recorded on the NSW South Western Slopes (Boorowa); occurs mainly on well-drained footslopes and midslopes on all lithologies.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 87, "name": " Themeda grassland on seacliffs and coastal headlands in the NSW North Coast, Sydney Basin and South East Corner Bioregions (Equivalent) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1110,
                                    "name": "River Tussock - Tall Sedge - Kangaroo Grass moist grasslands of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Dense tall tussock grassland.  Widespread throughout the South Eastern Highlands and NSW South Western Slopes in drainage lines, flats and lower footslopes.;  LandscapePosition: Mainly occurs in drainage lines or on river flats, often on alluvium; occurs throughout the South Eastern Highlands Bioregion, including the Tumbarrumba and Rosewood districts.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 88, "name": " Tablelands Snow Gum, Black Sallee, Candlebark and Ribbon Gum Grassy Woodland in the South Eastern Highlands, Sydney Basin, South East Corner and NSW South Western Slopes Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1185,
                                    "name": "Snow Grass - Kangaroo Grass - Sheeps Burr grassland on undulating basalt plateaux, South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense tall tussock grassland.  Occurs in dry locations.  Widespread particularly in the Cooma to Bombala area and scattered in the Taralga to Gunning area.;  LandscapePosition: Occurs on undulating basalt plateaux (footslopes, midslopes and crests) on deep chocolate/chernozem soils.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 89, "name": " Tablelands Snow Gum, Black Sallee, Candlebark and Ribbon Gum Grassy Woodland in the South Eastern Highlands, Sydney Basin, South East Corner and NSW South Western Slopes Bioregions (Part) ", "status": "E"}
                                    ]

                                },
                                {
                                    "id": 1186,
                                    "name": "Snow Grass - Kangaroo Grass - Tufted Daisy - Woodruff - Pale Everlasting sub-montane moist tussock grassland of the southern Shoalhaven valley, outer fringe of the Monaro and southern ACT in the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Dense low to tall tussock grassland.  Occurs in sub-montane areas of the outer fringe of the Monaro and the upper Shoalhaven catchment.;  LandscapePosition: Widespread on the eastern and western fringes of the Monaro Tableland and the upper catchment of the Shoalhaven valley; confined to high latitude, moist areas; occurs mainly in frost hollows on alluvium or colluvium and on basalt caps.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 90, "name": " Tablelands Snow Gum, Black Sallee, Candlebark and Ribbon Gum Grassy Woodland in the South Eastern Highlands, Sydney Basin, South East Corner and NSW South Western Slopes Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1187,
                                    "name": "Snow Grass - Wallaby Grass - Kangaroo Grass - Common Everlasting - Corkscrew-grass dry tussock grassland in the Monaro Region of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense medium to tall tussock grassland. Occurs on dry sites in the Monaro region. Several sub-types are recognised, with steep slopes on sediments in the driest parts of the Monaro having a sub-type sometimes dominated by Joycea pallida and Aristida ramosa.Benson recognised 3 distinct sub-communities within this type; these have been amalgamated with further data collection and analysis.;  LandscapePosition: Widespread on the Monaro Tableland, though confined to drier areas (i.e. in the Monaro rainshadow); occurs on well-drained footslopes, midslopes and plateaux on all lithologies.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 91, "name": " Tablelands Snow Gum, Black Sallee, Candlebark and Ribbon Gum Grassy Woodland in the South Eastern Highlands, Sydney Basin, South East Corner and NSW South Western Slopes Bioregions (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1202,
                                    "name": "Speargrass grassland of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense to open tall tussock grassland.;  LandscapePosition: Usually on upper slopes or ridges with well drained sandy or loamy soils.",
                                    "percentCleared": 0,
                                    "tec": [
                                        {"id": 92, "name": " Natural Temperate Grassland of the Southern Tablelands of NSW and the Australian Capital Territory (Part) ", "status": "E"}
                                    ]
                                },
                                {
                                    "id": 1224,
                                    "name": "Sub-alpine dry grasslands and heathlands of valley slopes, southern South Eastern Highlands Bioregion and Australian Alps Bioregion",
                                    "description": "Other Diagnostics Features: Open shrubland or grassland.;  LandscapePosition: Occurs on broad, flat valley bottoms in montane to sub-alpine areas between 1200 and 1600m.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 1225,
                                    "name": "Sub-alpine grasslands of valley floors, southern South Eastern Highlands Bioregion and Australian Alps Bioregion",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Occurs on broad, flat valley bottoms in montane to sub-alpine areas between 1200 and 1600m.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 1288,
                                    "name": "Wallaby Grass - Kangaroo Grass - Rush - Blown Grass Wet Tussock Grassland Moist Grasslands of the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Dense or open tussock garssland of  wet sites on drainage lines, flats, footslopes and occasionally midslopes, on various substrates;  LandscapePosition: Drainage lines, flats and lower footslopes",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 1289,
                                    "name": "Wallaby Grass - Red-grass - Tall Speargrass - Kangaroo Grass dry tussock grassland of the North-western and Eastern Southern Tablelands in the South Eastern Highlands Bioregion",
                                    "description": "Other Diagnostics Features: Mid-dense tall tussock grassland.  Occurs in dry locations, though not in the dry rainshadow of the Monaro.;  LandscapePosition: Widespread in the Southern Tablelands (Canberra, Yass, Boorowa, Crookwell, Goulburn, Braidwood and Bungendore districts; also isolated occurences in the Orange district; occurs mainly on well-drained footslopes and midslopes on all lithologies.",
                                    "percentCleared": 0,
                                    "tec": []
                                },
                                {
                                    "id": 1298,
                                    "name": "Wet tussock grasslands of cold air drainage areas of the tablelands",
                                    "description": "Other Diagnostics Features: None;  LandscapePosition: Usually occurs on poorly drained depositional flats",
                                    "percentCleared": 95,
                                    "tec": [
                                        {"id": 97, "name": " Montane Peatlands and Swamps of the New England Tableland, NSW North Coast, Sydney Basin, South East Corner, South Eastern Highlands and Australian Alps Bioregions (Part) ", "status": "E"},
                                        {"id": 98, "name": " Carex Sedgeland of the New England Tableland, Nandewar, Brigalow Belt South and NSW North Coast Bioregions (Part) ", "status": "E"}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "siteContext": {
            "patchSizeClass": [
                "<5 ha",
                "5-25 ha",
                "25 - 100ha"

            ],
            "vegetationCoverClass": [
                "<=10%",
                "11-30%",
                "31-70%",
                ">70%"
            ],
            "mitchellLandscape": [
                {
                    "id": 1,
                    "name": "Adelong Granite Ranges",
                    "percentCleared": "82"
                },
                {
                    "id": 2,
                    "name": "Adrah Hills and Ranges",
                    "percentCleared": "77"
                },
                {
                    "id": 3,
                    "name": "Albury - Oaklands Hills and Footslopes",
                    "percentCleared": "86"
                },
                {
                    "id": 4,
                    "name": "Alpine Zone",
                    "percentCleared": "1"
                },
                {
                    "id": 5,
                    "name": "Apsley Meta-sediments",
                    "percentCleared": "23"
                },
                {
                    "id": 6,
                    "name": "Ardlethan Hills",
                    "percentCleared": "90"
                },
                {
                    "id": 7,
                    "name": "Ashford Karst",
                    "percentCleared": "78"
                },
                {
                    "id": 8,
                    "name": "Ashford Mole Valleys",
                    "percentCleared": "66"
                },
                {
                    "id": 9,
                    "name": "Attunga Karst",
                    "percentCleared": "55"
                },
                {
                    "id": 10,
                    "name": "Baldwin Mountains",
                    "percentCleared": "10"
                },
                {
                    "id": 11,
                    "name": "Ballina Coastal Ramp",
                    "percentCleared": "12"
                },
                {
                    "id": 12,
                    "name": "Barnato Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 13,
                    "name": "Barnato Incised Streams",
                    "percentCleared": "13"
                },
                {
                    "id": 14,
                    "name": "Barnato Isolated Hills",
                    "percentCleared": "1"
                },
                {
                    "id": 15,
                    "name": "Barnato Lakes",
                    "percentCleared": "7"
                },
                {
                    "id": 16,
                    "name": "Barnato Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 17,
                    "name": "Barnato Plains",
                    "percentCleared": "1"
                },
                {
                    "id": 18,
                    "name": "Barnato Wide Valleys",
                    "percentCleared": "7"
                },
                {
                    "id": 19,
                    "name": "Barradine - Coghill Channels and Floodplains",
                    "percentCleared": "20"
                },
                {
                    "id": 20,
                    "name": "Barradine Alluvial Plains",
                    "percentCleared": "36"
                },
                {
                    "id": 21,
                    "name": "Barrier Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 22,
                    "name": "Barrier Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 23,
                    "name": "Barrier Fresh Lakes and Swamps",
                    "percentCleared": "0"
                },
                {
                    "id": 24,
                    "name": "Barrier Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 25,
                    "name": "Barrier Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 26,
                    "name": "Barrier Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 27,
                    "name": "Barrier Tablelands",
                    "percentCleared": "0"
                },
                {
                    "id": 28,
                    "name": "Barrington Tops Basalt",
                    "percentCleared": "17"
                },
                {
                    "id": 29,
                    "name": "Barrington Tops Granite",
                    "percentCleared": "2"
                },
                {
                    "id": 30,
                    "name": "Barrington Tops Meta-sediments",
                    "percentCleared": "10"
                },
                {
                    "id": 31,
                    "name": "Barwon Aeolian Sands",
                    "percentCleared": "14"
                },
                {
                    "id": 32,
                    "name": "Barwon Alluvial Plains",
                    "percentCleared": "38"
                },
                {
                    "id": 33,
                    "name": "Barwon Channels and Floodplains",
                    "percentCleared": "34"
                },
                {
                    "id": 34,
                    "name": "Baryulgil Ultramafics",
                    "percentCleared": "50"
                },
                {
                    "id": 35,
                    "name": "Bathurst Granites",
                    "percentCleared": "84"
                },
                {
                    "id": 36,
                    "name": "Bebo Ranges and Slopes",
                    "percentCleared": "38"
                },
                {
                    "id": 37,
                    "name": "Bega Coastal Alluvium",
                    "percentCleared": "74"
                },
                {
                    "id": 38,
                    "name": "Bega Coastal Foothills",
                    "percentCleared": "9"
                },
                {
                    "id": 39,
                    "name": "Bega Granites",
                    "percentCleared": "68"
                },
                {
                    "id": 40,
                    "name": "Belarabon Range",
                    "percentCleared": "0"
                },
                {
                    "id": 41,
                    "name": "Belata Sands",
                    "percentCleared": "69"
                },
                {
                    "id": 42,
                    "name": "Bellinger Channels and Floodplains",
                    "percentCleared": "84"
                },
                {
                    "id": 43,
                    "name": "Belmont Hills",
                    "percentCleared": "71"
                },
                {
                    "id": 44,
                    "name": "Belrose Coastal Slopes",
                    "percentCleared": "59"
                },
                {
                    "id": 45,
                    "name": "Bherwherre Barrier",
                    "percentCleared": "22"
                },
                {
                    "id": 46,
                    "name": "Bilpin Ridges",
                    "percentCleared": "30"
                },
                {
                    "id": 47,
                    "name": "Bimbi Plains",
                    "percentCleared": "93"
                },
                {
                    "id": 48,
                    "name": "Black Range",
                    "percentCleared": "28"
                },
                {
                    "id": 49,
                    "name": "Blaxlands Ridge",
                    "percentCleared": "20"
                },
                {
                    "id": 50,
                    "name": "Blue Mountains Plateau",
                    "percentCleared": "11"
                },
                {
                    "id": 51,
                    "name": "Bodalla - Nadgee Coastal Sands",
                    "percentCleared": "13"
                },
                {
                    "id": 52,
                    "name": "Bodangora Granites",
                    "percentCleared": "98"
                },
                {
                    "id": 53,
                    "name": "Bogan Alluvial Plains",
                    "percentCleared": "63"
                },
                {
                    "id": 54,
                    "name": "Bogan Channels and Floodplains",
                    "percentCleared": "44"
                },
                {
                    "id": 55,
                    "name": "Bogan Swamps and Lagoons",
                    "percentCleared": "75"
                },
                {
                    "id": 56,
                    "name": "Boggy Cowal Alluvial Plains",
                    "percentCleared": "82"
                },
                {
                    "id": 57,
                    "name": "Boggy Cowal Channels and Floodplains",
                    "percentCleared": "65"
                },
                {
                    "id": 58,
                    "name": "Boggy Cowal Swamps and Lagoons",
                    "percentCleared": "82"
                },
                {
                    "id": 59,
                    "name": "Bogong Montane",
                    "percentCleared": "0"
                },
                {
                    "id": 60,
                    "name": "Bogong Sub-alpine",
                    "percentCleared": "0"
                },
                {
                    "id": 61,
                    "name": "Bokara Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 62,
                    "name": "Bomaderry Plains",
                    "percentCleared": "81"
                },
                {
                    "id": 63,
                    "name": "Bombala Granite Basin",
                    "percentCleared": "82"
                },
                {
                    "id": 64,
                    "name": "Bombala Meta-sediments",
                    "percentCleared": "74"
                },
                {
                    "id": 65,
                    "name": "Boona Mountains",
                    "percentCleared": "34"
                },
                {
                    "id": 66,
                    "name": "Boorowa Volcanics",
                    "percentCleared": "90"
                },
                {
                    "id": 67,
                    "name": "Boyd Plateau",
                    "percentCleared": "0"
                },
                {
                    "id": 68,
                    "name": "Boyd Plateau Granites",
                    "percentCleared": "0"
                },
                {
                    "id": 69,
                    "name": "Braidwood Granites",
                    "percentCleared": "60"
                },
                {
                    "id": 70,
                    "name": "Breadalbane Swamps and Lagoons",
                    "percentCleared": "91"
                },
                {
                    "id": 71,
                    "name": "Breeza Hills Basalt Caps",
                    "percentCleared": "36"
                },
                {
                    "id": 72,
                    "name": "Breeza Hills Sandstone-Shale Slopes",
                    "percentCleared": "53"
                },
                {
                    "id": 73,
                    "name": "Bringenbrong Ranges",
                    "percentCleared": "13"
                },
                {
                    "id": 74,
                    "name": "Brokong Plains",
                    "percentCleared": "93"
                },
                {
                    "id": 75,
                    "name": "Brooms Head - Kempsey Coastal Ramp",
                    "percentCleared": "26"
                },
                {
                    "id": 76,
                    "name": "Brothers Peaks",
                    "percentCleared": "11"
                },
                {
                    "id": 77,
                    "name": "Buckambool - Jackermaroo Hills",
                    "percentCleared": "9"
                },
                {
                    "id": 78,
                    "name": "Bucketty Ridges",
                    "percentCleared": "6"
                },
                {
                    "id": 79,
                    "name": "Buckingong Gravels",
                    "percentCleared": "72"
                },
                {
                    "id": 80,
                    "name": "Budawangs Range",
                    "percentCleared": "6"
                },
                {
                    "id": 81,
                    "name": "Bugaldie Uplands",
                    "percentCleared": "26"
                },
                {
                    "id": 82,
                    "name": "Bugwah Alluvial Plains",
                    "percentCleared": "82"
                },
                {
                    "id": 83,
                    "name": "Bugwah Channels and Floodplains",
                    "percentCleared": "70"
                },
                {
                    "id": 84,
                    "name": "Bugwah Swamps and Lagoons",
                    "percentCleared": "69"
                },
                {
                    "id": 85,
                    "name": "Bulga Plateau",
                    "percentCleared": "40"
                },
                {
                    "id": 86,
                    "name": "Bulli Coastal Escarpment",
                    "percentCleared": "14"
                },
                {
                    "id": 87,
                    "name": "Bulloo Channels and Floodouts",
                    "percentCleared": "0"
                },
                {
                    "id": 88,
                    "name": "Bulloo Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 89,
                    "name": "Bulloo Littoral and Lunettes",
                    "percentCleared": "0"
                },
                {
                    "id": 90,
                    "name": "Bulloo Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 91,
                    "name": "Bulloo Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 92,
                    "name": "Bundarra Valley",
                    "percentCleared": "79"
                },
                {
                    "id": 93,
                    "name": "Bungonia Tableland and Gorge",
                    "percentCleared": "39"
                },
                {
                    "id": 94,
                    "name": "Burgooney Plains",
                    "percentCleared": "95"
                },
                {
                    "id": 95,
                    "name": "Burragorang Valley and Gorges",
                    "percentCleared": "21"
                },
                {
                    "id": 96,
                    "name": "Burrinjuck Ridges",
                    "percentCleared": "89"
                },
                {
                    "id": 97,
                    "name": "Burroway Plains",
                    "percentCleared": "70"
                },
                {
                    "id": 98,
                    "name": "Burrumbuttock Hills and Footslopes",
                    "percentCleared": "91"
                },
                {
                    "id": 99,
                    "name": "Byadbo Ranges Granites",
                    "percentCleared": "87"
                },
                {
                    "id": 100,
                    "name": "Byadbo Ranges Meta-sediments",
                    "percentCleared": "21"
                },
                {
                    "id": 101,
                    "name": "Byng Ultramafics",
                    "percentCleared": "96"
                },
                {
                    "id": 102,
                    "name": "Byron - Tweed Alluvial Plains",
                    "percentCleared": "81"
                },
                {
                    "id": 103,
                    "name": "Byron - Tweed Coastal Barriers",
                    "percentCleared": "72"
                },
                {
                    "id": 104,
                    "name": "Cabramurra - Kiandra Basalt Caps and Sands",
                    "percentCleared": "18"
                },
                {
                    "id": 105,
                    "name": "Calarie Plains",
                    "percentCleared": "94"
                },
                {
                    "id": 106,
                    "name": "Canbellego - Boppy Hills",
                    "percentCleared": "6"
                },
                {
                    "id": 107,
                    "name": "Canberra Plains",
                    "percentCleared": "85"
                },
                {
                    "id": 108,
                    "name": "Canobolas Peaks",
                    "percentCleared": "56"
                },
                {
                    "id": 109,
                    "name": "Canobolas Sheet Basalts",
                    "percentCleared": "94"
                },
                {
                    "id": 110,
                    "name": "Canobolas Slopes",
                    "percentCleared": "96"
                },
                {
                    "id": 111,
                    "name": "Capertee Plateau",
                    "percentCleared": "59"
                },
                {
                    "id": 112,
                    "name": "Capertee Slopes",
                    "percentCleared": "28"
                },
                {
                    "id": 113,
                    "name": "Carabost Hills and Ranges",
                    "percentCleared": "71"
                },
                {
                    "id": 114,
                    "name": "Carcour Intrusives",
                    "percentCleared": "99"
                },
                {
                    "id": 115,
                    "name": "Cassilis Slopes",
                    "percentCleared": "62"
                },
                {
                    "id": 116,
                    "name": "Castlereagh Alluvial Plains",
                    "percentCleared": "78"
                },
                {
                    "id": 117,
                    "name": "Castlereagh Channels and Floodplains",
                    "percentCleared": "60"
                },
                {
                    "id": 118,
                    "name": "Castlereagh Swamps",
                    "percentCleared": "61"
                },
                {
                    "id": 119,
                    "name": "Central Hunter Alluvial Plains",
                    "percentCleared": "93"
                },
                {
                    "id": 120,
                    "name": "Central Hunter Foothills",
                    "percentCleared": "75"
                },
                {
                    "id": 121,
                    "name": "Cherry Tree Plateau",
                    "percentCleared": "74"
                },
                {
                    "id": 122,
                    "name": "Chimneys Ridge Montane",
                    "percentCleared": "3"
                },
                {
                    "id": 123,
                    "name": "Chimneys Ridge Sub-alpine",
                    "percentCleared": "0"
                },
                {
                    "id": 124,
                    "name": "Clarence - Manning Basin Margin",
                    "percentCleared": "20"
                },
                {
                    "id": 125,
                    "name": "Clarence - Richmond Alluvial Plains",
                    "percentCleared": "73"
                },
                {
                    "id": 126,
                    "name": "Clarence - Richmond Barriers and Beaches",
                    "percentCleared": "32"
                },
                {
                    "id": 127,
                    "name": "Clarence Foothills",
                    "percentCleared": "46"
                },
                {
                    "id": 128,
                    "name": "Clyde Channel and Floodplain",
                    "percentCleared": "31"
                },
                {
                    "id": 129,
                    "name": "Clyde Valley Foothills",
                    "percentCleared": "8"
                },
                {
                    "id": 130,
                    "name": "Cobar Basalt Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 131,
                    "name": "Cobar Downs",
                    "percentCleared": "13"
                },
                {
                    "id": 132,
                    "name": "Cobar Granite Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 133,
                    "name": "Cobar Incised Streams",
                    "percentCleared": "10"
                },
                {
                    "id": 134,
                    "name": "Cobar Isolated Hills",
                    "percentCleared": "6"
                },
                {
                    "id": 135,
                    "name": "Cobar Plains",
                    "percentCleared": "3"
                },
                {
                    "id": 136,
                    "name": "Cobar Tablelands",
                    "percentCleared": "0"
                },
                {
                    "id": 137,
                    "name": "Cocoparra Ranges and Footslopes",
                    "percentCleared": "69"
                },
                {
                    "id": 138,
                    "name": "Coffin Rock Granite Hills",
                    "percentCleared": "91"
                },
                {
                    "id": 139,
                    "name": "Coghill Alluvial plains",
                    "percentCleared": "40"
                },
                {
                    "id": 140,
                    "name": "Collarenebri Tablelands and Downs",
                    "percentCleared": "20"
                },
                {
                    "id": 141,
                    "name": "Colo River Gorges",
                    "percentCleared": "1"
                },
                {
                    "id": 142,
                    "name": "Comboyne Plateau",
                    "percentCleared": "80"
                },
                {
                    "id": 143,
                    "name": "Coolah Tops",
                    "percentCleared": "61"
                },
                {
                    "id": 144,
                    "name": "Coolangubra - Good Good Plateau",
                    "percentCleared": "23"
                },
                {
                    "id": 145,
                    "name": "Cootamundra - Tumut Serpentinite and Ultramafics",
                    "percentCleared": "91"
                },
                {
                    "id": 146,
                    "name": "Cope Hills Granite",
                    "percentCleared": "85"
                },
                {
                    "id": 147,
                    "name": "Corona Teamsters Limestone",
                    "percentCleared": "0"
                },
                {
                    "id": 148,
                    "name": "Cowal Lakes",
                    "percentCleared": "71"
                },
                {
                    "id": 149,
                    "name": "Crookwell Basalts and Sands",
                    "percentCleared": "92"
                },
                {
                    "id": 150,
                    "name": "Croppa Clay Plains",
                    "percentCleared": "92"
                },
                {
                    "id": 151,
                    "name": "Croppa Creek Channels and Floodplains",
                    "percentCleared": "90"
                },
                {
                    "id": 152,
                    "name": "Cubbo Uplands",
                    "percentCleared": "16"
                },
                {
                    "id": 153,
                    "name": "Cudgegong Channels and Floodplains",
                    "percentCleared": "97"
                },
                {
                    "id": 154,
                    "name": "Culgoa - Narran Alluvial Plains",
                    "percentCleared": "13"
                },
                {
                    "id": 155,
                    "name": "Culgoa - Narran Channels and Floodplains",
                    "percentCleared": "17"
                },
                {
                    "id": 156,
                    "name": "Culgoa Channels and Floodouts",
                    "percentCleared": "11"
                },
                {
                    "id": 157,
                    "name": "Cullarin Range Fault Block",
                    "percentCleared": "69"
                },
                {
                    "id": 158,
                    "name": "Cumberland Plain",
                    "percentCleared": "89"
                },
                {
                    "id": 159,
                    "name": "Curriba Basalt Hills",
                    "percentCleared": "93"
                },
                {
                    "id": 160,
                    "name": "Dalton Hills",
                    "percentCleared": "85"
                },
                {
                    "id": 161,
                    "name": "Dapto - Wollongong Coastal Slopes",
                    "percentCleared": "71"
                },
                {
                    "id": 162,
                    "name": "Dargals Montane",
                    "percentCleared": "0"
                },
                {
                    "id": 163,
                    "name": "Darkes Forest Sands",
                    "percentCleared": "2"
                },
                {
                    "id": 164,
                    "name": "Dingo Spur Meta-sediments",
                    "percentCleared": "39"
                },
                {
                    "id": 165,
                    "name": "Dorrigo Basalts",
                    "percentCleared": "76"
                },
                {
                    "id": 166,
                    "name": "Doura Volcanics",
                    "percentCleared": "45"
                },
                {
                    "id": 167,
                    "name": "Dubbo Basalts",
                    "percentCleared": "82"
                },
                {
                    "id": 168,
                    "name": "Dumaresq Channels",
                    "percentCleared": "88"
                },
                {
                    "id": 169,
                    "name": "Dumaresq Gorges",
                    "percentCleared": "47"
                },
                {
                    "id": 170,
                    "name": "Ebor Tops Basalt",
                    "percentCleared": "50"
                },
                {
                    "id": 171,
                    "name": "Ebor Tops Granite",
                    "percentCleared": "25"
                },
                {
                    "id": 172,
                    "name": "Erskine Creek Gorge",
                    "percentCleared": "0"
                },
                {
                    "id": 173,
                    "name": "Eugowra Plains",
                    "percentCleared": "96"
                },
                {
                    "id": 174,
                    "name": "Fifield Intrusives",
                    "percentCleared": "82"
                },
                {
                    "id": 175,
                    "name": "Fitzroy Falls Escarpment",
                    "percentCleared": "7"
                },
                {
                    "id": 176,
                    "name": "Fitzroy Falls Plateau",
                    "percentCleared": "21"
                },
                {
                    "id": 177,
                    "name": "Flat Top Basalts",
                    "percentCleared": "1"
                },
                {
                    "id": 178,
                    "name": "Frampton Hills",
                    "percentCleared": "83"
                },
                {
                    "id": 179,
                    "name": "Ganantagi Mountain and Footslopes",
                    "percentCleared": "57"
                },
                {
                    "id": 180,
                    "name": "Gap Hills",
                    "percentCleared": "41"
                },
                {
                    "id": 181,
                    "name": "Geehi Gorge",
                    "percentCleared": "1"
                },
                {
                    "id": 182,
                    "name": "Geurie Granites",
                    "percentCleared": "74"
                },
                {
                    "id": 183,
                    "name": "Gilgunnia - Broken Ranges",
                    "percentCleared": "3"
                },
                {
                    "id": 184,
                    "name": "Glenn Innes - Guyra Basalts",
                    "percentCleared": "82"
                },
                {
                    "id": 185,
                    "name": "Goobothery Hills and Footslopes",
                    "percentCleared": "67"
                },
                {
                    "id": 186,
                    "name": "Goonoo Slopes",
                    "percentCleared": "66"
                },
                {
                    "id": 187,
                    "name": "Goonumbla Hills",
                    "percentCleared": "92"
                },
                {
                    "id": 188,
                    "name": "Gosford - Cooranbong Coastal Slopes",
                    "percentCleared": "38"
                },
                {
                    "id": 189,
                    "name": "Goulburn River Channels and Floodplains",
                    "percentCleared": "81"
                },
                {
                    "id": 190,
                    "name": "Goulburn River Gorges",
                    "percentCleared": "30"
                },
                {
                    "id": 191,
                    "name": "Gourock - Tindery Ranges",
                    "percentCleared": "4"
                },
                {
                    "id": 192,
                    "name": "Gourock - Tindery Slopes",
                    "percentCleared": "27"
                },
                {
                    "id": 193,
                    "name": "Grafton - Whiporie Basin",
                    "percentCleared": "33"
                },
                {
                    "id": 194,
                    "name": "Grose River Gorge",
                    "percentCleared": "4"
                },
                {
                    "id": 195,
                    "name": "Gulgong Ranges",
                    "percentCleared": "81"
                },
                {
                    "id": 196,
                    "name": "Gumble Hills",
                    "percentCleared": "70"
                },
                {
                    "id": 197,
                    "name": "Gundary Plains",
                    "percentCleared": "72"
                },
                {
                    "id": 198,
                    "name": "Gunderbooka Range",
                    "percentCleared": "0"
                },
                {
                    "id": 199,
                    "name": "Gunning Hills",
                    "percentCleared": "94"
                },
                {
                    "id": 200,
                    "name": "Gunningbland Range and Slopes",
                    "percentCleared": "67"
                },
                {
                    "id": 201,
                    "name": "Guyra Lagoons and Swamps",
                    "percentCleared": "37"
                },
                {
                    "id": 202,
                    "name": "Guyra Tops Granite",
                    "percentCleared": "51"
                },
                {
                    "id": 203,
                    "name": "Gwydir Alluvial Plains",
                    "percentCleared": "80"
                },
                {
                    "id": 204,
                    "name": "Gwydir Channels and Floodplains",
                    "percentCleared": "68"
                },
                {
                    "id": 205,
                    "name": "Gwydir Swamps and Lagoons",
                    "percentCleared": "66"
                },
                {
                    "id": 206,
                    "name": "Harvey Ranges and Slopes",
                    "percentCleared": "55"
                },
                {
                    "id": 207,
                    "name": "Hastings Channels and Floodplains",
                    "percentCleared": "93"
                },
                {
                    "id": 208,
                    "name": "Hawkesbury - Nepean Channels and Floodplains",
                    "percentCleared": "79"
                },
                {
                    "id": 209,
                    "name": "Hawkesbury - Nepean Terrace Gravels",
                    "percentCleared": "67"
                },
                {
                    "id": 210,
                    "name": "Hawkesbury Gorge",
                    "percentCleared": "37"
                },
                {
                    "id": 211,
                    "name": "Hillston Sandplains",
                    "percentCleared": "52"
                },
                {
                    "id": 212,
                    "name": "Hornsby Plateau",
                    "percentCleared": "14"
                },
                {
                    "id": 213,
                    "name": "Howes Range",
                    "percentCleared": "5"
                },
                {
                    "id": 214,
                    "name": "Hunter River Basalts",
                    "percentCleared": "97"
                },
                {
                    "id": 215,
                    "name": "Ingalba Coastal Hills",
                    "percentCleared": "39"
                },
                {
                    "id": 216,
                    "name": "Inverell Basalts",
                    "percentCleared": "83"
                },
                {
                    "id": 217,
                    "name": "Inverell Plateau Granites",
                    "percentCleared": "37"
                },
                {
                    "id": 218,
                    "name": "Inverell Plateau Slopes",
                    "percentCleared": "86"
                },
                {
                    "id": 219,
                    "name": "Ivanhoe - Nangara Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 220,
                    "name": "Ivanhoe - Nangara Dunes",
                    "percentCleared": "2"
                },
                {
                    "id": 221,
                    "name": "Ivanhoe - Nangara Fresh Lakes and Swamps",
                    "percentCleared": "0"
                },
                {
                    "id": 222,
                    "name": "Ivanhoe - Nangara Isolated Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 223,
                    "name": "Ivanhoe - Nangara Linear Dunes",
                    "percentCleared": "1"
                },
                {
                    "id": 224,
                    "name": "Ivanhoe - Nangara Relic Lakes",
                    "percentCleared": "0"
                },
                {
                    "id": 225,
                    "name": "Ivanhoe - Nangara Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 226,
                    "name": "Ivanhoe - Nangara Sandplains",
                    "percentCleared": "3"
                },
                {
                    "id": 227,
                    "name": "Jagungal Tops",
                    "percentCleared": "1"
                },
                {
                    "id": 228,
                    "name": "Jemalong Range and Slopes",
                    "percentCleared": "64"
                },
                {
                    "id": 229,
                    "name": "Jenolan - Wombeyan Karst",
                    "percentCleared": "57"
                },
                {
                    "id": 230,
                    "name": "Jindabyne Plains",
                    "percentCleared": "60"
                },
                {
                    "id": 231,
                    "name": "Jingera Valley",
                    "percentCleared": "68"
                },
                {
                    "id": 232,
                    "name": "Junee Hills and Slopes",
                    "percentCleared": "98"
                },
                {
                    "id": 233,
                    "name": "Kangaroo Valley",
                    "percentCleared": "42"
                },
                {
                    "id": 234,
                    "name": "Kaputar Hill Crest Flows and Sands",
                    "percentCleared": "57"
                },
                {
                    "id": 235,
                    "name": "Kaputar Slopes",
                    "percentCleared": "35"
                },
                {
                    "id": 236,
                    "name": "Kaputar Tops",
                    "percentCleared": "0"
                },
                {
                    "id": 237,
                    "name": "Kelvin Range",
                    "percentCleared": "6"
                },
                {
                    "id": 238,
                    "name": "Kerringle Outwash Sands",
                    "percentCleared": "25"
                },
                {
                    "id": 239,
                    "name": "Khancoban Basin",
                    "percentCleared": "13"
                },
                {
                    "id": 240,
                    "name": "Kiama Coastal Slopes",
                    "percentCleared": "58"
                },
                {
                    "id": 241,
                    "name": "Kings Cross Montane",
                    "percentCleared": "1"
                },
                {
                    "id": 242,
                    "name": "Kings Cross Sub-alpine",
                    "percentCleared": "10"
                },
                {
                    "id": 243,
                    "name": "Kioloa Headland",
                    "percentCleared": "41"
                },
                {
                    "id": 244,
                    "name": "Kurrajong Fault Scarp",
                    "percentCleared": "41"
                },
                {
                    "id": 245,
                    "name": "Kybeyan Montane",
                    "percentCleared": "0"
                },
                {
                    "id": 246,
                    "name": "Kybeyan Range",
                    "percentCleared": "0"
                },
                {
                    "id": 247,
                    "name": "Lachlan - Bland Channels and Floodplains",
                    "percentCleared": "82"
                },
                {
                    "id": 248,
                    "name": "Lachlan Channels and Floodplains",
                    "percentCleared": "34"
                },
                {
                    "id": 249,
                    "name": "Lachlan Depression Plains",
                    "percentCleared": "28"
                },
                {
                    "id": 250,
                    "name": "Lachlan Gorge",
                    "percentCleared": "55"
                },
                {
                    "id": 251,
                    "name": "Lachlan Lakes",
                    "percentCleared": "26"
                },
                {
                    "id": 252,
                    "name": "Lachlan Sandplains",
                    "percentCleared": "24"
                },
                {
                    "id": 253,
                    "name": "Lachlan Scalded Plains",
                    "percentCleared": "5"
                },
                {
                    "id": 254,
                    "name": "Lachlan Terrace Gravels",
                    "percentCleared": "98"
                },
                {
                    "id": 255,
                    "name": "Lake George Complex",
                    "percentCleared": "91"
                },
                {
                    "id": 256,
                    "name": "Lake Illawarra Alluvial Plains",
                    "percentCleared": "87"
                },
                {
                    "id": 257,
                    "name": "Lake Illawarra Barrier",
                    "percentCleared": "93"
                },
                {
                    "id": 258,
                    "name": "Lamington Volcanic Slopes",
                    "percentCleared": "57"
                },
                {
                    "id": 259,
                    "name": "Lapstone Slopes",
                    "percentCleared": "5"
                },
                {
                    "id": 260,
                    "name": "Leadley Hills",
                    "percentCleared": "68"
                },
                {
                    "id": 261,
                    "name": "Lees Pinch Foothills",
                    "percentCleared": "28"
                },
                {
                    "id": 262,
                    "name": "Lightning Ridge Tablelands and Downs",
                    "percentCleared": "9"
                },
                {
                    "id": 263,
                    "name": "Liverpool Alluvial Plains",
                    "percentCleared": "84"
                },
                {
                    "id": 264,
                    "name": "Liverpool Range Valleys and Footslopes",
                    "percentCleared": "81"
                },
                {
                    "id": 265,
                    "name": "Liverpool Tops",
                    "percentCleared": "25"
                },
                {
                    "id": 266,
                    "name": "Lockhart Hills and Footslopes",
                    "percentCleared": "95"
                },
                {
                    "id": 267,
                    "name": "Lower Darling Alluvial Plains",
                    "percentCleared": "1"
                },
                {
                    "id": 268,
                    "name": "Lower Darling Channels and Floodplains",
                    "percentCleared": "3"
                },
                {
                    "id": 269,
                    "name": "Lower Darling Fresh Lakes and Swamps",
                    "percentCleared": "32"
                },
                {
                    "id": 270,
                    "name": "Lower Darling Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 271,
                    "name": "Lower Hunter Channels and Floodplains",
                    "percentCleared": "78"
                },
                {
                    "id": 272,
                    "name": "Lower Snowy Gorge",
                    "percentCleared": "1"
                },
                {
                    "id": 273,
                    "name": "Lower Snowy Granites",
                    "percentCleared": "4"
                },
                {
                    "id": 274,
                    "name": "Lower Snowy Ranges Meta-sediments",
                    "percentCleared": "31"
                },
                {
                    "id": 275,
                    "name": "Maccullochs Range",
                    "percentCleared": "0"
                },
                {
                    "id": 276,
                    "name": "MacDonald Channel and Floodplain",
                    "percentCleared": "34"
                },
                {
                    "id": 277,
                    "name": "MacDonald Ranges",
                    "percentCleared": "2"
                },
                {
                    "id": 278,
                    "name": "Macintyre Aeolian Sands",
                    "percentCleared": "49"
                },
                {
                    "id": 279,
                    "name": "Macintyre Alluvial Plains",
                    "percentCleared": "87"
                },
                {
                    "id": 280,
                    "name": "Macintyre Swamps and Lagoons",
                    "percentCleared": "74"
                },
                {
                    "id": 281,
                    "name": "Macleay Escarpment Foothills",
                    "percentCleared": "14"
                },
                {
                    "id": 282,
                    "name": "Macquarie - Turon Gorges",
                    "percentCleared": "84"
                },
                {
                    "id": 283,
                    "name": "Macquarie Alluvial Plains",
                    "percentCleared": "78"
                },
                {
                    "id": 284,
                    "name": "Macquarie Channels and Floodplains",
                    "percentCleared": "58"
                },
                {
                    "id": 285,
                    "name": "Macquarie Marshes",
                    "percentCleared": "55"
                },
                {
                    "id": 286,
                    "name": "Macquarie Valley Basalts",
                    "percentCleared": "95"
                },
                {
                    "id": 287,
                    "name": "Main Range Montane",
                    "percentCleared": "6"
                },
                {
                    "id": 288,
                    "name": "Main Range Sub-alpine",
                    "percentCleared": "8"
                },
                {
                    "id": 289,
                    "name": "Mallee Cliffs Dunes",
                    "percentCleared": "1"
                },
                {
                    "id": 290,
                    "name": "Mallee Cliffs Linear Dunes",
                    "percentCleared": "16"
                },
                {
                    "id": 291,
                    "name": "Mallee Cliffs Salt Lakes and Playas",
                    "percentCleared": "8"
                },
                {
                    "id": 292,
                    "name": "Mallee Cliffs Sandplains",
                    "percentCleared": "30"
                },
                {
                    "id": 293,
                    "name": "Mandurama Slopes",
                    "percentCleared": "79"
                },
                {
                    "id": 294,
                    "name": "Mangrove Creek Valley",
                    "percentCleared": "9"
                },
                {
                    "id": 295,
                    "name": "Manitoba Hills and Footslopes",
                    "percentCleared": "94"
                },
                {
                    "id": 296,
                    "name": "Manna Hills and Footslopes",
                    "percentCleared": "63"
                },
                {
                    "id": 297,
                    "name": "Manning - Macleay Barriers and Beaches",
                    "percentCleared": "24"
                },
                {
                    "id": 298,
                    "name": "Manning - Macleay Channels and Floodplai",
                    "percentCleared": "86"
                },
                {
                    "id": 299,
                    "name": "Manning - Macleay Channels and Floodplains",
                    "percentCleared": "86"
                },
                {
                    "id": 300,
                    "name": "Manning - Macleay Coastal Alluvial Plain",
                    "percentCleared": "57"
                },
                {
                    "id": 301,
                    "name": "Manning Great Escarpment Southern Aspect",
                    "percentCleared": "25"
                },
                {
                    "id": 302,
                    "name": "Manning Great Escarpment Western Aspects",
                    "percentCleared": "61"
                },
                {
                    "id": 303,
                    "name": "Marilba Range",
                    "percentCleared": "84"
                },
                {
                    "id": 304,
                    "name": "Marma Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 305,
                    "name": "Maroota Sands",
                    "percentCleared": "51"
                },
                {
                    "id": 306,
                    "name": "Marra Alluvial Plains",
                    "percentCleared": "36"
                },
                {
                    "id": 307,
                    "name": "Marra Swamps and Lagoons",
                    "percentCleared": "17"
                },
                {
                    "id": 308,
                    "name": "Marron Hills",
                    "percentCleared": "97"
                },
                {
                    "id": 309,
                    "name": "Mellong Range",
                    "percentCleared": "4"
                },
                {
                    "id": 310,
                    "name": "Menindee Sandplains",
                    "percentCleared": "2"
                },
                {
                    "id": 311,
                    "name": "Merrygoen Hills and Slopes",
                    "percentCleared": "87"
                },
                {
                    "id": 312,
                    "name": "Merulya Alluvial Plains",
                    "percentCleared": "81"
                },
                {
                    "id": 313,
                    "name": "Mid-Darling Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 314,
                    "name": "Mid-Darling Channels and Floodplains",
                    "percentCleared": "8"
                },
                {
                    "id": 315,
                    "name": "Mid-Darling Isolated Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 316,
                    "name": "Mid-Darling Lakes and Swamps",
                    "percentCleared": "3"
                },
                {
                    "id": 317,
                    "name": "Mid-Darling Plains",
                    "percentCleared": "5"
                },
                {
                    "id": 318,
                    "name": "Mid-Darling Tablelands",
                    "percentCleared": "0"
                },
                {
                    "id": 319,
                    "name": "Milton Basalts and Sands",
                    "percentCleared": "33"
                },
                {
                    "id": 320,
                    "name": "Milton Hills",
                    "percentCleared": "74"
                },
                {
                    "id": 321,
                    "name": "Minjary Hills and Ranges",
                    "percentCleared": "61"
                },
                {
                    "id": 322,
                    "name": "Minuma Range",
                    "percentCleared": "10"
                },
                {
                    "id": 323,
                    "name": "Mole Valley",
                    "percentCleared": "74"
                },
                {
                    "id": 324,
                    "name": "Mollyan Hills",
                    "percentCleared": "76"
                },
                {
                    "id": 325,
                    "name": "Molong Ridges",
                    "percentCleared": "79"
                },
                {
                    "id": 326,
                    "name": "Molonglo Channels and Floodplains",
                    "percentCleared": "65"
                },
                {
                    "id": 327,
                    "name": "Molonglo Ranges",
                    "percentCleared": "45"
                },
                {
                    "id": 328,
                    "name": "Monaro Alluvium",
                    "percentCleared": "74"
                },
                {
                    "id": 329,
                    "name": "Monaro Lakes",
                    "percentCleared": "68"
                },
                {
                    "id": 330,
                    "name": "Monaro Plains Basalts and Sands",
                    "percentCleared": "66"
                },
                {
                    "id": 331,
                    "name": "Monaro Plains Granites",
                    "percentCleared": "54"
                },
                {
                    "id": 332,
                    "name": "Monaro Plains Meta-sediments",
                    "percentCleared": "52"
                },
                {
                    "id": 333,
                    "name": "Mooki - Namoi Channels and Floodplains",
                    "percentCleared": "75"
                },
                {
                    "id": 334,
                    "name": "Mooki Swamps and Lagoons",
                    "percentCleared": "98"
                },
                {
                    "id": 335,
                    "name": "Moonbi - Walcha Granites",
                    "percentCleared": "52"
                },
                {
                    "id": 336,
                    "name": "Mootwingee - Wonaminta Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 337,
                    "name": "Mootwingee - Wonaminta Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 338,
                    "name": "Mootwingee - Wonaminta Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 339,
                    "name": "Mootwingee - Wonaminta Footslopes",
                    "percentCleared": "0"
                },
                {
                    "id": 340,
                    "name": "Mootwingee - Wonaminta Fresh Lakes",
                    "percentCleared": "0"
                },
                {
                    "id": 341,
                    "name": "Mootwingee - Wonaminta Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 342,
                    "name": "Mootwingee - Wonaminta Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 343,
                    "name": "Mootwingee - Wonaminta Salt Lakes and Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 344,
                    "name": "Mootwingee - Wonaminta Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 345,
                    "name": "Mootwingee - Wonaminta Tablelands",
                    "percentCleared": "0"
                },
                {
                    "id": 346,
                    "name": "Moruya Barrier",
                    "percentCleared": "31"
                },
                {
                    "id": 347,
                    "name": "Moruya Channels and Floodplains",
                    "percentCleared": "44"
                },
                {
                    "id": 348,
                    "name": "Moruya Granite Basins",
                    "percentCleared": "32"
                },
                {
                    "id": 349,
                    "name": "Moruya Valley Foothills",
                    "percentCleared": "12"
                },
                {
                    "id": 350,
                    "name": "Moss Vale Highlands",
                    "percentCleared": "54"
                },
                {
                    "id": 351,
                    "name": "Mount David Basalts",
                    "percentCleared": "74"
                },
                {
                    "id": 352,
                    "name": "Mount Foster",
                    "percentCleared": "23"
                },
                {
                    "id": 353,
                    "name": "Mount Horrible Plateau",
                    "percentCleared": "61"
                },
                {
                    "id": 354,
                    "name": "Mount Royal Ridges",
                    "percentCleared": "56"
                },
                {
                    "id": 355,
                    "name": "Mount Royal Tops",
                    "percentCleared": "30"
                },
                {
                    "id": 356,
                    "name": "Mount Warning Exhumed Slopes",
                    "percentCleared": "60"
                },
                {
                    "id": 357,
                    "name": "Mount Warning Plugs",
                    "percentCleared": "31"
                },
                {
                    "id": 358,
                    "name": "Mt Bundarbo Basalt Caps",
                    "percentCleared": "72"
                },
                {
                    "id": 359,
                    "name": "Mt Dromedary - Mumbula Mountain",
                    "percentCleared": "10"
                },
                {
                    "id": 360,
                    "name": "Mt Grenfell Ridges",
                    "percentCleared": "6"
                },
                {
                    "id": 361,
                    "name": "Mt Imlay Peak",
                    "percentCleared": "0"
                },
                {
                    "id": 362,
                    "name": "Mt Murchison Hills and Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 363,
                    "name": "Mt Pleasant Hills and Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 364,
                    "name": "Mullion Slopes",
                    "percentCleared": "93"
                },
                {
                    "id": 365,
                    "name": "Mungo - Marona Dunes",
                    "percentCleared": "1"
                },
                {
                    "id": 366,
                    "name": "Mungo - Marona Lakes and Swamps",
                    "percentCleared": "3"
                },
                {
                    "id": 367,
                    "name": "Mungo - Marona Linear Dunes",
                    "percentCleared": "2"
                },
                {
                    "id": 368,
                    "name": "Mungo - Marona Relic Lakes",
                    "percentCleared": "11"
                },
                {
                    "id": 369,
                    "name": "Mungo - Marona Sandplains",
                    "percentCleared": "15"
                },
                {
                    "id": 370,
                    "name": "Mungo Lakes Complex",
                    "percentCleared": "18"
                },
                {
                    "id": 371,
                    "name": "Murray Channels and Floodplains",
                    "percentCleared": "56"
                },
                {
                    "id": 372,
                    "name": "Murray Depression Plains",
                    "percentCleared": "93"
                },
                {
                    "id": 373,
                    "name": "Murray Lakes",
                    "percentCleared": "69"
                },
                {
                    "id": 374,
                    "name": "Murray Scalded Plains",
                    "percentCleared": "92"
                },
                {
                    "id": 375,
                    "name": "Murray Source-bordering Dunes",
                    "percentCleared": "81"
                },
                {
                    "id": 376,
                    "name": "Murrumbidgee - Tarcutta Channels and Floodplains",
                    "percentCleared": "91"
                },
                {
                    "id": 377,
                    "name": "Murrumbidgee - Tarcutta Lakes",
                    "percentCleared": "75"
                },
                {
                    "id": 378,
                    "name": "Murrumbidgee - Tarcutta Source-bordering",
                    "percentCleared": "97"
                },
                {
                    "id": 379,
                    "name": "Murrumbidgee Channels and Floodplains",
                    "percentCleared": "55"
                },
                {
                    "id": 380,
                    "name": "Murrumbidgee Depression Plains",
                    "percentCleared": "93"
                },
                {
                    "id": 381,
                    "name": "Murrumbidgee Lakes",
                    "percentCleared": "46"
                },
                {
                    "id": 382,
                    "name": "Murrumbidgee Scalded Plains",
                    "percentCleared": "67"
                },
                {
                    "id": 383,
                    "name": "Murrumbidgee Source-bordering Dunes",
                    "percentCleared": "58"
                },
                {
                    "id": 384,
                    "name": "Myall - Forster Barrier System",
                    "percentCleared": "23"
                },
                {
                    "id": 385,
                    "name": "Myall Glen Basalts",
                    "percentCleared": "75"
                },
                {
                    "id": 386,
                    "name": "Myall River Channel and Floodplains",
                    "percentCleared": "54"
                },
                {
                    "id": 387,
                    "name": "Nadgee Coastal Range",
                    "percentCleared": "4"
                },
                {
                    "id": 388,
                    "name": "Namadgi Range Alpine",
                    "percentCleared": "0"
                },
                {
                    "id": 389,
                    "name": "Namadgi Range Montane",
                    "percentCleared": "34"
                },
                {
                    "id": 390,
                    "name": "Namadgi Range Sub-alpine",
                    "percentCleared": "2"
                },
                {
                    "id": 391,
                    "name": "Namoi Aeolian Sands",
                    "percentCleared": "11"
                },
                {
                    "id": 392,
                    "name": "Namoi Alluvial Plains",
                    "percentCleared": "79"
                },
                {
                    "id": 393,
                    "name": "Namoi Channels and Floodplains",
                    "percentCleared": "58"
                },
                {
                    "id": 394,
                    "name": "Nangar Slopes and Ranges",
                    "percentCleared": "84"
                },
                {
                    "id": 395,
                    "name": "Nangarybone Hills",
                    "percentCleared": "31"
                },
                {
                    "id": 396,
                    "name": "Narran Lakes",
                    "percentCleared": "48"
                },
                {
                    "id": 397,
                    "name": "Narromine Hills",
                    "percentCleared": "89"
                },
                {
                    "id": 398,
                    "name": "Nattai Plateau",
                    "percentCleared": "11"
                },
                {
                    "id": 399,
                    "name": "Neckarbo Range",
                    "percentCleared": "0"
                },
                {
                    "id": 400,
                    "name": "Newcastle Coastal Ramp",
                    "percentCleared": "54"
                },
                {
                    "id": 401,
                    "name": "Newnes Plateau",
                    "percentCleared": "4"
                },
                {
                    "id": 402,
                    "name": "Niangala Plateau and Slopes",
                    "percentCleared": "75"
                },
                {
                    "id": 403,
                    "name": "Nimbin Ridges",
                    "percentCleared": "10"
                },
                {
                    "id": 404,
                    "name": "Nombi Plateau and Pinnacles",
                    "percentCleared": "67"
                },
                {
                    "id": 405,
                    "name": "Nowendoc - Yarras Serpentinite",
                    "percentCleared": "49"
                },
                {
                    "id": 406,
                    "name": "Nowra - Durras Coastal Slopes",
                    "percentCleared": "32"
                },
                {
                    "id": 407,
                    "name": "Nundle Hills",
                    "percentCleared": "72"
                },
                {
                    "id": 408,
                    "name": "Nymagee Downs",
                    "percentCleared": "35"
                },
                {
                    "id": 409,
                    "name": "Nymagee Granite Downs",
                    "percentCleared": "46"
                },
                {
                    "id": 410,
                    "name": "Nymagee Incised Streams",
                    "percentCleared": "55"
                },
                {
                    "id": 411,
                    "name": "Nymagee Isolated Bedrock Hills",
                    "percentCleared": "10"
                },
                {
                    "id": 412,
                    "name": "Nymagee Linear Dunes",
                    "percentCleared": "6"
                },
                {
                    "id": 413,
                    "name": "Nymagee Ranges",
                    "percentCleared": "5"
                },
                {
                    "id": 414,
                    "name": "Nymagee Sandplains",
                    "percentCleared": "42"
                },
                {
                    "id": 415,
                    "name": "Nymagee Wide Valleys",
                    "percentCleared": "61"
                },
                {
                    "id": 416,
                    "name": "Nymboida Great Escarpment",
                    "percentCleared": "18"
                },
                {
                    "id": 417,
                    "name": "Nymboida Meta-sediments",
                    "percentCleared": "7"
                },
                {
                    "id": 418,
                    "name": "Oberon - Kialla Granites",
                    "percentCleared": "89"
                },
                {
                    "id": 419,
                    "name": "Old Harbour Lagoon",
                    "percentCleared": "100"
                },
                {
                    "id": 420,
                    "name": "Ophir - Hargraves Plateau",
                    "percentCleared": "84"
                },
                {
                    "id": 421,
                    "name": "Oxley Range",
                    "percentCleared": "0"
                },
                {
                    "id": 422,
                    "name": "Pangee Alluvial Plains",
                    "percentCleared": "71"
                },
                {
                    "id": 423,
                    "name": "Paroo - Warrego Alluvial Plains",
                    "percentCleared": "2"
                },
                {
                    "id": 424,
                    "name": "Paroo - Warrego Channels and Floodouts",
                    "percentCleared": "9"
                },
                {
                    "id": 425,
                    "name": "Paroo - Warrego Isolated Hills",
                    "percentCleared": "0"
                },
                {
                    "id": 426,
                    "name": "Paroo - Warrego Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 427,
                    "name": "Paroo - Warrego Plains",
                    "percentCleared": "2"
                },
                {
                    "id": 428,
                    "name": "Paroo - Warrego Salt Lakes",
                    "percentCleared": "2"
                },
                {
                    "id": 429,
                    "name": "Paroo - Warrego Sandplains",
                    "percentCleared": "1"
                },
                {
                    "id": 430,
                    "name": "Paroo - Warrego Tablelands and Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 431,
                    "name": "Peel Channels and Floodplain",
                    "percentCleared": "84"
                },
                {
                    "id": 432,
                    "name": "Pennant Hills Ridges",
                    "percentCleared": "88"
                },
                {
                    "id": 433,
                    "name": "Picton - Razorback Hills",
                    "percentCleared": "61"
                },
                {
                    "id": 434,
                    "name": "Pinbeyan - Ravine Ranges",
                    "percentCleared": "6"
                },
                {
                    "id": 435,
                    "name": "Port Jackson Basin",
                    "percentCleared": "85"
                },
                {
                    "id": 436,
                    "name": "Port Macquarie Coastal Ramp",
                    "percentCleared": "49"
                },
                {
                    "id": 437,
                    "name": "Purlewaugh Plains",
                    "percentCleared": "75"
                },
                {
                    "id": 438,
                    "name": "Putty Sands",
                    "percentCleared": "7"
                },
                {
                    "id": 439,
                    "name": "Quandong Hills",
                    "percentCleared": "94"
                },
                {
                    "id": 440,
                    "name": "Richmond Range",
                    "percentCleared": "6"
                },
                {
                    "id": 441,
                    "name": "Robertson Basalts",
                    "percentCleared": "74"
                },
                {
                    "id": 442,
                    "name": "Rockley Plains",
                    "percentCleared": "62"
                },
                {
                    "id": 443,
                    "name": "Sassafras - Nerriga Basalts and Gravels",
                    "percentCleared": "47"
                },
                {
                    "id": 444,
                    "name": "Sayers Lake",
                    "percentCleared": "3"
                },
                {
                    "id": 445,
                    "name": "Scone - Gloucester Foothills",
                    "percentCleared": "75"
                },
                {
                    "id": 446,
                    "name": "Scotia Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 447,
                    "name": "Scotia Groundwater Basins",
                    "percentCleared": "3"
                },
                {
                    "id": 448,
                    "name": "Scotia Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 449,
                    "name": "Scotia Sandplains",
                    "percentCleared": "5"
                },
                {
                    "id": 450,
                    "name": "Scotts Craig Hills",
                    "percentCleared": "49"
                },
                {
                    "id": 451,
                    "name": "Scotts Main Range",
                    "percentCleared": "1"
                },
                {
                    "id": 452,
                    "name": "Scropes Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 453,
                    "name": "Scropes Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 454,
                    "name": "Scropes Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 455,
                    "name": "Scropes Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 456,
                    "name": "Scropes Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 457,
                    "name": "Scropes Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 458,
                    "name": "Seven Mile Barrier",
                    "percentCleared": "52"
                },
                {
                    "id": 459,
                    "name": "Shearlegs Hills",
                    "percentCleared": "5"
                },
                {
                    "id": 460,
                    "name": "Shepherds Hill",
                    "percentCleared": "58"
                },
                {
                    "id": 461,
                    "name": "Shoalhaven Alluvial Plain",
                    "percentCleared": "36"
                },
                {
                    "id": 462,
                    "name": "Shoalhaven Channels and Floodplain",
                    "percentCleared": "71"
                },
                {
                    "id": 463,
                    "name": "Shoalhaven Gorge",
                    "percentCleared": "23"
                },
                {
                    "id": 464,
                    "name": "Shoalhaven Tertiary Sands",
                    "percentCleared": "40"
                },
                {
                    "id": 465,
                    "name": "Shooters Hill",
                    "percentCleared": "66"
                },
                {
                    "id": 466,
                    "name": "Silverdale Slopes",
                    "percentCleared": "56"
                },
                {
                    "id": 467,
                    "name": "Slippery Rock Range",
                    "percentCleared": "41"
                },
                {
                    "id": 468,
                    "name": "Snowball High Valley",
                    "percentCleared": "70"
                },
                {
                    "id": 469,
                    "name": "Somersby Plateau",
                    "percentCleared": "31"
                },
                {
                    "id": 470,
                    "name": "Split Yard Plateau",
                    "percentCleared": "33"
                },
                {
                    "id": 471,
                    "name": "Springdale Hills",
                    "percentCleared": "93"
                },
                {
                    "id": 472,
                    "name": "Strathmore Sandstones",
                    "percentCleared": "50"
                },
                {
                    "id": 473,
                    "name": "Stroud Mountains",
                    "percentCleared": "41"
                },
                {
                    "id": 474,
                    "name": "Sturt Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 475,
                    "name": "Sturt Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 476,
                    "name": "Summervale Range",
                    "percentCleared": "10"
                },
                {
                    "id": 477,
                    "name": "Sydney - Newcastle Barriers and Beaches",
                    "percentCleared": "50"
                },
                {
                    "id": 478,
                    "name": "Sydney - Newcastle Coastal Alluvial Plains",
                    "percentCleared": "62"
                },
                {
                    "id": 479,
                    "name": "Sydney Basin Basalt Caps",
                    "percentCleared": "32"
                },
                {
                    "id": 480,
                    "name": "Sydney Basin Diatremes",
                    "percentCleared": "32"
                },
                {
                    "id": 481,
                    "name": "Sydney Basin Western Escarpment",
                    "percentCleared": "29"
                },
                {
                    "id": 482,
                    "name": "Table Top Range",
                    "percentCleared": "75"
                },
                {
                    "id": 483,
                    "name": "Talabung Mountain",
                    "percentCleared": "80"
                },
                {
                    "id": 484,
                    "name": "Talbragar - Upper Macquarie Terrace Sand",
                    "percentCleared": "93"
                },
                {
                    "id": 485,
                    "name": "Tamworth - Keepit Slopes and Plains",
                    "percentCleared": "64"
                },
                {
                    "id": 486,
                    "name": "Tantangara High Plains and Peaks",
                    "percentCleared": "5"
                },
                {
                    "id": 487,
                    "name": "Teriderie Alluvial Plains",
                    "percentCleared": "73"
                },
                {
                    "id": 488,
                    "name": "Teriderie Channels and Floodplains",
                    "percentCleared": "73"
                },
                {
                    "id": 489,
                    "name": "The Needles Basalt Peaks",
                    "percentCleared": "27"
                },
                {
                    "id": 490,
                    "name": "Tia Tops",
                    "percentCleared": "79"
                },
                {
                    "id": 491,
                    "name": "Tibooburra Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 492,
                    "name": "Tibooburra Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 493,
                    "name": "Tibooburra Fresh Lakes and Swamps",
                    "percentCleared": "0"
                },
                {
                    "id": 494,
                    "name": "Tibooburra Ranges",
                    "percentCleared": "0"
                },
                {
                    "id": 495,
                    "name": "Tibooburra Salt Lakes and Playas",
                    "percentCleared": "0"
                },
                {
                    "id": 496,
                    "name": "Tibooburra Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 497,
                    "name": "Tibooburra Tablelands",
                    "percentCleared": "0"
                },
                {
                    "id": 498,
                    "name": "Tinebank Granites",
                    "percentCleared": "2"
                },
                {
                    "id": 499,
                    "name": "Tipperary Hills Granites",
                    "percentCleared": "66"
                },
                {
                    "id": 500,
                    "name": "Tooma Granite Ranges",
                    "percentCleared": "48"
                },
                {
                    "id": 501,
                    "name": "Tottenham Hills",
                    "percentCleared": "55"
                },
                {
                    "id": 502,
                    "name": "Towamba Channel and Floodplain",
                    "percentCleared": "29"
                },
                {
                    "id": 503,
                    "name": "Towamba Granite",
                    "percentCleared": "16"
                },
                {
                    "id": 504,
                    "name": "Towrang Ranges",
                    "percentCleared": "59"
                },
                {
                    "id": 505,
                    "name": "Trangie Terrace",
                    "percentCleared": "86"
                },
                {
                    "id": 506,
                    "name": "Trinkey Plateau",
                    "percentCleared": "42"
                },
                {
                    "id": 507,
                    "name": "Tullamore Hills",
                    "percentCleared": "68"
                },
                {
                    "id": 508,
                    "name": "Tumut Channels and Floodplain",
                    "percentCleared": "98"
                },
                {
                    "id": 509,
                    "name": "Tuross - Eden Barriers and Beaches",
                    "percentCleared": "33"
                },
                {
                    "id": 510,
                    "name": "Tuross Basalts and Sands",
                    "percentCleared": "47"
                },
                {
                    "id": 511,
                    "name": "Tuross Channel and Floodplain",
                    "percentCleared": "73"
                },
                {
                    "id": 512,
                    "name": "Ulandra - Narrabulla Hills and Slopes",
                    "percentCleared": "62"
                },
                {
                    "id": 513,
                    "name": "Upper Castlereagh Alluvial Plains",
                    "percentCleared": "95"
                },
                {
                    "id": 514,
                    "name": "Upper Castlereagh Channels and Floodplains",
                    "percentCleared": "93"
                },
                {
                    "id": 515,
                    "name": "Upper Clarence Channels and Floodplains",
                    "percentCleared": "93"
                },
                {
                    "id": 516,
                    "name": "Upper Darling Isolated Hills",
                    "percentCleared": "17"
                },
                {
                    "id": 517,
                    "name": "Upper Goulburn Valleys and Escarpment",
                    "percentCleared": "57"
                },
                {
                    "id": 518,
                    "name": "Upper Gwydir Channels and Floodplain",
                    "percentCleared": "64"
                },
                {
                    "id": 519,
                    "name": "Upper Hunter Channels and Floodplain",
                    "percentCleared": "96"
                },
                {
                    "id": 520,
                    "name": "Upper Lachlan Channels and Floodplains",
                    "percentCleared": "96"
                },
                {
                    "id": 521,
                    "name": "Upper MacDonald Valleys",
                    "percentCleared": "2"
                },
                {
                    "id": 522,
                    "name": "Upper Macquarie Channels and Floodplains",
                    "percentCleared": "96"
                },
                {
                    "id": 523,
                    "name": "Upper Murrumbidgee Channels and Floodplains",
                    "percentCleared": "95"
                },
                {
                    "id": 524,
                    "name": "Upper Murrumbidgee Gorge",
                    "percentCleared": "79"
                },
                {
                    "id": 525,
                    "name": "Upper Murrumbidgee Valley",
                    "percentCleared": "65"
                },
                {
                    "id": 526,
                    "name": "Upper Namoi Swamps and Lagoons",
                    "percentCleared": "49"
                },
                {
                    "id": 527,
                    "name": "Upper Nepean Gorges",
                    "percentCleared": "31"
                },
                {
                    "id": 528,
                    "name": "Uralla Basalts and Sands",
                    "percentCleared": "92"
                },
                {
                    "id": 529,
                    "name": "Ursino Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 530,
                    "name": "Ursino Linear Dunes",
                    "percentCleared": "0"
                },
                {
                    "id": 531,
                    "name": "Ursino Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 532,
                    "name": "Ursino Tablelands and Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 533,
                    "name": "Valla Granite",
                    "percentCleared": "15"
                },
                {
                    "id": 534,
                    "name": "Varneys Range",
                    "percentCleared": "65"
                },
                {
                    "id": 535,
                    "name": "Wandanadian Coastal Plains",
                    "percentCleared": "11"
                },
                {
                    "id": 536,
                    "name": "Wandanadian Granite",
                    "percentCleared": "3"
                },
                {
                    "id": 537,
                    "name": "Waranary - Yathong Ranges",
                    "percentCleared": "4"
                },
                {
                    "id": 538,
                    "name": "Warraderry Range",
                    "percentCleared": "81"
                },
                {
                    "id": 539,
                    "name": "Warrumba Range and Slopes",
                    "percentCleared": "42"
                },
                {
                    "id": 540,
                    "name": "Warrumbungle Slopes",
                    "percentCleared": "51"
                },
                {
                    "id": 541,
                    "name": "Warrumbungle Tops",
                    "percentCleared": "18"
                },
                {
                    "id": 542,
                    "name": "Watagan Ranges",
                    "percentCleared": "11"
                },
                {
                    "id": 543,
                    "name": "Wauchope Coastal Foothills",
                    "percentCleared": "44"
                },
                {
                    "id": 544,
                    "name": "Weddin Range and Slopes",
                    "percentCleared": "70"
                },
                {
                    "id": 545,
                    "name": "Wellington - Molong Karst",
                    "percentCleared": "99"
                },
                {
                    "id": 546,
                    "name": "Werris Creek Basalt Hills and Valleys",
                    "percentCleared": "80"
                },
                {
                    "id": 547,
                    "name": "White Cliffs Alluvial Plains",
                    "percentCleared": "0"
                },
                {
                    "id": 548,
                    "name": "White Cliffs Sandplains",
                    "percentCleared": "0"
                },
                {
                    "id": 549,
                    "name": "White Cliffs Tablelands and Downs",
                    "percentCleared": "0"
                },
                {
                    "id": 550,
                    "name": "Wingecarribee Swamp",
                    "percentCleared": "79"
                },
                {
                    "id": 551,
                    "name": "Wollemi Ranges",
                    "percentCleared": "5"
                },
                {
                    "id": 552,
                    "name": "Wollondilly - Bindook Tablelands and Gorges",
                    "percentCleared": "38"
                },
                {
                    "id": 553,
                    "name": "Wollondilly Channel and Floodplain",
                    "percentCleared": "21"
                },
                {
                    "id": 554,
                    "name": "Wollongambee Plateau",
                    "percentCleared": "0"
                },
                {
                    "id": 555,
                    "name": "Wonga Hills and Ranges",
                    "percentCleared": "85"
                },
                {
                    "id": 556,
                    "name": "Woodenbong Syenite Plugs",
                    "percentCleared": "41"
                },
                {
                    "id": 557,
                    "name": "Woods Reef Serpentinite",
                    "percentCleared": "45"
                },
                {
                    "id": 558,
                    "name": "Woodstock Basalts",
                    "percentCleared": "99"
                },
                {
                    "id": 559,
                    "name": "Woronora Plateau",
                    "percentCleared": "13"
                },
                {
                    "id": 560,
                    "name": "Wyangla Hills",
                    "percentCleared": "94"
                },
                {
                    "id": 561,
                    "name": "Yallaroi Basalts",
                    "percentCleared": "87"
                },
                {
                    "id": 562,
                    "name": "Yalwal - Tallowal Tableland",
                    "percentCleared": "2"
                },
                {
                    "id": 563,
                    "name": "Yalwal Gorges",
                    "percentCleared": "1"
                },
                {
                    "id": 564,
                    "name": "Yarrangobilly - Cooleman Karst",
                    "percentCleared": "9"
                },
                {
                    "id": 565,
                    "name": "Yarrowitch Basalt Plateau",
                    "percentCleared": "48"
                },
                {
                    "id": 566,
                    "name": "Yass Channels and Floodplain",
                    "percentCleared": "100"
                },
                {
                    "id": 567,
                    "name": "Yengo Plateau",
                    "percentCleared": "3"
                },
                {
                    "id": 568,
                    "name": "Yessabah Karst",
                    "percentCleared": "24"
                },
                {
                    "id": 569,
                    "name": "Young Hills and Slopes",
                    "percentCleared": "91"
                }
            ],
            "landscapeFeatures": [
                {
                    "id": 2,
                    "name": "Name of river"
                },
                {
                    "id": 3,
                    "name": "Name of stream"
                },
                {
                    "id": 4,
                    "name": "Name of estuary"
                },
                {
                    "id": 5,
                    "name": "Name of important wetland"
                },
                {
                    "id": 6,
                    "name": "Name of local wetland"
                },
                {
                    "id": 7,
                    "name": "Connectivity feature"
                },
                {
                    "id": 8,
                    "name": "Area of geological significance"
                },
                {
                    "id": 9,
                    "name": "Any soil hazard features"
                }
            ],
            "ibra": [
                {
                    "id": "BBS",
                    "name": "Brigalow Belt South",
                    "ibraSubRegion": [
                        {
                            "id": "BBS21",
                            "name": "Northern Basalts"
                        },
                        {
                            "id": "BBS22",
                            "name": "Northern Outwash"
                        },
                        {
                            "id": "BBS23",
                            "name": "Pilliga Outwash"
                        },
                        {
                            "id": "BBS24",
                            "name": "Pilliga"
                        },
                        {
                            "id": "BBS25",
                            "name": "Liverpool Plains"
                        },
                        {
                            "id": "BBS26",
                            "name": "Liverpool Range"
                        },
                        {
                            "id": "BBS27",
                            "name": "Talbragar Valley"
                        }
                    ]
                },
                {
                    "id": "NAN",
                    "name": "Nandewar",
                    "ibraSubRegion": [
                        {
                            "id": "NAN02",
                            "name": "Inverell Basalts"
                        },
                        {
                            "id": "NAN03",
                            "name": "Kaputar"
                        },
                        {
                            "id": "NAN04",
                            "name": "Peel"
                        }
                    ]
                },
                {
                    "id": "NNC",
                    "name": "NSW North Coast",
                    "ibraSubRegion": [
                        {
                            "id": "NNC01",
                            "name": "Washpool"
                        },
                        {
                            "id": "NNC02",
                            "name": "Cataract"
                        },
                        {
                            "id": "NNC03",
                            "name": "Dalmorton"
                        },
                        {
                            "id": "NNC04",
                            "name": "Chaelundi"
                        },
                        {
                            "id": "NNC05",
                            "name": "Yuraygir"
                        },
                        {
                            "id": "NNC07",
                            "name": "Macleay Hastings"
                        },
                        {
                            "id": "NNC08",
                            "name": "Carrai Plateau"
                        },
                        {
                            "id": "NNC09",
                            "name": "Macleay Gorges"
                        },
                        {
                            "id": "NNC10",
                            "name": "Upper Manning"
                        },
                        {
                            "id": "NNC11",
                            "name": "Comboyne Plateau"
                        },
                        {
                            "id": "NNC12",
                            "name": "Mummel Escarpment"
                        },
                        {
                            "id": "NNC13",
                            "name": "Barrington"
                        },
                        {
                            "id": "NNC14",
                            "name": "Tomalla"
                        },
                        {
                            "id": "NNC15",
                            "name": "Ellerston"
                        },
                        {
                            "id": "NNC16",
                            "name": "Upper Hunter"
                        },
                        {
                            "id": "NNC17",
                            "name": "Karuah Manning"
                        },
                        {
                            "id": "NNC18",
                            "name": "Rocky River Gorge"
                        },
                        {
                            "id": "NNC19",
                            "name": "Guy Fawkes"
                        }
                    ]
                },
                {
                    "id": "SEC",
                    "name": "South East Corner",
                    "ibraSubRegion": [
                        {
                            "id": "SEC01",
                            "name": "East Gippsland Lowlands"
                        },
                        {
                            "id": "SEC02",
                            "name": "South East Coastal Ranges"
                        },
                        {
                            "id": "SEC03",
                            "name": "Bateman"
                        }
                    ]
                },
                {
                    "id": "SEH",
                    "name": "South Eastern Highlands",
                    "ibraSubRegion": [
                        {
                            "id": "SEH06",
                            "name": "Murrumbateman"
                        },
                        {
                            "id": "SEH07",
                            "name": "Bungonia"
                        },
                        {
                            "id": "SEH08",
                            "name": "Kanangra"
                        },
                        {
                            "id": "SEH09",
                            "name": "Crookwell"
                        },
                        {
                            "id": "SEH10",
                            "name": "Oberon"
                        },
                        {
                            "id": "SEH11",
                            "name": "Bathurst"
                        },
                        {
                            "id": "SEH12",
                            "name": "Orange"
                        },
                        {
                            "id": "SEH13",
                            "name": "Hill End"
                        },
                        {
                            "id": "SEH14",
                            "name": "Bondo"
                        },
                        {
                            "id": "SEH16",
                            "name": "Monaro"
                        }
                    ]
                },
                {
                    "id": "SEQ",
                    "name": "South Eastern Queensland",
                    "ibraSubRegion": [

                        {
                            "id": "SEQ11",
                            "name": "Woodenbong"
                        },
                        {
                            "id": "SEQ12",
                            "name": "Clarence Sandstones"
                        },
                        {
                            "id": "SEQ13",
                            "name": "Clarence Lowlands"
                        }
                    ]
                },
                {
                    "id": "SYB",
                    "name": "Sydney Basin",
                    "ibraSubRegion": [
                        {
                            "id": "SYB01",
                            "name": "Kerrabee"
                        },
                        {
                            "id": "SYB02",
                            "name": "Hunter"
                        },
                        {
                            "id": "SYB04",
                            "name": "Wollemi"
                        },
                        {
                            "id": "SYB05",
                            "name": "Yengo"
                        },
                        {
                            "id": "SYB06",
                            "name": "Wyong"
                        },
                        {
                            "id": "SYB07",
                            "name": "Pittwater"
                        },
                        {
                            "id": "SYB08",
                            "name": "Cumberland"
                        },
                        {
                            "id": "SYB09",
                            "name": "Burragorang"
                        },
                        {
                            "id": "SYB10",
                            "name": "Sydney Cataract"
                        },
                        {
                            "id": "SYB11",
                            "name": "Moss Vale"
                        },
                        {
                            "id": "SYB12",
                            "name": "Illawarra"
                        },
                        {
                            "id": "SYB13",
                            "name": "Ettrema"
                        },
                        {
                            "id": "SYB14",
                            "name": "Jervis"
                        }
                    ]
                }
            ]
        },
        "habitat": {
            "biodiversityConcern": {
                "CE": {
                    "High": "Very high level of concern",
                    "Low": "Moderate level of concern",
                    "Moderate": "High level of concern",
                    "Very high": "Very high level of concern"
                },
                "E": {
                    "High": "High level of concern",
                    "Low": "Lowest level of concern",
                    "Moderate": "Moderate level of concern",
                    "Very high": "Very high level of concern"
                },
                "EP": {
                    "High": "High level of concern",
                    "Low": "Lowest level of concern",
                    "Moderate": "Moderate level of concern",
                    "Very high": "Very high level of concern"
                },
                "V": {
                    "High": "Moderate level of concern",
                    "Low": "Lowest level of concern",
                    "Moderate": "Lowest level of concern",
                    "Very high": "High level of concern"
                }
            },
            "sensitivityClass": [
                {
                    "id": 1,
                    "name": "Very High"
                },
                {
                    "id": 2,
                    "name": "High"
                },
                {
                    "id": 3,
                    "name": "Moderate"
                },
                {
                    "id": 4,
                    "name": "Low"
                }
            ],
            "optionClass": [
                {
                    "id": 1,
                    "name": "Yes"
                },
                {
                    "id": 2,
                    "name": "No"
                }
            ],
            "ecosystemCredit": {
                "ibraSubRegion": [
                    {
                        "id": "BBS22",
                        "name": "Northern Outwash",
                        "threatendedSpecies": [
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "BBS23",
                        "name": "Pilliga Outwash",
                        "threatendedSpecies": [
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "BBS24",
                        "name": "Pilliga",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "BBS25",
                        "name": "Liverpool Plains",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "BBS26",
                        "name": "Liverpool Range",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "NAN02",
                        "name": "Inverell Basalts",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "NAN03",
                        "name": "Kaputar",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEC01",
                        "name": "East Gippsland Lowlands",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEC02",
                        "name": "South East Coastal Ranges",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEQ11",
                        "name": "Woodenbong",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEQ12",
                        "name": "Clarence Sandstones",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEQ13",
                        "name": "Clarence Lowlands",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB01",
                        "name": "Kerrabee",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB02",
                        "name": "Hunter",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB04",
                        "name": "Wollemi",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "north of Batemans Bay",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB05",
                        "name": "Yengo",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB06",
                        "name": "Wyong",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB07",
                        "name": "Pittwater",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB08",
                        "name": "Cumberland",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB09",
                        "name": "Burragorang",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB10",
                        "name": "Sydney Cataract",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB11",
                        "name": "Moss Vale",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB12",
                        "name": "Illawarra",
                        "threatendedSpecies": [
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SYB13",
                        "name": "Ettrema",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH07",
                        "name": "Bungonia",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH08",
                        "name": "Kanangra",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH09",
                        "name": "Crookwell",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH10",
                        "name": "Oberon",
                        "threatendedSpecies": [
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH11",
                        "name": "Bathurst",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH13",
                        "name": "Hill End",
                        "threatendedSpecies": [
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH14",
                        "name": "Bondo",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "SEH16",
                        "name": "Monaro",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (foraging habitat)",
                                "scientificName": "Cryptostylis hunteriana",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10207",
                                "name": "Spotted-tailed quoll",
                                "scientificName": "Delma impar",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": ">25ha",
                                "percentCover": "31-70%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Moderate",
                                "pct": [

                                ]
                            },
                            {
                                "id": "10455",
                                "name": "Swift parrot",
                                "scientificName": "Prasophyllum petilum",
                                "habitatComponents": "",
                                "creditType": "EC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "area",
                                "sensitivity": "Low",
                                "pct": [

                                ]
                            }
                        ]
                    }
                ]
            },
            "speciesCredit": {
                "ibraSubRegion": [
                    {
                        "id": "BBS21",
                        "name": "Northern Basalts",
                        "threatendedSpecies": [
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS22",
                        "name": "Northern Outwash",
                        "threatendedSpecies": [
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS23",
                        "name": "Pilliga Outwash",
                        "threatendedSpecies": [
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10666",
                                "name": "Tarengo leek orchid",
                                "scientificName": "Astrotricha crassifolia",
                                "habitatComponents": "forb-rich grassy groundlayer",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10738",
                                "name": "Monaro golden daisy",
                                "scientificName": "Diuris tricolor",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS24",
                        "name": "Pilliga",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10246",
                                "name": "Creeping Hop-bush",
                                "scientificName": "Stagonopleura guttata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10246",
                                "name": "Creeping Hop-bush",
                                "scientificName": "Stagonopleura guttata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "Lake Bathurst area",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10246",
                                "name": "Creeping Hop-bush",
                                "scientificName": "Stagonopleura guttata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "the Cooma-Monaro Shire south of Michelago",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS25",
                        "name": "Liverpool Plains",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS26",
                        "name": "Liverpool Range",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10799",
                                "name": "Black-eyed susan",
                                "scientificName": "Dichanthium setosum",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "BBS27",
                        "name": "Talbragar Valley",
                        "threatendedSpecies": [
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "NAN02",
                        "name": "Inverell Basalts",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "NAN03",
                        "name": "Kaputar",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "NAN04",
                        "name": "Peel",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "Kosciuszko National Park",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEC01",
                        "name": "East Gippsland Lowlands",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10074",
                                "name": "Thick-leaf Star-hair",
                                "scientificName": "Neophema pulchella",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10595",
                                "name": "Hairy geebung",
                                "scientificName": "Melanodryas cucullata cucullata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEC02",
                        "name": "South East Coastal Ranges",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10592",
                                "name": "Bargo geebung",
                                "scientificName": "Ninox connivens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10593",
                                "name": "Mittagong geebung",
                                "scientificName": "Rutidosis leiolepis",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10595",
                                "name": "Hairy geebung",
                                "scientificName": "Melanodryas cucullata cucullata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEC03",
                        "name": "Bateman",
                        "threatendedSpecies": [
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10595",
                                "name": "Hairy geebung",
                                "scientificName": "Melanodryas cucullata cucullata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEQ11",
                        "name": "Woodenbong",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEQ12",
                        "name": "Clarence Sandstones",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEQ13",
                        "name": "Clarence Lowlands",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB01",
                        "name": "Kerrabee",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB02",
                        "name": "Hunter",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB04",
                        "name": "Wollemi",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "west of Dalton",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "north of Batemans Bay",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB05",
                        "name": "Yengo",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB06",
                        "name": "Wyong",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10666",
                                "name": "Tarengo leek orchid",
                                "scientificName": "Astrotricha crassifolia",
                                "habitatComponents": "forb-rich grassy groundlayer",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB07",
                        "name": "Pittwater",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "eastern third of sub_CMA",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB08",
                        "name": "Cumberland",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB09",
                        "name": "Burragorang",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10799",
                                "name": "Black-eyed susan",
                                "scientificName": "Dichanthium setosum",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB10",
                        "name": "Sydney Cataract",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB11",
                        "name": "Moss Vale",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10592",
                                "name": "Bargo geebung",
                                "scientificName": "Ninox connivens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB12",
                        "name": "Illawarra",
                        "threatendedSpecies": [
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB13",
                        "name": "Ettrema",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SYB14",
                        "name": "Jervis",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10592",
                                "name": "Bargo geebung",
                                "scientificName": "Ninox connivens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10593",
                                "name": "Mittagong geebung",
                                "scientificName": "Rutidosis leiolepis",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10595",
                                "name": "Hairy geebung",
                                "scientificName": "Melanodryas cucullata cucullata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH06",
                        "name": "Murrumbateman",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH07",
                        "name": "Bungonia",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10074",
                                "name": "Thick-leaf Star-hair",
                                "scientificName": "Neophema pulchella",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10187",
                                "name": "Leafless tongue orchid",
                                "scientificName": "Glossopsitta pusilla",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "3 individuals",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH08",
                        "name": "Kanangra",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH09",
                        "name": "Crookwell",
                        "threatendedSpecies": [
                            {
                                "id": "10074",
                                "name": "Thick-leaf Star-hair",
                                "scientificName": "Neophema pulchella",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH10",
                        "name": "Oberon",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "south of Grabben Gullen",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH11",
                        "name": "Bathurst",
                        "threatendedSpecies": [
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH12",
                        "name": "Orange",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10802",
                                "name": "Austral Toadflex",
                                "scientificName": "Persoonia bargoensis",
                                "habitatComponents": "coastal headlands, grassland, grassy open forest or woodland on fertile or moderately fertile soils",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10815",
                                "name": "Tylophora linearis",
                                "scientificName": "",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH14",
                        "name": "Bondo",
                        "threatendedSpecies": [
                            {
                                "id": "10061",
                                "name": "Pink-tailed legless lizard",
                                "scientificName": "Acacia pendula \u00e2\u20ac\u201c endangered population",
                                "habitatComponents": "land containing surface rocks (embedded or loose)",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    },
                    {
                        "id": "SEH16",
                        "name": "Monaro",
                        "threatendedSpecies": [
                            {
                                "id": "10006",
                                "name": "Bynoe\u00e2\u20ac\u2122s wattle",
                                "scientificName": "Dodonaea procumbens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10074",
                                "name": "Thick-leaf Star-hair",
                                "scientificName": "Neophema pulchella",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10157",
                                "name": "Large-eared Pied-bat (breeding habitat)",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "land containing escarpments, cliffs, caves, deep crevices, old mine shafts or tunnels",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Individual",
                                "sensitivity": "High",
                                "pct": []
                            },
                            {
                                "id": "10211",
                                "name": "Striped legless lizard",
                                "scientificName": "Mixophyes balbus",
                                "habitatComponents": "land containing loose surface rock, cracking surface soils or tussock clumps",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Low",
                                "pct": []
                            },
                            {
                                "id": "10221",
                                "name": "Bluegrass",
                                "scientificName": "Climacteris picumnus victoriae",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10373",
                                "name": "Small-flower grevillea",
                                "scientificName": "Tyto tenebricosa",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10483",
                                "name": "Green and golden bell frog",
                                "scientificName": "Pomatostomus temporalis temporalis",
                                "habitatComponents": "land within 100 m of emergent aquatic or riparian vegetation",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10536",
                                "name": "Stuttering frog",
                                "scientificName": "Lathamus discolor",
                                "habitatComponents": "rainforest or tall open wet forest with understorey and\/or leaf litter and within 100 m of streams",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "31-70%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10538",
                                "name": "Giant barred frog",
                                "scientificName": "Petalura gigantea",
                                "habitatComponents": "Permanent freshwater coastal and escarpment streams with pools and riffles and about 20m of adjacent forest. Generally moist riparian vegetation (e.g. rainforest or wet sclerophyll), although sometimes drier forest or degraded riparian remnants.",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "11-30%",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10592",
                                "name": "Bargo geebung",
                                "scientificName": "Ninox connivens",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10593",
                                "name": "Mittagong geebung",
                                "scientificName": "Rutidosis leiolepis",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10595",
                                "name": "Hairy geebung",
                                "scientificName": "Melanodryas cucullata cucullata",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "",
                                "percentCover": "",
                                "threatStatus": "E",
                                "offsetMultiplier":  1,
                                "soiThreashold": "0",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            },
                            {
                                "id": "10616",
                                "name": "Koala",
                                "scientificName": "Chalinolobus dwyeri",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "5-25ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "V",
                                "offsetMultiplier":  1,
                                "soiThreashold": "",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Moderate ",
                                "pct": []
                            },
                            {
                                "id": "10841",
                                "name": "Regent honeyeater",
                                "scientificName": "Varanus rosenbergi",
                                "habitatComponents": "",
                                "creditType": "SC",
                                "patchSize": "<5ha",
                                "percentCover": "\u00e2\u2030\u00a410%",
                                "threatStatus": "CE",
                                "offsetMultiplier":  1,
                                "soiThreashold": "to be confirmed - breeding locations",
                                "geographicCondition": "",
                                "unitOfMeasure": "Area",
                                "sensitivity": "Very high",
                                "pct": []
                            }
                        ]
                    }
                ]
            }
        },
        "rateOfIncrease": {
            "structure": {
                "treeCover": 0.196,
                "shrubCover": 0.222,
                "grassAndGrassLikeCover": 0.249,
                "forbCover": 0.160,
                "fernCover": 0.160
            },
            "composition": {
                "treeRichness": 0.044,
                "shrubRichness": 0.035,
                "grassAndGrassLikeRichness": 0.044,
                "forbRichness": 0.018,
                "fernRichness": 0.018
            },
            "function": {
                "numberOfLargeTrees": 0.030,
                "litterCover": 0.410,
                "coarseWoodyDebris": 0.250
            }
        },
        "restorationModifierForPlanting": {
            "structure": {
                "treeCover": 0.966,
                "shrubCover": 0.966,
                "grassAndGrassLikeCover": 0.966,
                "forbCover": 0.966,
                "fernCover": 0.966,
                "otherCover": 0
            },
            "composition": {
                "treeRichness": 0.966,
                "shrubRichness": 0.966,
                "grassAndGrassLikeRichness": 0.966,
                "forbRichness": 0.966,
                "fernRichness": 0.966,
                "otherRichness": 0
            },
            "function": {

            }
        },
        "benefitForPlanting": {
            "structure": {
                "treeCover": 0,
                "shrubCover": 0,
                "grassAndGrassLikeCover": 0,
                "forbCover": 0,
                "fernCover": 0
            },
            "composition": {
                "treeRichness": 0,
                "shrubRichness": 0,
                "grassAndGrassLikeRichness": 0,
                "forbRichness": 0,
                "fernRichness": 0
            },
            "function": {
                "numberOfLargeTrees": 0,
                "litterCover": 0.01,
                "coarseWoodyDebris": 0
            }
        }
    }
})
