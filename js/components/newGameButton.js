import React from 'react';

const NewGameButton = ({ resetPlayers, resetRounds }) => (  
    <button 
        className='btn-new'
        onClick={() => { resetRounds(); resetPlayers(); }}
    >
        <i className='ion-ios-plus-outline' />New game
    </button>
);

export default NewGameButton;
