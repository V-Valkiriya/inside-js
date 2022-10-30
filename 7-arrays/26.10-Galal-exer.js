'use strict'

/*
task of day 
// A Narcissistic Number is a number which is the sum of its own 
// digits, each raised to the power of the number of digits.
// for example, 153 (3 digits), you can see 153 = 1^3 + 5^3 + 3^3
// here 3 is the number of digits contained in 153.
// your job to discover the narcissistic number form this example 
console.log(narcissistic(153)) // return true 
console.log(narcissistic(1634)) // return true 
console.log(narcissistic(234)) // return false
console.log(narcissistic(407)) // return true 
*/

function narcissistic(num) {
  let integerSet = num.toString().split('').map(Number);
  console.log(integerSet);
  const number = integerSet.length;
  const sum = integerSet.reduce((total, item) => total + Math.pow(item, number), 0);
  return sum === num; 
}


  /*
  for (let item of arr) {
    sum = item[0] ** item[1] + item[1] ** item[2] + item[2] ** item[0];
  }
  // sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum === number) {
    return true;
  } else {
     return false;
  }
}
*/

console.log(narcissistic(153));
console.log(narcissistic(1634));
console.log(narcissistic(234)); 
console.log(narcissistic(407));

console.log(5 ** 3);