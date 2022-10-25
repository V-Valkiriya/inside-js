// #todo

/**
 *
 */
export const reverseArray = (arr = []) => {
  const backwards = arr.slice().reverse();
  return backwards;
};

const toReverse = [1, 2, 3];
const returned = reverseArray(toReverse);
toReverse !== returned