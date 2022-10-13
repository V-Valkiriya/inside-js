// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('try again');
  } else if (userInput.length < 5) {
    alert('too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert('enter thare isn`t "e" or "E" as the 5th letter');
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
