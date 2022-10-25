/*
Today’s task is coming from your uncle.
Your uncle who runs a local grocery store heard that you have been studying JavaScript.
He has a problem with his accounts and decided to ask you for help.
He has a cashier whom he thinks might be stealing.
In order to check past accounts he needs a program that ll tell him how much money should have been
in the safe for a given day.
He asks you to write a function that ll accept two arrays(one earnings which can be positive numbers or zero,
another one with spendings which can be negative numbers and zero) and a weekday, and returns the total amount of cash that should have been in the safe at the end of the given day.
Example:
calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], ‘Wednesday’) // 60
calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], ‘saturDay’) // 150
*/


function calculateEarnings (debit, credit, day) {
  const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const indexOftheday = week.indexOf(day.toLowerCase());
  const debitSlice = debit.slice(0, indexOftheday+1);
  console.log(debitSlice);
  const creditSlice = credit.slice(0, indexOftheday + 1);
  console.log(debitSlice.reduce((partialSum, a) => partialSum + a, 0));
 return debitSlice.reduce((partialSum, a) => partialSum + a, 0) + creditSlice.reduce((partialSum, a) => partialSum + a, 0); 


 
}

console.log(calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wednesday'));
console.log(calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], 'saturDay'));