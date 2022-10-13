// #todo

'use strict';

let userInput = null;
while (true) {
  userInput = prompt('Please, enter your name');
  if (userInput === null || userInput === '') {
    alert('Please, try again');
  } else {
    const confirmMessage = 'Is this correct "' + userInput + '" ?';
    const correctConfirm = confirm(confirmMessage);
    if (correctConfirm === true) {
      break;
    }
  }
}

const finalMessage = alert(`Your name is ${userInput}`);
