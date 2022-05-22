import { prompt } from '../utils/stdin.js';

let number = parseInt(await prompt('Put you number: '));
console.log(number % 2);
if (number % 2 == 0) {
  console.log('You number is par');
} else if (number % 2 == 1) {
  console.log('You number is impar');
}
