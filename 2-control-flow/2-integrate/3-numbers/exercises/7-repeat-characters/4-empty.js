// #todo

'use strict';

let repeatInput = '';
let repetTimes = '';

while (true) {
  repeatInput = prompt('enter a phrase, each character will be repeated:');
  if (repeatInput === null || repeatInput === '') {
    alert('nope, try again');
  } else {
    while (true) {
      const repetTimesInput = prompt(
        'how many times do you want to repeat each character?',
      );
      if (repetTimesInput === null || repetTimesInput === '') {
        alert('nope, try again');
      } else {
        repetTimes = Number(repetTimesInput);
        if (Number.isNaN(repetTimes)) {
          alert(`"${repeatInput}" is not a number`);
        } else {
          break;
        }
      }
    }
    const confirmMessage = `Is this correct?
    - "${repeatInput}"
    -"${repetTimes}"`;
    const confirmed = confirm(confirmMessage);
    if (confirmed) {
      break;
    }
  }
}

let repeatCharacters = '';
for (const character of repeatInput) {
  for (let i = 0; i < repetTimes; i++) {
    repeatCharacters += character;
  }
}

const finalMessage = alert(`"${repeatInput}" -> "${repeatCharacters}"`);
