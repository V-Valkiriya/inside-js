'use strict';

/* 
Write a function that takes an array as an argument and removes the biggest value of the given array. 
Do not mutate the original array(you need to copy the given array. Remember which methods were using a copy of the original array or how you can copy an original array). 
If multiple elements have the same value, remove the one with a lower index. 
If you get an empty array, return an empty array.
*/

export function removeBiggest(arr) {
  const copiedArray = [...arr]; // we must keep original array by doing this
  const biggestValue = Math.max(...copiedArray); // you can use Math.max here to find max value of given array. Pay attention to syntax :легкая_улыбка:
  const findIndexOfBiggest = copiedArray.findIndex(
    (item) => item === biggestValue,
  ); //you can find the index of the item by using findIndex method.
  copiedArray.splice(findIndexOfBiggest, 1); // splice method is so powerful. We can remove items from any index.
  return copiedArray;
}

// * Input: [1,2,6,4,5], output= [1,2,4,5]
// * Input: [5,3,2,5,4], output = [3,2,5,4]
// * Input: [2,8,11,27,1], output = [2,8,11,1]
// * Input: [], output = []

// return arr.split(',').sort((a, b).arr.pop());

/*
export function removeBiggest(number) {
  const copy = number.concat();
  copy.splice(copy.indexOf(Math.max(...copy)), 1);
  return copy;
}
*/
