/**
 *
 */
export const search = (array, query) => {
  let newStr = [];
  for (let item of array) {
  if (item.includes(query)) {
   newStr.push(item);
  }
  }
  return newStr;
};

