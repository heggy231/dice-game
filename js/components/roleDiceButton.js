import React from 'react';
import PropTypes from 'prop-types'; 

const RoleDiceButton = ({ roleDice }) => (  
    <button className='btn-roll' onClick={roleDice}>
        <i className='ion-ios-loop' />Roll dice
    </button>   
);

RoleDiceButton.defaultProps = {
    roleDice: PropTypes.func.isRequired
};

export default RoleDiceButton;
