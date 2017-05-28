import { TOGGLE_PLAYER, RESET_ROUNDS } from '../constants';

export const togglePlayer = () => ({
    type: TOGGLE_PLAYER
});

export const resetRounds = () => ({
    type: RESET_ROUNDS
});
