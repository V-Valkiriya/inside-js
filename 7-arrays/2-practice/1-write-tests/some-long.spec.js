// #todo

import { someLong } from './some-long.js';

describe('allLong: checks if all the strings in an array are long', () => {
  describe('checking if all strings are long', () => {
    it('returns false if the array is empty', () => {
      const returned = someLong([]);
      expect(returned).toEqual(false);
    });
    it('returns true if one string is too short', () => {
      const returned = someLong(['ab', 'abcd', 'abc', 'abcde', 'xyz']);
      expect(returned).toEqual(true);
    });
    it('returns false if all strings are too short', () => {
      const returned = someLong(['abc', 'abcd', 'abc', 'ab', 'xyz']);
      expect(returned).toEqual(false);
    });
    it('returns true if all strings are exactly long', () => {
      const returned = someLong(['hyfabc', 'abcxyz', 'xyzprq', 'pqrhgj']);
      expect(returned).toEqual(true);
    });
    it('returns true if all strings are very long', () => {
      const returned = someLong(
        [
          'hyfhyfhyfhyfhyfhyfhyfhyfhyf',
          'abcabcabcabcabcabcabcabc',
          'xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz',
        ],
        3,
      );
      expect(returned).toEqual(true);
    });
  });
  describe('there are no side-effects', () => {
    it('does not modify the array argument', () => {
      const arg = ['ab', 'abcd', 'abc', 'abcde', 'xyz'];
      someLong(arg);
      expect(arg).toEqual(['ab', 'abcd', 'abc', 'abcde', 'xyz']);
    });
  });
});