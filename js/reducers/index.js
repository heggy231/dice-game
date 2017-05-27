import { combineReducers } from 'redux';
import players from './playersReducer';
import rounds from './roundsReducer';

export default combineReducers({
    rounds, players
 });
