// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths! 

const value1 = true; // false // false //true
const value2 = false; //false //true //true
let path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if 1';
} else if (value2 && !value1) {
  path = 'else if 2';
} else {
  path = 'else';
}

console.log(path); // if

console.log('-- end --');
