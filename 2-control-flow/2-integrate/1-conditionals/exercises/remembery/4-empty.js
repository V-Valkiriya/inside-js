// #todo

'use strict';

const instruction =
  'Remembery Game :) \n' +
  'You will be promted to enter 3 phrases. \n' +
  'Next you will be promted to remember one of them. \n' +
  'If it correct, you win!';
alert(instruction);

let input1 = null;
let input2 = null;
let input3 = null;

while (input1 === null || input1 === '') {
  input1 = prompt('Enter your first game phrase');
}
while (input2 === null || input2 === '') {
  input2 = prompt('Enter your second game phrase');
}
while (input3 === null || input3 === '') {
  input3 = prompt('Enter your third game phrase');
}

alert('Ok, your answers is accepted');

// make 3 random numbers
const randomNumber = Math.ceil(Math.random() * 3);
const userGuess = prompt('enter phrase number ' + randomNumber);

let answer = '';
if (randomNumber === 1) {
  answer = input1;
} else if (randomNumber === 2) {
  answer = input2;
} else if (randomNumber === 3) {
  answer = input3;
}

// user`s processing responses
const userAnswer = userGuess === answer;
if (userAnswer) {
  alert('Yes, you win! phrase ' + randomNumber + ' was ' + '"' + answer + '"');
} else {
  alert('no :( \n' + 'try play again');
}
