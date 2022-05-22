import { prompt } from '../utils/stdin.js';

let number = await prompt('Put a number: ');

let invertedNumber = number.split('').reverse().join('');

console.log(`You inverted number is: ${invertedNumber}`);
