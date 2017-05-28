import React from 'react';

const RoleDiceButton = ({ roleDice }) => (  
    <button className='btn-roll' onClick={roleDice}>
        <i className='ion-ios-loop' />Roll dice
    </button>   
);

export default RoleDiceButton;
