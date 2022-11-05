// #todo

import { fileToVariable } from './file-to-variable.js';

describe('the functions change names of files.js', () => {
  it('typical name', () => {
    const name = 'file-to-variable.js';
    expect(fileToVariable(name)).toEqual('fileToVariable');
  });
  it('another typical name', () => {
const name = 'do-magic.js';
expect(fileToVariable(name)).toEqual('doMagic');
  });
  it('UpperCase name', () => {
    const name = 'FILE-TO-VARIABLE.js';
    expect(fileToVariable(name)).toEqual('FILETOVARIABLE');
  });
  it('name witn numbers', () => {
    const name = 'file-to-variable-37.js';
    expect(fileToVariable(name)).toEqual('fileToVariable37');
  });
});
describe('the function change names another files', () => {
it('name without .js', () => {
  const name = 'file-to-variable';
  expect(fileToVariable(name)).toEqual('fileToVariable');
});
it('name without minus', () => {
  const name = 'file to variable';
  expect(fileToVariable(name)).toEqual('file to variable');
});
it('numbers instead of letters', () => {
  const name = '123-456-987';
  expect(fileToVariable(name)).toEqual('123456987');
});
it('numbers instead of letters without minus', () => {
  const name = '123 456 789';
  expect(fileToVariable(name)).toEqual('123 456 789');
});
});