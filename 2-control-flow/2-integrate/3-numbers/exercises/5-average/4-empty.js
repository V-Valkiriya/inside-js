// #todo

'use strict';

const instruction = `
calculate the average of many numbers:
  - you must input something
  - input a number and it will be added to the sum
  - input "done" and the program will finish (case insensitive)
  - input anything else and it will be ignored
  when you have finished inputting numbers, the average will be displayed
`;
alert(instruction);

let sum = 0;
let inputCount = 0;

while (true) {
  const userInput = prompt('enter a number to add, or "done" to finish');

  if (userInput === null || userInput === '') {
    alert('nope, try again');
    continue;
  }

  if (userInput.toLowerCase() === 'done') {
    break;
  }

  const nextNumber = Number(userInput);
  if (Number.isNaN(nextNumber)) {
    alert(`"${userInput}" is not a number"`);
    continue;
  }

  sum += nextNumber;
  inputCount += 1;
}

const average = sum / inputCount;
const finalMessage = alert(`The average of your number is: ${average}`);
