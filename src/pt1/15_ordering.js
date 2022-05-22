import { prompt } from '../utils/stdin.js';

let numberOne = parseInt(await prompt('Put a first number: '));
let numberTwo = parseInt(await prompt('Put a number two: '));

if (numberOne > numberTwo) {
  console.log(numberTwo, numberOne);
} else {
  console.log(numberOne, numberTwo);
}
