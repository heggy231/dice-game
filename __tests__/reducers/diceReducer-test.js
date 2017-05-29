import DiceReducer from '../../js/reducers/diceReducer';
import { RESET_DICE, ROLE_DICE } from '../../js/constants';

const INITIAL_STATE = { number: 1 };

describe('Rounds reducer test', () => {
    describe('ROLE_DICE', () => {
        it('update the dice state', () => {
            const state = DiceReducer(INITIAL_STATE, { type: ROLE_DICE });
            const num = state.number;
            expect(state).toEqual({ number: num });
        });
    });
   
    describe('RESET_DICE', () => {
        it('reset dice state to 0', () => {
            const state = DiceReducer(INITIAL_STATE, { type: RESET_DICE });
            expect(state).toEqual({ number: 0 });
        });
    });
});
