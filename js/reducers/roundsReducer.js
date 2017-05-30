import { RESET_ROUNDS, TOGGLE_PLAYER, WINNER_PLAYER } from '../constants';

const INITIAL_STATE = localStorage.getItem('rounds') ? JSON.parse(localStorage.getItem('rounds')) : { player: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER: {
      const rounds = { ...state, player: state.player === 0 ? 1 : 0 };
      localStorage.setItem('rounds', JSON.stringify(rounds));
      return rounds;
    }
    case WINNER_PLAYER: {
      const rounds = { ...state, winner: { id: state.player } };  
      localStorage.setItem('rounds', JSON.stringify(rounds));
      return rounds;
    }
    case RESET_ROUNDS:
      localStorage.removeItem('rounds');    
      return { ...state, player: 0, winner: null };
    default:
      return state;
  }
};
