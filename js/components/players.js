import React from 'react';
import Player from '../components/player';

const Players = ({ players, rounds }) => (  
    <div> 
        { players.map(({ id, totalScore, currentScore }) => ( 
            <Player  
                key={id} 
                id={id} 
                totalScore={totalScore} 
                currentScore={currentScore} 
                active={id === rounds.player ? 'active' : null} 
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
