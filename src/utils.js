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
    FILES: {
        1: [
            {
                text: '<1500 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
            {
                text: '1500 – 2000 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
            {
                text: '2000 – 2500 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
            {
                text: '2500 – 3000 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
            {
                text: '3000 – 3500 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
            {
                text: '>3500 ganha peso com facilidade',
                link: 'www.coisas.fixes',
            },
        ],
        2: [
            {
                text: '<1500 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
            {
                text: '1500 – 2000 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
            {
                text: '2000 – 2500 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
            {
                text: '2500 – 3000 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
            {
                text: '3000 – 3500 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
            {
                text: '>3500 ganha massa muscular facilidade',
                link: 'www.xvideos.com',
            },
        ],
        3: [
            {
                text: '<1500 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
            {
                text: '1500 – 2000 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
            {
                text: '2000 – 2500 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
            {
                text: '2500 – 3000 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
            {
                text: '3000 – 3500 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
            {
                text: '>3500 tenho muita dificuldade em ganhar peso',
                link: 'www.buecenas.com'
            },
        ],
    }
};;

function calculateMBASAL(data) {
    if (data.sex === 'FEMALE') {
        return 665 + (9.6 * data.weight) + (1.8 * data.height) - (4.7 * data.age);
    } else {
        return 66.5 + (13.8 * data.weight) + (5 * data.height) - (6.8 * data.age);
    }
};

function calculateLevelCENAS(mBasal, level) {
    return mBasal * CONSTANS.LEVEL_RATIOS[level];
};

function calculateGoalCENAS(level, goal) {
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

function getFileFromFinalResults(value, type) {
    return CONSTANS.FILES[type][value];
}

export default {
    calculateMBASAL,
    calculateLevelCENAS,
    calculateGoalCENAS,
    calculateFinalResults,
    getFileFromFinalResults
};