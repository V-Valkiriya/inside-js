// #todo

/**
 *
 */
export const longToUpper = (strings = [], long = 0) => {;
  const longStrings = [];
  for (const string of strings) {
    if (string.length >= long) {
      longStrings.push(string.toUpperCase());
    } else {
      longStrings.push(string)
    }
  }
  return longStrings;
};

