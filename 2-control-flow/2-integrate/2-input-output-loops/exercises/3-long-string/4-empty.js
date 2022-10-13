// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('Please, enter anything longer than 5 characters');
  if (userInput === null || userInput === '') {
    alert('try again');
  } else if (userInput.length <= 5) {
    alert('too short');
  } else {
    break;
  }
}

const finalMessage = alert(
  `" ${userInput} is ${userInput.length} characters long.`,
);
