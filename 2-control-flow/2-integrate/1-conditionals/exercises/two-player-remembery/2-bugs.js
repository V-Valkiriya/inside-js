// #todo

'use strict';

/* look out fo:

  - variable names

*/

const instructions =
  'Two-Player Remembery.\n\n' +
  'Player 1:\n' +
  'enter three phrases\n\n' +
  'Player 2:\n' +
  'see the three phrases in order\n' +
  'then enter them back in order\n' +
  'if you get one wrong - game over!\n';
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

let score = 3;

const guess1 = prompt('Player 1, enter your first guess:');
if (guess1 !== phrase1) {
  score = score - 1;
} else {
  score = score;
}

const guess2 = prompt('Player 1, enter your second guess:');
if (guess2 !== phrase2) {
  score = score - 1;
} else {
  score = score;
}

const guess3 = prompt('Player 1, enter your third guess:');
if (guess3 !== phrase3) {
  score = score - 1;
} else {
  score = score;
}

alert(`your score: ${score}`);
