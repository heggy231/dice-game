import { RESET_DICE, ROLE_DICE } from '../constants';

const INITIAL_STATE = { number: 1 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROLE_DICE:
      return Object.assign({}, state, { number: Math.floor((Math.random() * 6) + 1) });
    case RESET_DICE:
      return Object.assign({}, state, { number: 0 });
    default:
      return state;
  }
};
