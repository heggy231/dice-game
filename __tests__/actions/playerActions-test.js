import * as actions from '../../js/actions/';
import { RESET_PLAYERS, UPDATE_SCORE, UPDATE_GLOBAL_SCORE } from '../../js/constants';

describe('player actions', () => {
  it('should create an action to reset the players global state', () => {
    const expectedAction = { type: RESET_PLAYERS };
    expect(actions.resetPlayers()).toEqual(expectedAction);
  });
  it('update player score', () => {
    const payload = { id: 0, currentScore: 30 };
    const expectedAction = {
      type: UPDATE_SCORE,
      payload
    };
    expect(actions.updateScore(payload.id, payload.currentScore)).toEqual(expectedAction);
  });
  it('update player global score', () => {
    const payload = { id: 0 };
    const expectedAction = {
      type: UPDATE_GLOBAL_SCORE,
      payload
    };
    expect(actions.addScoreToGlobal(0)).toEqual(expectedAction);
  });
});
