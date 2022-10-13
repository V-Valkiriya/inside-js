// #todo

'use strict';

console.log('-- begin --');

/* Stepping Down

  Stepper Variables change systematically,
    going through a series of values for control flow

  "Stepper" describes how you are using a variable
    this term is not a JavaScript thing
    it's a general programming concept

  for loops are designed for stepping
    i is the stepper in this exercise


  fill in the loop condition and update the stepper variable

*/

const holiday = 'winter solstice';
const message = ' days remaining until ' + holiday;

let tweet = '';
for (let daysToHoliday = 14; daysToHoliday >= 1; daysToHoliday--) {
  tweet = daysToHoliday + message;
  console.log(tweet);

  if (daysToHoliday === 1) {
    console.log('there are 0 days remaining');
  }
}

console.assert(
  tweet === '1 days remaining until winter solstice',
  'there are 0 days remaining',
);

const finalTweet = 'today is ' + holiday + '!';
console.log(finalTweet);

console.log('-- end --');
