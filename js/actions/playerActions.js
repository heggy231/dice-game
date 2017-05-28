import { RESET_PLAYERS, UPDATE_SCORE, UPDATE_GLOBAL_SCORE } from '../constants';

export const updateScore = (actualPlayerId, currentScore) => ({
    type: UPDATE_SCORE,
    payload: { id: actualPlayerId, currentScore }
});

export const addScoreToGlobal = (actualPlayerId) => ({
    type: UPDATE_GLOBAL_SCORE,
    payload: { id: actualPlayerId }
});

export const resetPlayers = () => ({
    type: RESET_PLAYERS
});
