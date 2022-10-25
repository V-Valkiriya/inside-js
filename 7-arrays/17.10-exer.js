'use strict';

// findLongestWordLength("Welcome to hack your future"); should return a number.
// findLongestWordLength("Welcome to hack your future"); should return 7.
// findLongestWordLength("Here we will learn the basics of web development") should return 11.

function findLongestWordLength(str) {
  const words = str.split(' ');
  let maxLength = 0;
  words.map((element) => (maxLength = Math.max(maxLength, element.length)));
  return maxLength;
}
console.log(
  findLongestWordLength('Here we will learn the basics of web development'),
);

/* "use strict"
function findLongestWordLength(str) {
  // logic here
  const arr = str.split(" ");
  let longest = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (longest < arr[i].length) {
      longest = arr[i].length;
    }
  }
  return longest;
}
const phras1 = "Welcome to hack your future";
const longestWordLength = findLongestWordLength(phras1);
console.log(longestWordLength);
const phras2 = "Here we will learn the basics of web development";
console.log(findLongestWordLength(phras2));

"use strict"
findLongestWordLength = (str) => {
  const stringSplit = str.split(" "); // the empty string is to separate the word otherwise the word length will be one
  let longestWordLength = 0;
  for (let word = 0; word < stringSplit.length; word++) {
    if (stringSplit[word].length > longestWordLength) {
      longestWordLength = stringSplit[word].length;
      // console.log(longestWordLength);
    }
  }
  return longestWordLength;
};

"use strict"
function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}
console.log(findLongestWordLength("Welcome to hack your future"));

"use strict"
function findLongestWordLength(str) {
  const longerWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longerWord[0].length;
}


"use strict"
function findLongestWordLength(str) {
  const words = str.split(" ");
  const wordsLength = words.map((element) => {
    return element.length;
  });
  return Math.max(...wordsLength); // super nice
}
*/
