// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('Please, enter your name');
  if (userInput === null || userInput === '') {
    alert('Please, try again');
    continue;
  } else {
    const confirmMessage = 'Is this correct ' + '"' + userInput + '" ?';
    const confirmCorrect = confirm(confirmMessage);
    if (confirmCorrect === true) {
      break;
    }
  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
