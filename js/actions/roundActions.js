import { TOGGLE_PLAYER, RESET_ROUNDS, WINNER_PLAYER } from '../constants';

export const togglePlayer = () => ({
    type: TOGGLE_PLAYER
});

export const resetRounds = () => ({
    type: RESET_ROUNDS
});

export const winnerPlayer = () => ({
    type: WINNER_PLAYER
});
