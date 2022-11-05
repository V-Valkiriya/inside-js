// #todo

import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    // write at least 5 more tests
    it('"helloollleh" should return "helloolleh"', () => {
expect(reverseAString('helloolleh')).toEqual('helloolleh');
    });
    it('"sweeter" should return "reteews"', () => {
      expect(reverseAString('sweeter')).toEqual('reteews');
    });
    it('"sniewpop" should return "popweins"', () => {
      expect(reverseAString('sniewpop')).toEqual('popweins');
    });
    it('"hello-olleh" should return "hello-olleh"', () => {
expect(reverseAString('hello-olleh')).toEqual('hello-olleh');
    });
    it('"cat-and-dog" should return "god-dna-tac"', () => {
      expect(reverseAString('cat-and-dog')).toEqual('god-dna-tac');
    });
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
    it('17 should return "text is not a string"', () => {
      expect(reverseAString(17)).toEqual('text is not a string');
    });
    it('NaN should return "text is not a string"', () => {
      expect(reverseAString(NaN)).toEqual('text is not a string');
    });
    it('null should return "text is not a string', () => {
      expect(reverseAString(null)).toEqual('text is not a string');
    });
  });
});
