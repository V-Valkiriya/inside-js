// #todo

'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const userNumber = Number(userString);
const inputIsANumber = !Number.isNaN(userNumber);
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const configMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = confirm(configMessage);
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
