// #todo

'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN;
while (Number.isNaN(userNumber)) {
  let userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue;
  }

  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
