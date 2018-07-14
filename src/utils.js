import CONSTANS from './constants';

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