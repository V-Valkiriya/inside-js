// #todo

'use strict';

let userNumber = '';

while (true) {
  const userImput = prompt('Please, enter a number');

  if (userImput === null || userImput === '') {
    alert('enter something');
    continue;
  }

  userNumber = Number(userImput);
  if (Number.isNaN(userNumber)) {
    alert(`"${userImput} is not a number`);
  } else {
    break;
  }
}

if (userNumber % 2 === 0) {
  alert(`"${userNumber}" is even`);
} else {
  alert(`"${userNumber}" is odd`);
}
