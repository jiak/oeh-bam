bamApp.service('calculationService', [function () {
    return {
        getRestorationModifierForPlanting: function (viScore) {
            return (1 / (1 + Math.exp((1 + 4 * (10 / 100)) - viScore / (15 + (4 * 10 / 100)))))
        },
        getStructureRValue: function (type, viScore) {
            if (type == 'Tree') {
                randomConstant = 30
            } else if (type == 'Shrub' || type == 'GrassAndGrassLike') {
                randomConstant = 25
            } else if (type == 'Forb' || type == 'Fern') {
                randomConstant = 20
            }
            if (type == 'Tree' || type == 'Shrub') {
                medianRateOfIncrease = 0.085
            } else if (type == 'GrassAndGrassLike') {
                medianRateOfIncrease = 0.125
            } else if (type == 'Forb') {
                medianRateOfIncrease = 0.08
            } else if (type == 'Fern') {
                medianRateOfIncrease = 0.06
            }
            return ((((medianRateOfIncrease * 1) + 0) * Math.exp(Math.pow(10 / randomConstant, 1.7) * -Math.log(2)) * (1 / (1 + Math.exp(3.5 - viScore / 10)))))
        },
        getCompositionRValue: function (type, viScore) {
            if (type == 'Tree') {
                randomConstant = 30
            } else if (type == 'Shrub' || type == 'GrassAndGrassLike') {
                randomConstant = 25
            } else if (type == 'Forb' || type == 'Fern') {
                randomConstant = 20
            }
            if (type == 'Tree') {
                medianRateOfIncrease = 0.05
            } else if (type == 'Shrub' || type == 'Fern') {
                medianRateOfIncrease = 0.04
            } else if (type == 'GrassAndGrassLike') {
                medianRateOfIncrease = 0.1
            } else if (type == 'Forb') {
                medianRateOfIncrease = 0.09
            }
            if (type == 'Tree' || type == 'GrassAndGrassLike') {
                randomConstant2 = 3.5
            } else {
                randomConstant2 = 4
            }
            return ((((medianRateOfIncrease * 1) + 0) * Math.exp(Math.pow(10 / randomConstant, 1.7) * -Math.log(2)) * (1 / (1 + Math.exp(randomConstant2 - viScore / (10))))));
        },
        getFunctionRValue: function (type, viScore) {
            if (type == 'NumberofLargeTrees') {
                medianRateOfIncrease = 0.01
            } else if (type == 'LitterCover') {
                medianRateOfIncrease = 0.015
            } else if (type == 'CoarseWoodyDebris') {
                medianRateOfIncrease = 0.08
            }
            return ((((medianRateOfIncrease * 1) + 0) * 1 * (1 / (1 + Math.exp(3.5 - viScore / (10))))));
        }
    }
}])





