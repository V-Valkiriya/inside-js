// #todo

import { keepLongStrings } from './keep-long-strings.js';

describe('comparing arrays in unit tests', () => {
  describe('deep comparisons', () => {
    it('empty string', () => {
      const arr1 = keepLongStrings([]);
      expect(arr1).toEqual([]);
    });
    it('long words', () => {
      const arr1 = keepLongStrings(['experiment', 'boring', 'cooking']);
      expect(arr1).toEqual(['experiment', 'boring', 'cooking']);
    });
    it('short words', () => {
      const arr1 = keepLongStrings(['a', 'ab', 'abc', 'abcd']);
    expect(arr1).toEqual([]);
    });
    it('shorts and long words', () => {
      const arr1 = keepLongStrings(['experiment', 'a', 'ab', 'boring', 'abc', 'cooking', 'abcd']);
      expect(arr1).toEqual(['experiment', 'boring', 'cooking']);
    });
    
  });
  describe('there are side-effects', () => {
    it('does modify the array argument if mix of short and long words', () => {
      const arg = ['experiment', 'a', 'ab', 'boring', 'abc', 'cooking', 'abcd'];
      keepLongStrings(arg);
      expect(arg !== ['experiment', 'a', 'ab', 'boring', 'abc', 'cooking', 'abcd']).toEqual(true);
    });
  });
});
