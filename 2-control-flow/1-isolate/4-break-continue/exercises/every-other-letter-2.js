// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';
//            012345678
const ninghChar = word[9]; // undefined
const eightChar = word[8]; // a
let index = -1;
while (index < word.length) {
  index += 1;

  // skip characters with odd indexes
  if (index % 2 !== 0) {
    continue;
  }

  const nextLetter = word[index];
  console.log(index + ': ' + nextLetter); // p, t, i, o, a
}

console.assert(
  index === word.length,
  'index should be the same as the word length',
);

console.log('-- end --');

const newWord = 'For loops';
for (let i = 0; i < newWord.length; i++) {
  if (newWord[i] === ' ') {
    continue;
  }
  console.log('Value of i:', i);
  console.log(newWord[i]);
}
