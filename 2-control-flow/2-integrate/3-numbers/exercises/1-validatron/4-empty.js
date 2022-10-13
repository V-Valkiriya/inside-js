// #todo

'use strict';

const userInput = prompt('Enter a number:');
const userNumber = Number(userInput);
const inputNumber = !Number.isNaN(userNumber);

const confirmMessage = `did you really enter a number?

yes -> "ok"
no -> "cancel"
`;

const userThink = confirm(confirmMessage);

const userIsCorrect = userThink === inputNumber;
if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
