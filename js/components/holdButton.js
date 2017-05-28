import React from 'react';

const RoleDiceButton = ({ togglePlayer, addScoreToGlobal, rounds }) => (  
    <button 
        onClick={() => { togglePlayer(); addScoreToGlobal(rounds.player); }}
        className='btn-hold'
    >
        <i className='ion-ios-download-outline' /> Hold
    </button>
);

export default RoleDiceButton;
