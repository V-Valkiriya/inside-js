// #todo

'use strict';

let userInput = '';
let index = 0;

while (true) {
  index += 1;
  userInput = prompt(`enter anything with 'e' or 'E' as ${index + 1}th letter`);
  if (userInput === null || userInput === '') {
    alert('try again');
  } else if (userInput.length <= index) {
    alert('too short');
  } else if (userInput[index] === 'e' || userInput[index] === 'E') {
    break;
  } else {
    alert(`enter no has 'e' or 'E' as ${index}th letter`);
  }
}

alert(`done: "${userInput}"`);
