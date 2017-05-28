import { combineReducers } from 'redux';
import dice from './diceReducer';
import players from './playersReducer';
import rounds from './roundsReducer';

export default combineReducers({
    dice, players, rounds
 });
