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
    return (665 + (9.6 * data.weight) + (1.8 * data.height)) - (4.7 * data.age);
  }
  return (66.5 + (13.8 * data.weight) + (5 * data.height)) - (6.8 * data.age);
}

function calculateLevel(mBasal, level) {
  return mBasal * CONSTANS.LEVEL_RATIOS[level];
}

function calculateGoal(level, goal) {
  return level + CONSTANS.GOAL[goal];
}

function calculateFinalResults(value) {
  if (value < 1200) {
    return 0;
  } if (value < 1500) {
    return 1;
  } if (value < 2000) {
    return 2;
  } if (value < 2500) {
    return 3;
  } if (value < 3000) {
    return 4;
  } if (value < 3500) {
    return 5;
  }
  return 6;
}

function getFinalResults(value, type, results) {
  return results[type - 1][value];
}

function getText(data) {
  return getFinalResults(
    calculateFinalResults(calculateGoal(
      calculateLevel(
        calculateMBASAL(data),
        data.level,
      ),
      data.goal,
    )),
    data.type, data.results,
  )
    .text;
}

function getLink(data) {
  return getFinalResults(
    calculateFinalResults(calculateGoal(
      calculateLevel(
        calculateMBASAL(data),
        data.level,
      ),
      data.goal,
    )),
    data.type,
    data.results,
  )
    .link;
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
