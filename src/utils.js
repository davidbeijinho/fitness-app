const CONSTANS = {
    LEVEL_RATIOS: {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9,
    },
    GOAL: {
        1: 0,
        2: 500,
        3: -500,
    }
};;

function calculateMBASAL(data) {
    if (data.sex === 'MALE') {
        return 665 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age);
    } else {
        return 66 + (13.7 * data.weight) + (5 * data.height) - (6.8 * data.age);
    }
};

function calculateLevelCENAS(mBasal, level) {
    return mBasal * CONSTANS.LEVEL_RATIOS[level];
};

function calculateGoalCENAS(level, goal) {
    return level + CONSTANS.GOAL[goal];
};

export default {
    calculateMBASAL,
    calculateLevelCENAS,
    calculateGoalCENAS
};