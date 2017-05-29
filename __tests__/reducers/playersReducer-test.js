import PlayersReducer from '../../js/reducers/playersReducer';
import { RESET_PLAYERS, UPDATE_SCORE, UPDATE_GLOBAL_SCORE } from '../../js/constants';


const INITIAL_STATE = [
  { id: 0, currentScore: 0, totalScore: 0 },
  { id: 1, currentScore: 0, totalScore: 0 }
];


describe('Rounds reducer test', () => {
    describe('RESET_PLAYERS', () => {
        it('reset the players state', () => {
            const state = PlayersReducer(null, { type: RESET_PLAYERS });
            expect(state).toEqual(INITIAL_STATE);
        });
    });
   
    describe('UPDATE_SCORE', () => {
        it('update score for player-0', () => {
            const payload = { id: 0, currentScore: 99 };
            const state = PlayersReducer(INITIAL_STATE, { type: UPDATE_SCORE, payload });
            const expectedResponse = [
                { currentScore: 99, id: 0, totalScore: 0 },
                { currentScore: 0, id: 1, totalScore: 0 }
            ];
            expect(state).toEqual(expectedResponse);
        });
        it('update score for player-1', () => {
            const payload = { id: 1, currentScore: 99 };
            const state = PlayersReducer(INITIAL_STATE, { type: UPDATE_SCORE, payload });
            const expectedResponse = [
                { currentScore: 99, id: 0, totalScore: 0 },
                { currentScore: 99, id: 1, totalScore: 0 }
            ];
            expect(state).toEqual(expectedResponse);
        });
    });
   
    describe('UPDATE_GLOBAL_SCORE', () => {
        it('update the total score from a player', () => {
            const payload = { id: 1 };
            const state = PlayersReducer(INITIAL_STATE, { type: UPDATE_GLOBAL_SCORE, payload });
            const expectedResponse = [
                { currentScore: 99, id: 0, totalScore: 0 },
                { currentScore: 0, id: 1, totalScore: 99 }
            ];
            expect(state).toEqual(expectedResponse);
        });
    });
});
