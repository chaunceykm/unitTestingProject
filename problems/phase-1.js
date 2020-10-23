/*1. Is Five
Define a function isFive that will return true if a nuber is equal to 5 and false if it is not.
*/
function isFive(num) {
  return (num === 5) 
}

/*2. Is Odd
Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
*/
function isOdd(number) {
  return (number % 2 !== 0);
}

/*3. Log Between Stepper
Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers 
between min and max at step intervals.
*/

function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}
/*4. Fizz Buzz
Define a function fizzBuzz(max) that takes a number and prints
every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not
both. 
*/

function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

/*5. Sum Array
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.
*/
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    sum += num;
  }

  return sum;
}

module.exports = {isFive, isOdd, logBetweenStepper, fizzBuzz, sumArray }