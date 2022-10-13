// #todo

'use strict';

const insruction = alert(`Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`);

alert('Player2, please go hide');

const phrase1 = prompt('Player1, enter your first phrase');
const phrase2 = prompt('Player1, enter your second phrase');
const phrase3 = prompt('Player1, enter your third phrase');

alert('Player1, please, call the Player2');

alert(`Player2, remember phrases:
1: "${phrase1}"
2: "${phrase2}"
3: "${phrase3}"`);

let score = 0;

const guess1 = prompt('Player2, enter first phrase');
if (guess1 === phrase1) {
  score += 1;
}

const guess2 = prompt('Player2, enter second phrase');
if (guess2 === phrase2) {
  score += 1;
}

const guess3 = prompt('Player2, enter third phrase');
if (guess3 === phrase3) {
  score += 1;
}

alert(`The end. Your score: ${score}`);
