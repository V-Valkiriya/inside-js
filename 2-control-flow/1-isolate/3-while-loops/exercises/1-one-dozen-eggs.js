// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions */

let numberOfEggs = 0;

while (numberOfEggs !== 12) {
  numberOfEggs = numberOfEggs + 12;
  console.log('numberOfEggs:', numberOfEggs);
}

console.assert(numberOfEggs === 12, 'there should be a dozen eggs');

console.log('-- end --');
