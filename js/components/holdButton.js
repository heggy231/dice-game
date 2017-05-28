import React from 'react';

const RoleDiceButton = ({ togglePlayer }) => (  
    <button 
        onClick={() => togglePlayer()}
        className='btn-hold'
    >
        <i className='ion-ios-download-outline' /> Hold
    </button>
);

export default RoleDiceButton;
