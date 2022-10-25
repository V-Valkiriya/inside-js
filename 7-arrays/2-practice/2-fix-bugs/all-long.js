// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) { // 5
    const next = strings[i];
    if (next.length < long) {  // 4 < 3 // 
      allAre = false;
      break;
    }
  }
  return allAre;
};

allLong(['ab', 'abcd', 'abc', 'abcde', 'xyz'], 3);