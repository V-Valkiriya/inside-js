// #todo

'use strict';

/**
 *
 */
function reverser(str = '') {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]; 
  }
  return result;
};

describe('reverser: reverses a string', () => {
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('reverses the empty string', () => {
    const returned = reverser('');
    expect(returned).toEqual('');
  });
  it('reverses words with punctuation', () => {
    const returned = reverser('hoy!');
    expect(returned).toEqual('!yoh');
  });
  it('reverses long strings', () => {
    const returned = reverser('!! How is LOUD ??');
    expect(returned).toEqual('?? DUOL si woH !!');
  });
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('has a default parameter', () => {
    const returned = reverser();
    expect(returned).toEqual('');
  });
});
