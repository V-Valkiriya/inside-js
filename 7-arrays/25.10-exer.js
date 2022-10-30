'use strict';
/* 
1. Write a function that gets a name of a month as a string and RETURNS which month of the year it is. iIf it is not a month it should return 0.
// Example: findTheMonth(‘August’) should return 8
                    findTheMonth(‘october’) should return 10
                    findTheMonth(‘Tuesday’) should return 0
You must use INDEXOF method
2. Write a function that receives names of students in the order of success in their class and a starting number and an ending number. It should return an array of the names of the students between those numbers(included).
// Example: extractTheOrderOfSuccess(['Annie',  'Shirley', ,Abed', 'Britta', 'Troy', 'Jeff', 'Pierce' ], 2, 6) should return ['Shirley',Abed', 'Britta', 'Troy', 'Jeff']
You must use SLICE method
3. Write a function that takes the sum of the elements of an array.
// Example calculateTheSum([4, 8, 15, 16, 23, 42])
 should return 108 You must use REDUCE method
 */

// 1
function findTheMonth(month) {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const indexOfMonth = months.indexOf(month.toLowerCase());
  if (indexOfMonth < 0) {
    return 0;
  }
  return indexOfMonth + 1;
}

console.log(findTheMonth('August'));
console.log(findTheMonth('october'));
console.log(findTheMonth('Tuesday'));

// 2
function extractTheOrderOfSuccess(array, startNumber, endNumber) {
  return array.slice(startNumber - 1, endNumber);
}

console.log(
  extractTheOrderOfSuccess(
    ['Annie', 'Shirley', 'Abed', 'Britta', 'Troy', 'Jeff', 'Pierce'],
    2,
    6,
  ),
);

// 3
function calculateTheSum(array) {
  return array.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(calculateTheSum([4, 8, 15, 16, 23, 42]));
