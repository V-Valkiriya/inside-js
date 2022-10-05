// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'x';
let temp;

// --- swap values ---

temp = a; // 'y'
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');
a = c; // 'x'
console.assert(a === 'x', 'Step 2.1');
console.assert(c === 'x', 'Step 2.2');
c = temp; // 'y'
console.assert(c === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');

temp = c; // 'y'
console.assert(temp === 'y', 'Step 4.1');
console.assert(c === 'y', 'Step 4.2');
c = b; // / 'z'
console.assert(c === 'z', 'Step 5.1');
console.assert(b === 'z', 'Step 5.2');
b = temp; // 'y'
console.assert(b === 'y', 'Step 6.1');
console.assert(temp === 'y', 'Step 6.2');

// --- test final values ---

console.assert(a === 'x', 'Test 1');

console.assert(b === 'y', 'Test 2');

console.assert(c === 'z', 'Test 3');

console.assert(temp === 'y', 'Test 4');

console.log('-- end --');
