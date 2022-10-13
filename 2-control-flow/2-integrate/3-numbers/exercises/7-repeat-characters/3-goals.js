// #todo

'use strict';

let toRepeat = '';
let repetitions = NaN;

let notConfirmed = true;
while (notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    /* -- BEGIN: get a number from the user -- */
    while (true) {
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?',
      );
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
      } else {
        repetitions = Number(repetitionsInput);
        if (Number.isNaN(repetitions)) {
          alert(`"${repetitionsInput}" is not a number`);
        } else {
          break;
        }
      }
    }
    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    const confirmed = confirm(confirmMessage);
    if (confirmed) {
      break;
    }
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */
for (const character of toRepeat) {
  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}
/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
