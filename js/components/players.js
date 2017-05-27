import React from 'react';
import Player from '../components/player';

const Players = ({ players }) => (  
    <div> 
        { players.map(({ id, totalScore, currentScore, active }) =>( 
            <Player  
                key={id} 
                id={id} 
                totalScore={totalScore} 
                currentScore={currentScore} 
                active={active} 
            /> 
        ) 
        ) } 
    </div> 
);

Players.defaultProps = {
    players: [
        { id: 0, currentScore: 0, totalScore: 0 },
        { id: 1, currentScore: 0, totalScore: 0 }
    ]
};

export default Players;
