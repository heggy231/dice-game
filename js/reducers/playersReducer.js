import { UPDATE_SCORE } from '../constants';

const INITIAL_STATE = [
  { id: 0, active: 'active', currentScore: 0, totalScore: 0 },
  { id: 1, currentScore: 0, totalScore: 0 }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      const { id, currentScore } = action.payload;
      const currentPlayer = state.find((player) => (
        player.id === id
      ));

      currentPlayer.currentScore = currentScore !== 1 ? 
                                   currentPlayer.currentScore + currentScore : 0;
      return Object.assign([], state, currentPlayer);
    }
    default:
      return state;
  }
};
