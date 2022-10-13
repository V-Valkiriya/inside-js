// #todo

'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log(letter);
}

// write this for...of loop as a for loop:

for (let i = 0; i < school.length; i++) {
  const letter = school[i];
  console.log(letter);
}

// write this for loop as a while loop:

let i = 0;
while (i < school.length) {
  const letter = school[i];
  i++;
  console.log(letter);
}

console.log('-- end --');
