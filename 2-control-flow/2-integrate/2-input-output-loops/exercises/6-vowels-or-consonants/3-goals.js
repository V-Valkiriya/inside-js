// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');
  /* -- BEGIN: validate input -- */
  let userConfirmed;
  const whiteSpaceRegex = new RegExp('\\s', 'g');

  if (userInput === null || userInput === '') {
    alert('nope, try again');
  } else if (whiteSpaceRegex.test(userInput)) {
    alert('enter cant`t have white space');
  } else {
    userConfirmed = confirm(
      'do you want to filter this word?\n\n' + '- "' + userInput + '"',
    );
    if (userConfirmed === true) {
      break;
    }
    /* -- END: validate input -- */
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
/* -- BEGIN: filter input -- */
for (const character of userInput) {
  const upperCaseCharacter = character.toUpperCase();
  if (toRemove.includes(upperCaseCharacter)) {
    filteredInput += character;
  }
}
/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
