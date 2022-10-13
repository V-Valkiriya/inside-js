// #todo

'use strict';

let sum = 0;
let userInput = '';

while (true) {
  userInput = prompt('enter a number to add, or "done" to finish');
  if (userInput === null || userInput === '') {
    alert('nope, try again');
  } else if (userInput.toLocaleLowerCase() === 'done') {
    break;
  }

  const nextNumber = Number(userInput);
  if (Number.isNaN(nextNumber)) {
    alert(`"${userInput}" is not a number"`);
    continue;
  } else {
    sum += nextNumber;
  }
}

const finalMessage = alert(`The sum of your numbers is: ${sum}`);
