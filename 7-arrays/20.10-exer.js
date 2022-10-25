/*
Write a function that takes a string as an argument. Your job is to return the middle character of the word. 

If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(str) {

// logic here

}

getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

export function getMiddle(str) {
  let result = "";
  let middlePartIndex = Math.floor(str.length / 2);
  const isStrLengthEven = str.length % 2 === 0;

  if (isStrLengthEven) {
    result = str.slice(middlePartIndex - 1, middlePartIndex + 1);
  } else {
    result = str.slice(middlePartIndex, middlePartIndex + 1);
  }
  return result;
}


/*
export function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    return str.slice((str.length - 1) / 2, (str.length - 1) / 2 + 1);
  }
}


export function getMiddle(str) {
  if (str.length % 2 === 0) {
    // check if the string length is even
    const middle = Math.floor(str.length / 2); //find the middle
    return str.slice(middle - 1, middle + 1); // slice the middle characters
  } else {
    // the string length is odd
    const middle = Math.floor(str.length / 2); //find the middle
    return str.slice(middle, middle + 1); // slice the middle characters
  }
}


export function getMiddle(str) {
  return str.substr(
    Math.ceil(str.length / 2 - 1),
    str.length % 2 === 0 ? 2 : 1
  );
}

export function getMiddle(str) {
  let position, length;
  if (str.length % 2 === 0) {
    position = str.length / 2 - 1;
    length = 2;
  } else {
    position = (str.length - 1) / 2;
    length = 1;
  }

  return str.substring(position, position + length);
}


export function getMiddle(str) {
  // logic here
  //const splitstr=str.split('');
  let middle_chars = "";
  //console.log(splitstr);
  let index = 0;
  if (str.length % 2 === 0) {
    index = str.length / 2;
    middle_chars = console.log(str.substring(index - 1, index + 1));
    return middle_chars;
  } else {
    index = str.length / 2;
    middle_chars = console.log(str.substring(index, index + 1));
    return middle_chars;
  }
}

console.log(abTest("aabb"));


export function getMiddle(str) {
  let startIndex = Math.floor(str.length / 2 + (str.length % 2));
  let endIndex = Math.floor(startIndex - (str.length % 2) + 1);
  return str.substring(startIndex - 1, endIndex);
}


export function getMiddle(str) {
  let wordPosition;
  let wordLength;
  if (str.length % 2 === 1) {
    wordPosition = str.length / 2;
    wordLength = 1;
  } else {
    wordPosition = str.length / 2 - 1;
    wordLength = 2;
  }
  return str.substring(wordPosition, wordPosition + wordLength);
}


export function getMiddle(str) {
  let even;
  even = str.length % 2 === 0 ? (even = true) : (even = false);
  let leng = str.length;
  let middle;
  middle = even
    ? (middle = str[leng / 2 - 1] + str[leng / 2])
    : (middle = str[(leng - 1) / 2]);
  return middle;
}

*/