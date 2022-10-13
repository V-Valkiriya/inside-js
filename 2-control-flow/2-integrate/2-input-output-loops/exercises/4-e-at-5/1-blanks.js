// #todo

'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  // make sure it is long enough to have an "e" in the 5th letter
  // check if the 5th character is an "e" or "E"
  if (userInput === null || userInput === '') {
    alert('try again');
  } else if (userInput.length < 5) {
    alert('too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
}

alert('done: "' + validInput + '"');
