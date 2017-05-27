import React from 'react';
import Players from '../containers/players';

const DiceGame = () => (
  <div className='wrapper clearfix'>
    <Players />
    
    <button className='btn-new'>
        <i className='ion-ios-plus-outline' />New game
    </button>
    <button className='btn-roll'>
        <i className='ion-ios-loop' />Roll dice
    </button>
    <button className='btn-hold'>
        <i className='ion-ios-download-outline' /> Hold
    </button>
    
    <img src='images/huge-dice5.png' alt='Dice' className='dice' />
</div>
);

export default DiceGame;
