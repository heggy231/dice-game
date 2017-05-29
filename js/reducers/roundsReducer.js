import { RESET_ROUNDS, TOGGLE_PLAYER } from '../constants';

const INITIAL_STATE = { player: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return { ...state, player: state.player === 0 ? 1 : 0 };
    case RESET_ROUNDS:
      return { ...state, player: 0 };
    default:
      return state;
  }
};
