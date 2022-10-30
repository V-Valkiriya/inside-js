/* ===== import functions ===== */

import { search } from '../utils/search.js';

/* ===== main program (use functions) ===== */
alert(`
enter as many phrases as you want

then enter a search query (case sensitive)
-> only phrases that includes the query will be kept
`);


// -- gather strings --
const strings = [];
while (true) {
  const input = prompt('enter some text or click "cancel"');

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  } else if (input === null) {
    break;
  } else {
    strings.push(input);
    continue;
  }
}
console.log(strings);

// -- get search query --
let query = null;
while (query === null || query === '') {
  query = prompt('enter a search query');
}
console.log(query);

// -- keep only strings that include the search query --
const matches = search(strings, query);
console.log(matches);

// -- generate a message for the user --
alert(`
query ${query}

matches:
- ${matches.join('\n- ')}`);