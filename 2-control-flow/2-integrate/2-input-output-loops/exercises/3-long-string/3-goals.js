// #todo

'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = true;
}
while (true) {
  userInput = prompt('Enter anything longer than 5 characters');
  if (userInput === null || userInput === '' || userInput.length <= 5) {
    alert('try again');
  } else {
    break;
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
