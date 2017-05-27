import { TOGGLE_PLAYER } from '../../js/contants';

const myInitialState = {
   player: 1, 
};

describe('Rounds reducer test', () => {
    it('update the current player', () => {
        const state = RoundsReducer(myInitialState, { type: TOGGLE_PLAYER, player: 2 });
        expect(state).toEqual({ player: 2 });
    });
});
