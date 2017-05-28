import React from 'react';
import Players from '../containers/players';
import RollDiceButton from '../containers/roleDiceButton';
import HoldButton from '../containers/holdButton';

const DiceGame = ({ dice }) => (
  <div className='wrapper clearfix'>
    <Players />
    
    <button className='btn-new'>
        <i className='ion-ios-plus-outline' />New game
    </button>
    <RollDiceButton />
    <HoldButton />
    
    <img src={`images/huge-dice${dice.number}.png`} alt='Dice' className='dice' />
</div>
);

export default DiceGame;
