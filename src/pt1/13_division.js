import { prompt } from '../utils/stdin.js';

let Dividend = parseInt(await prompt('Put a dividend: '));
let divider = parseInt(await prompt('Put a divider: '));

let quotient = Dividend / divider;
let rest = Dividend % divider;

if (rest !== 0) {
  console.log('The division is not exact.');
  console.log('Quotient ' + quotient);
  console.log('Rest' + rest);
} else {
  console.log('The division is exact.');
  console.log('Quotient ' + quotient);
  console.log('Rest ' + rest);
}
