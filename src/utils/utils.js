import { RESULTS } from '../data/constants.js';

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
        2: -500,
        3: 500,
    },
};

function calculateMBASAL(data) {
    if (data.sex === 'FEMALE') {
        return 665 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age);
    } else {
        return 66.5 + (13.8 * data.weight) + (5 * data.height) - (6.8 * data.age);
    }
};

function calculateLevel(mBasal, level) {
    return mBasal * CONSTANS.LEVEL_RATIOS[level];
};

function calculateGoal(level, goal) {
    return level + CONSTANS.GOAL[goal];
};

function calculateFinalResults(value) {
    if (value < 1500) {
        return 0;
    } else if (value < 2000) {
        return 1;
    } else if (value < 2500) {
        return 2;
    } else if (value < 3000) {
        return 3;
    } else if (value < 3500) {
        return 4;
    } else {
        return 5;
    }
}

function getFinalResults(value, type) {
    return RESULTS[type][value];
}

function getText(data) {
    return getFinalResults(calculateFinalResults(calculateGoal(calculateLevel(calculateMBASAL(data),data.level),data.goal)), data.goal).text;
}

function getLink(data) {
    return getFinalResults(calculateFinalResults(calculateGoal(calculateLevel(calculateMBASAL(data),data.level),data.goal)), data.goal).link;
}

export default {
    calculateMBASAL,
    calculateLevel,
    calculateGoal,
    calculateFinalResults,
    getFinalResults,
    getText,
    getLink,
};