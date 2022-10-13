// #todo

'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
  if (userInput === null || userInput === '') {
    alert('enter something!');
    continue;
  }

  userNumber = Number(userInput);
  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not number" `);
  } else {
    break;
  }
  /* -- END -- */
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
