import { UPDATE_SCORE, UPDATE_GLOBAL_SCORE } from '../constants';

const INITIAL_STATE = [
  { id: 0, currentScore: 0, totalScore: 0 },
  { id: 1, currentScore: 0, totalScore: 0 }
];

const getCurrentPlayer = (id, state) => {
    return state.find((player) => (
      player.id === id
    ));
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      const { id, currentScore } = action.payload;
      const currentPlayer = getCurrentPlayer(id, state);
    
      currentPlayer.currentScore = currentScore !== 1 ? 
                                   currentPlayer.currentScore + currentScore : 0;
      return Object.assign([], state, currentPlayer);
    }
    case UPDATE_GLOBAL_SCORE: {
      const { id } = action.payload;
      const currentPlayer = getCurrentPlayer(id, state);

      currentPlayer.totalScore = currentPlayer.currentScore;
      currentPlayer.currentScore = 0;
      return Object.assign([], state, currentPlayer);
    }
    default:
      return state;
  }
};
