import { UPDATE_SCORE } from '../constants';

export const updateScore = (actualPlayerId, currentScore) => ({
    type: UPDATE_SCORE,
    payload: { id: actualPlayerId, currentScore }
});
