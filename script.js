'use strict';
let diceImage = document.querySelector(".dice")
const player1 = document.querySelector(".player--0")
const player2 = document.querySelector(".player--1")

let playing, currentScore, activePlayer, score;

const newGame = function(){
  score = [0, 0]
  currentScore = 0;
  activePlayer = 0;
  playing = true

  player1.classList.add("player--active")
  player2.classList.remove("player--active")
  player1.classList.remove("player--winner")
  player2.classList.remove("player--winner")

  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0
  document.getElementById(`current--1`).textContent = 0
}
newGame()

function switchingPlayer(){
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}

document.querySelector(".btn--roll").addEventListener("click", function(){
  if (playing){
    let dice = Math.trunc(Math.random()*6)+1;
    diceImage.src = `dice-${dice}.png`
    if(dice !== 1){
      diceImage.classList.remove("hidden")
      document.getElementById(`current--${activePlayer}`).textContent = currentScore += dice
    }else if (dice === 1){
      switchingPlayer()
}}
})

document.querySelector(".btn--hold").addEventListener("click",
 function(){
  if (playing){
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
  }
    if (score[activePlayer] >= 100 || currentScore >= 100){
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      playing = false
      diceImage.classList.add("hidden")
     }else{
      switchingPlayer()
     }
  
})

document.querySelector(".btn--new").addEventListener("click", newGame)


if (score[activePlayer] >= 10){
  playing = false
}






// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//       // document.querySelector(".current").classList.toggle("hidden") i was just cross checking how hidden works to know about hidden visit hidden style in CSS
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
