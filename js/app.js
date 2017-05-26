import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DiceGame from './containers/diceGame';
import reducers from './reducers/index';


/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <DiceGame />
    </Provider>,
    document.getElementById('dice-game')
);
