import { prompt } from '../utils/stdin.js';

console.log('Enter your date of birth.');
let day = parseInt(await prompt('Day: '));
let month = parseInt(await prompt('Month: '));
let year = parseInt(await prompt('Year: '));

let NowDate = new Date();

console.log(NowDate.getFullYear() - year);
