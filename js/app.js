import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DiceGame from './components/diceGame';
import reducers from './reducers/index';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <DiceGame />
    </Provider>,
    document.getElementById('dice-game')
);
