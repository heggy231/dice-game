import React,{ PropTypes } from 'react';
import Players from '../containers/players';
import RollDiceButton from '../containers/roleDiceButton';
import HoldButton from '../containers/holdButton';
import NewGameButton from '../containers/newGameButton';

const DiceGame = ({ dice }) => (
  <div className='wrapper clearfix'>
    <Players />
    
    <NewGameButton />
    <RollDiceButton />
    <HoldButton />
    
    <img src={`images/huge-dice${dice.number}.png`} alt='Dice' className='dice' />
</div>
);

DiceGame.defaultProps = {
    dice: PropTypes.object.isRequired,
    rounds: PropTypes.object.isRequired
};

export default DiceGame;
