// #todo

'use strict';

let userInput = null;
while (true) {
  userInput = prompt('Please, tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('Please try again');
  } else if (userInput.toLowerCase().includes('frog')) {
    break;
  }
}

const finalMessage = alert(
  'Thank you for information ' + '"' + userInput + '"',
);
