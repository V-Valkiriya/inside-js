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
  const regex = arr[index];
  const newArr = arr.toString().replace(regex, newEntry);
  return newArr.split(',');
};


console.log(replaceEntry(['a', 'b', 'c'], 0, 'x'));


