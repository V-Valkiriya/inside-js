// #todo

'use strict';

let userImput = '';
while (true) {
  userImput = prompt('enter anything witn "e" or "E" as 5th letter');
  if (userImput === null || userImput === '') {
    alert('try again');
  } else if (userImput.length < 5) {
    alert('too shoort');
  } else if (userImput[4] === 'e' || userImput[4] === 'E') {
    break;
  } else {
    alert('enter there isn`t "e" or "E" as 5th letter');
  }
}

alert(`done: "${userImput}"`);
