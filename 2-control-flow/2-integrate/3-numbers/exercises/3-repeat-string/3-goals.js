// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt('enter a phrase to repeat:');
  if (userInput === null || userInput === '') {
    alert('nope, enter something');
    continue;
  }

  const repetitionsInput = prompt('How many times do you want to repeat it?');

  repetitions = Number(repetitionsInput);
  /* -- END -- */

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmMessage = `Is this correct?
   
   -"${userInput}"
   -"${repetitions}"
   `;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }

  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */
let repeatedInput = '';
for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
