'use strict'

alert(
  `Enter as many inputs as you want.
  
  When you're done entering strings press "cancel"`
);

// -- gather user input --
const text = [];
while (true) {
  const input = prompt('enter the next phrase or press "cancel"');

  if (input === '') {
    confirm('nothing is not allowed');
    continue;
  } 
  
  if (input === null) {
    break;
  } else {
    text.push(input)
  }
  }
console.log(text);




