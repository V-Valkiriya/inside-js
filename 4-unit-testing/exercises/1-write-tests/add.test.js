// #todo

'use strict';

/**
 * Adds two numbers together.
 
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const exer = (x = 0, y = 0) => {
  return x + y;
};


describe('check the sum og arguments', () => {
  describe('returns numbers unchanged', () => {
    it('arguments equel 1 and 2', () => {
      const expected = exer(1, 2);
      const actual = 3;
      expect(expected).toEqual(actual);
    });
    // ...
  });
  describe('returns empty string', () => {
    it('arguments equel empty string', () => {
      const expected = exer('', '');
      const actual = '';
      expect(expected).toEqual(actual);
    });
    // ...
  });
  // ...
});
