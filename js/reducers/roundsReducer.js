import { TOGGLE_PLAYER } from '../constants';

const INITIAL_STATE = { id: null, results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return { ...state, player: state.payload === 1 ? 2 : 1 };
    default:
      return state;
  }
};
