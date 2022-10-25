'use strict';
/*
Write a function that checks the occurrence of "a" and "b" to see if a string has the same amount of 'a's and 'b's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

export function abTest(str) {
  const myArray = str.toLowerCase().split('');
  const occurenceOfA = myArray.filter((item) => item === 'a').length;
  const occurenceOfB = myArray.filter((item) => item === 'b').length;
  return occurenceOfA === occurenceOfB;
}

abTest('aabb'); // => should return true
abTest('baabb'); // => should return false
abTest('aabBm'); // => should return true
abTest('zpzpzpp'); // => should return true // when no 'a' and 'b' is present should return true
abTest('zzaa'); // => should return false

export function abTest(str) {
  const myArray = str.toLowerCase().split('');
  const occurenceOfA = myArray.filter((item) => item === 'a').length;
  const occurenceOfB = myArray.filter((item) => item === 'b').length;
  return occurenceOfA === occurenceOfB;
}

/*
export function abTest(str) {
  const arr = str.split("");
  const charA = arr.filter((char) => char === "a" || char === "A");
  const aLength = charA.join().length;
  const charB = arr.filter((char) => char === "b" || char === "B");
  const bLength = charB.join().length;
  return aLength === bLength;
}


export function abTest(str) {
  let occurrenceA = 0;
  let occurrenceB = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase().charAt(i) == "a") {
      occurrenceA = occurrenceA + 1;
    }
    if (str.toLowerCase().charAt(i) == "b") {
      occurrenceB = occurrenceB + 1;
    }
  }
  if (occurrenceA == occurrenceB) {
    return true;
  } else {
    return false;
  }
}

export function abTest(str) {
  let acount = [...str].filter((x) => x.toLowerCase() === "a").length;
  let bcount = [...str].filter((x) => x.toLowerCase() === "b").length;
  if (acount === bcount || (acount === 0 && bcount === 0)) {
    return true;
  } else {
    return false;
  }
}

function abTest(str) {
  const words = str.split("");
  const find_a = words.filter((element) => element.toLowerCase() === "a");
  const find_b = words.filter((element) => element.toLowerCase() === "b");
  let result = (find_a.length === find_b.length);
  return result;
}
console.log(abTest("aabb"));

*/
