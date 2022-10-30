/**
 * replaces a specific entry in an array
 * this function does not modify the original array
 *
 * @param {Array} [arr=[]] - an array of items, one will be changed
 * @param {number} [index=0] - the index to replace
 * @param {any} newEntry - the value to put at that index
 *
 * @returns {Array} a copy of the array with one entry modified
 */
export const replaceEntry = (arr, index, newEntry) => {
  const copyArray = arr.slice();
  const changeEntry = copyArray.splice(index, 1, newEntry);
  return changeEntry;

};


console.log(replaceEntry(['a', 'b', 'c'], 0, 'x'));

const arr = ['a', 'b', 'c'];
arr.splice(0, 1, 'x');
console.log(arr);