export const SET_SEX = 'SET_SEX'
export const SET_AGE = 'SET_AGE'
export const SET_HEIGHT = 'SET_HEIGHT'
export const SET_WEIGHT = 'SET_WEIGHT'
export const SET_LEVEL = 'SET_LEVEL'
export const SET_GOAL = 'SET_GOAL'
export const SET_TYPE = 'SET_TYPE'

export function setSex(payload) {
    return { type: SET_SEX, payload };
}

export function setAge(payload) {
    return { type: SET_AGE, payload };
}

export function setHeight(payload) {
    return { type: SET_HEIGHT, payload };
}

export function setWeight(payload) {
    return { type: SET_WEIGHT, payload };
}

export function setLevel(payload) {
    return { type: SET_LEVEL, payload };
}

export function setGoal(payload) {
    return { type: SET_GOAL, payload };
}

export function setType(payload) {
    return { type: SET_TYPE, payload };
}
