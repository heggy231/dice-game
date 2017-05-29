import * as actions from '../../js/actions/';
import { TOGGLE_PLAYER, RESET_ROUNDS, WINNER_PLAYER } from '../../js/constants';

describe('rounds actions', () => {
  it('should create an action that change the player', () => {
    const expectedAction = { type: TOGGLE_PLAYER };
    expect(actions.togglePlayer()).toEqual(expectedAction);
  });
  it('should create an action to reset rounds to inital state', () => {
    const expectedAction = { type: RESET_ROUNDS };
    expect(actions.resetRounds()).toEqual(expectedAction);
  });
  it('should create an action to reset the dice state', () => {
    const expectedAction = { type: WINNER_PLAYER };
    expect(actions.winnerPlayer()).toEqual(expectedAction);
  });
});
