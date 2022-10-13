// #todo

'use strict';

let userInput = '';
let inputIsAboutFrogs = false; // change
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  // check if the user entered nothing, or clicked cancel // change
  if (userInput === null || userInput === '') {
    alert('that is not something');
    continue;
  }

  // search the user input for "frog", upper or lower case
  if (userInput.toLowerCase().includes('frog')) {
    inputIsAboutFrogs = true;
    continue;
  }

  alert('nope, not about frogs.  try again.');
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
