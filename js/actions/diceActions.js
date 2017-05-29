import { RESET_DICE, ROLE_DICE } from '../constants';

export const roleDice = () => ({
    type: ROLE_DICE
});

export const resetDice = () => ({
    type: RESET_DICE
});
