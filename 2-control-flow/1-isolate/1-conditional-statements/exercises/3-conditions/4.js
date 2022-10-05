// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use value1, value2 & value3 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = '200';
const value2 = 200;
const value3 = false;
let path = '';

if (value1 === value2 && value2 === value3) {
  path = 'if';
} else if (value1 > value2 && value2 === value3) {
  path = 'else if 1';
} else if (value1 < value2 || value1 > Number(value3)) {
  path = 'else if 2';
} else {
  path = 'else';
}

/*
(Number(value1) !== value2 || Boolean(value2) !== value3) 
(Number(value1) === value2 || value1 < value3)
(value1 !== value2 || value1 < value3) 
(value1 === String(value2) || value1 < value3)
(value1 < value2 || value2 > Number(value3))
*/

console.assert(path === 'else if 2', 'path should be "else if 2"');

console.log('-- end --');
