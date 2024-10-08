//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

// 1
const greaterThanOrEqualTo25 = numbers.filter((number) => number >= 25);

// 2
const isDivisibleBy5 = numbers.filter((number) => number % 5 === 0);

// To check our work
console.log(greaterThanOrEqualTo25);
console.log(isDivisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

// 3
const numbersSquared = numbers.map((number) => number * number);

// 4
const numbersMultipliedBy2 = numbers.map((number) => number * 2);

// To check our work
console.log(numbersSquared);
console.log(numbersMultipliedBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

//5
const greaterThanOrEqualTo20Squared = numbers
  .filter((number) => number >= 20)
  .map((number) => number * number);

// 6
const isDivisibleBy5MultipliedBy3 = numbers
  .filter((number) => number % 5 === 0)
  .map((number) => number * 3);

// To check our work
console.log(greaterThanOrEqualTo20Squared);
console.log(isDivisibleBy5MultipliedBy3);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const array = [2, 4, 6, 8];

function logger(array) {
  array.forEach((number) => {
    console.log(number);
  });
}

// To check our work
logger(array);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/


const temperatures = [90, 100, 110, 120];

function toCelcius(temperatures) {
  const tempsInCelcius = temperatures.map(
    (temperature) => (temperature - 32) * (5 / 9)
  );
  return tempsInCelcius;
}

// To check our work
console.log(toCelcius(temperatures));


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/


const threshhold = 100;

function hottestDays(temperatures, threshhold) {
  const tempsExceededThreshhold = temperatures.filter(
    (temperature) => temperature > threshhold
  );
  return tempsExceededThreshhold;
}

// To check our work
console.log(hottestDays(temperatures, threshhold));


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/


function logHottestDays(temperatures, threshhold) {
    temperatures
      .filter((temperature) => temperature > threshhold)
      .map((temperature) => (temperature - 32) * (5 / 9))
      .forEach((temperature) => console.log(temperature));
  }

// To check our work
logHottestDays(temperatures, threshhold);
