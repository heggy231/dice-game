import React from 'react';

const NewGameButton = ({ players, resetPlayers, resetRounds }) => (  
    <button 
        className='btn-new'
        onClick={() => { cerosCheck(players, resetPlayers, resetRounds); }}
    >
        <i className='ion-ios-plus-outline' />New game
    </button>
);
const cerosCheck = (players, resetPlayers, resetRounds) => {
    for (const player of players) {
        if (player.totalScore !== 0 || player.currentScore !== 0) {
            console.info(`player.totalScore: ${player.totalScore}; currentScore: ${player.currentScore}`);
            resetPlayers();
            resetRounds();
        }
    }
};

export default NewGameButton;
