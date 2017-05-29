import React, { PropTypes } from 'react';

const RoleDiceButton = ({ togglePlayer, addScoreToGlobal, rounds }) => (  
    <button 
        onClick={() => { togglePlayer(); addScoreToGlobal(rounds.player); }}
        className='btn-hold'
    >
        <i className='ion-ios-download-outline' /> Hold
    </button>
);

RoleDiceButton.defaultProps = {
    togglePlayer: PropTypes.func.isRequired,
    addScoreToGlobal: PropTypes.func.isRequired
};

export default RoleDiceButton;
