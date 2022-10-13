// #todo

'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index + 1}th letter`,
  );

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === '') {
    alert('try again');
  } else if (userInput.length <= index) {
    alert('too short');
  } else if (userInput[index] === 'e' || userInput[index] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert(`input has no "e" or "E" as the ${index + 1}th character`);
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
