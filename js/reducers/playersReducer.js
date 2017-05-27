import { UPDATE_SCORE } from '../constants';

const INITIAL_STATE = [
  { id: 0, currentScore: 0, totalScore: 0 },
  { id: 1, currentScore: 0, totalScore: 0 }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return Object.assign([], state, action.payload);
    default:
      return state;
  }
};
