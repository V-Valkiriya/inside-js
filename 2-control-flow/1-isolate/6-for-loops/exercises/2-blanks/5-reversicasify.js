// #todo

'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = originalString.length - 1; i >= 0; i--) {
  let nextletter = originalString[i].toUpperCase();
  reverseUpperCase += nextletter;
}

console.log(reverseUpperCase);
console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
