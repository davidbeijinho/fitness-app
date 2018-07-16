import {
  SET_SEX,
  SET_AGE,
  SET_HEIGHT,
  SET_WEIGHT,
  SET_LEVEL,
  SET_GOAL,
  SET_TYPE,
} from '../actions/index';

const defaultState = {
  sex: '',
  age: 0,
  height: 0,
  weight: 0,
  level: 0,
  goal: 0,
  type: 0,
};


function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SEX:
      return {
        ...state,
        sex: action.payload,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload ? action.payload : 0,
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload ? action.payload : 0,
      };
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.payload ? action.payload : 0,
      };
    case SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case SET_GOAL:
      return {
        ...state,
        goal: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
