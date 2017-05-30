# Project develop by *Jaime Molina*
#### _Project URL:_ **[jasmo2.github.io/dice-game](https://jasmo2.github.io/dice-game/)**

- should change to *gh-pages* branch to see production webpack configuration
- the project handles a user web refresh using localstorage;

## GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes.
     Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
     After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score.
     After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

### preview
```html
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name" id="name-0">Player 1</div>
        <div class="player-score player-score-left" id="score-0">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-0">11</div>
        </div>
    </div>
    
    <div class="player-1-panel">
        <div class="player-name" id="name-1">Player 2</div>
        <div class="player-score player-score-right" id="score-1">72</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score" id="current-1">0</div>
        </div>
    </div>
    
    <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
    <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
    <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
    
    <img src="images/huge-dice5.png" alt="Dice" class="dice">
</div>
```