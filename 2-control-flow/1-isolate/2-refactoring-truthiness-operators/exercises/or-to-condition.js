// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Valeriya';
const lastName = 'Kovnirenko';
console.log(firstName, lastName);

const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
if (hasAnAName) {
  firstName[0] === 'A';
} else lastName[0] === 'A';
console.log(hasAnAName);

console.log('-- end --');
