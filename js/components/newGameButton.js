import React from 'react';
import PropTypes from 'prop-types'; 

const NewGameButton = (props) => (  
    <button 
        className='btn-new'
        onClick={() => { cerosCheck(props); }}
    >
        <i className='ion-ios-plus-outline' />New game
    </button>
);
const cerosCheck = ({ players, resetPlayers, resetRounds, resetDice }) => {
    for (const player of players) {
        if (player.totalScore !== 0 || player.currentScore !== 0) {
            resetPlayers();
            resetRounds();
            resetDice();
        }
    }
};

NewGameButton.defaultProps = {
    players: PropTypes.array.isRequired,
    resetPlayers: PropTypes.func.isRequired,
    resetRounds: PropTypes.func.isRequired,
};

export default NewGameButton;
