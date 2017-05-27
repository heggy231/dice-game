import React, { PropTypes } from 'react';

const leftOrRight = id => (
    id === 0 ? 'right' : 'left'
);
const Player = ({ id, totalScore, currentScore, active }) => (
    <div className={`player-${id}-panel ${active}`}>
        <div className='player-name' id={`name-${id}`}>Player {id + 1}</div>
        <div 
            id={`score-${id}`}
            className={`player-score player-score-${leftOrRight(id)}`} 
        >
            { totalScore }
        </div>
        <div className='player-current-box'>
            <div className='player-current-label'>Current</div>
            <div 
                className='player-current-score' 
                id={`current-${id}`}
            >
                { currentScore }
            </div>
        </div>
    </div>
);

Player.proptypes = {
    id: PropTypes.number.isRequired,
    currentScore: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
};



export default Player;
