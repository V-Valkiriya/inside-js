// #todo

'use strict';

let userInput = '';
const whiteSpaceReg = new RegExp('\\s', 'g');
let userConfirmed;

while (true) {
  userInput = prompt('Enter a word for filter');

  if (userInput === null || userInput === '') {
    alert('nope, try again');
  } else if (whiteSpaceReg.test(userInput)) {
    alert('Thw word can`t have white space');
  } else {
    userConfirmed = confirm(
      'Do you want to filter this word?\n\n' + '- "' + userInput + '"',
    );
    if (userConfirmed === true) {
      break;
    }
  }
}

const removeLetters =
  confirm(`What would you like to remove from "${userInput}"? 
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeLetters) {
  toRemove = 'aeiou';
} else {
  toRemove = 'bcdfghjklmnpqrstvwxyz';
}

let filterInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLocaleLowerCase();
  if (toRemove.includes(lowerCaseCharacter)) {
    filterInput += character;
  }
}

const finalMessage = alert(`"${userInput}" -> "${filterInput}"`);
