import { RESET_PLAYERS, UPDATE_SCORE, UPDATE_GLOBAL_SCORE } from '../constants';

const INITIAL_STATE = [
  { id: 0, currentScore: 0, totalScore: 0 },
  { id: 1, currentScore: 0, totalScore: 0 }
];

const getCurrentPlayer = (id, state) => (
  state.find((player) => (
      player.id === id
    ))
);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      const { id, currentScore } = action.payload;
      const currentPlayer = getCurrentPlayer(id, state);
      // if (!!currentScore){ return state } //eslint-disable-line
      currentPlayer.currentScore = currentScore !== 1 ? 
                                   currentPlayer.currentScore + currentScore : 0;
      return state.map((player) => (
        player.id === action.id ? currentPlayer : player
      ));
    }
    case UPDATE_GLOBAL_SCORE: {
      const { id } = action.payload;
      const currentPlayer = getCurrentPlayer(id, state);
      currentPlayer.totalScore += currentPlayer.currentScore;
      currentPlayer.currentScore = 0;
      return state.map((player) => (
        player.id === action.id ? currentPlayer : player
      ));
    }
    case RESET_PLAYERS: 
      return INITIAL_STATE;
    default:
      return state;
  }
};
