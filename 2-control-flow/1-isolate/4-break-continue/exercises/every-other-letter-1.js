// #todo

'use strict';

console.log('-- begin --');

const word = 'pitsicola';
//            012345678

let index = 0;
let logThisOne = true;
while (index < word.length) {
  // 0 < 9
  index += 1;

  logThisOne = !logThisOne;
  if (logThisOne !== false) {
    continue;
  }

  const nextLetter = word[index];
  console.log(index + ': ', nextLetter); // i, s, c, l //1 3 5 7
}

console.assert(
  index === word.length,
  'there are this many letters in the word',
);

console.log('-- end --');
