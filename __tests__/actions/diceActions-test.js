import * as actions from '../../js/actions/';
import { RESET_DICE, ROLE_DICE } from '../../js/constants';

describe('dice actions', () => {
  it('should create an action to role the dice', () => {
    const expectedAction = { type: ROLE_DICE };
    expect(actions.roleDice()).toEqual(expectedAction);
  });
  it('should create an action to reset the dice state', () => {
    const expectedAction = { type: RESET_DICE };
    expect(actions.resetDice()).toEqual(expectedAction);
  });
});
