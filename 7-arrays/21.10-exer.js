/*
Write a function that takes an array as an argument. 
Your task is to write the repeating elements in the array at the end of the array. 
Return the original array if no duplicate items. 
If there is more than one repeating element, sort the repeating elements from smallest to largest.

function findDuplicate(arr) {

// logic here

}

findDuplicate([1,2,4,5,4,8]) should return [1,2,5,8,4,4]
findDuplicate([1,2,3]) should return [1,2.3]
findDuplicate([5,5,1,6,7,4]) should return [1,6,7,4,5,5]
findDuplicate([1,2,11,2,5,11]) should return [1,5,2,2,11,11]
*/

const findDuplicate = (numArr) => {
  const noDuplicate = [];
  const duplicates = [];

  numArr.forEach((element, i) => {
    if (duplicates.indexOf(element) !== -1) {
      duplicates.push(element);
      return;
    }
    const rest = numArr.slice(i + 1);
    if (rest.indexOf(element) !== -1) {
      duplicates.push(element);
    } else {
      noDuplicate.push(element);
    }
  });
  return noDuplicate.concat(duplicates.sort((a, b) => a - b));
};

console.log(findDuplicate([1, 2, 4, 5, 4, 8]));
