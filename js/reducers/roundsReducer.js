import { RESET_ROUNDS, TOGGLE_PLAYER, WINNER_PLAYER } from '../constants';

const INITIAL_STATE = { player: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return { ...state, player: state.player === 0 ? 1 : 0 };
    case WINNER_PLAYER:
      return { ...state, winner: { id: state.player } };  
    case RESET_ROUNDS:
      return { ...state, player: 0, winner: null };
    default:
      return state;
  }
};
