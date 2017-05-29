import RoundsReducer from '../../js/reducers/roundsReducer';
import { RESET_ROUNDS, TOGGLE_PLAYER, WINNER_PLAYER } from '../../js/constants';


describe('Rounds reducer test', () => {
    describe('TOGGLE_PLAYER', () => {
        it('update the current player from 0 to 1', () => {
            const state = RoundsReducer({ player: 0 }, { type: TOGGLE_PLAYER });
            expect(state).toEqual({ player: 1 });
        });
        it('update the current player from 1 to 0', () => {
            const state = RoundsReducer({ player: 1 }, { type: TOGGLE_PLAYER });
            expect(state).toEqual({ player: 0 });
        });
    });
   
    describe('WINNER_PLAYER', () => {
        it('set a winner player-0', () => {
            const state = RoundsReducer({ player: 0 }, { type: WINNER_PLAYER });
            expect(state).toEqual({ player: 0, winner: { id: 0 } });
        });
        it('set a winner player-1', () => {
            const state = RoundsReducer({ player: 1 }, { type: WINNER_PLAYER });
            expect(state).toEqual({ player: 1, winner: { id: 1 } });
        });
    });
   
    describe('RESET_ROUNDS', () => {
        it('receives player 0 && winner null', () => {
            const state = RoundsReducer(null, { type: RESET_ROUNDS });
            expect(state).toEqual({ player: 0, winner: null });
        });
    });
});
