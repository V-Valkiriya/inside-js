// #todo

'use strict';

let userInput = '';
let unicode;
let unicodeInput;

while (true) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );
  if (userInput === null || userInput === '') {
    alert('nope, try again');
  } else {
    while (true) {
      unicodeInput = prompt(
        'how many unicode numbers do you want the characters to shift?',
      );
      if (unicodeInput === null || unicodeInput === '') {
        alert('enter something');
      } else {
        unicode = Number(unicodeInput);
        if (Number.isNaN(unicode)) {
          alert(`"${unicodeInput}" is not a number`);
        } else {
          break;
        }
      }
    }
    const confirmMessage = `Is this correct?
    - "${userInput}"
    - "${unicodeInput}"`;
    const confirmation = confirm(confirmMessage);
    if (confirmation) {
      break;
    } else {
      continue;
    }
  }
}

let encoded = '';

for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + unicode;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encoded += encodedCharacter;
}

const finalMessage = alert(`"${userInput}" -> "${encoded}"`);
