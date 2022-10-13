// #todo

'use strict';

let userInput = '';
let times = '';

while (true) {
  userInput = prompt('Please, enter a phrase to repeat:');
  if (userInput === null || userInput === '') {
    alert('nope, try again');
    continue;
  }

  const timesInput = prompt('How many times do you want repeat it?');

  times = Number(timesInput);

  if (Number.isNaN(times)) {
    alert(`"${timesInput} is not a number`);
    continue;
  }

  const confirmMessage = `Is this correct?
  
  -"${userInput}"
  -"${times}"
  `;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
}

let repeat = '';
for (let i = 0; i < times; i++) {
  repeat += userInput;
}

const finalMessage = alert(`"${userInput}" -> "${repeat}"`);
