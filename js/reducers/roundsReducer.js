import { TOGGLE_PLAYER } from '../constants';

const INITIAL_STATE = { player: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return { ...state, player: state.player === 0 ? 1 : 0 };
    default:
      return state;
  }
};
