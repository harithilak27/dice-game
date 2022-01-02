'use strict';

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const score1 = document.querySelector('.score-0');
const score2 = document.querySelector('.score-1');
const current1 = document.getElementById('current-0');
const current2 = document.getElementById('current-1');
const btnNew = document.querySelector('.new');
const btnRoll = document.querySelector('.roll');
const btnHold = document.querySelector('.hold');
const rollDice = document.querySelector('.dice');

let score, activePlayer, currentScore, playing;

const init = function (){ 

 score =[0,0];
 activePlayer = 0;
 currentScore = 0;
 playing = true;


current1.textContent = 0;
current2.textContent = 0;
score1.textContent = 0;
score2.textContent = 0;
rollDice.classList.add('hidden');
player1.classList.remove('winner');
player2.classList.remove('winner');
player1.classList.add('active-player')
player2.classList.remove('active-player')
}
init();

const switchPlayer = function( ){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('active-player');
    player2.classList.toggle('active-player');
};

btnRoll.addEventListener('click', function(){
       if(playing){ 

        rollDice.classList.remove('hidden');

        const dice = Math.floor(1 + Math.random() * 6);

        rollDice.src = `images/${dice}.jpg`;

if (dice !== 1){

    currentScore = currentScore + dice;
    document.getElementById(`current-${activePlayer}`).textContent = currentScore;
}else{
    switchPlayer();
}
}
});

btnHold.addEventListener('click', function() {
if(playing){ 
   score[activePlayer] += currentScore;
   
   document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];

   if(score[activePlayer] >= 50){
     
    playing = false;
    document.querySelector(`.player-${activePlayer}`).classList.add('winner');

    document.querySelector(`.player-${activePlayer}`).classList.remove('active-player');
    rollDice.classList.add('hidden');
   }else{ 
   switchPlayer();
   }
}
});

btnNew.addEventListener('click', init)



