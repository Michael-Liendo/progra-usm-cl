import { prompt } from '../utils/stdin.js';

let lapseOne = parseInt(await prompt('Enter lapse note one: '));
let lapseTwo = parseInt(await prompt('Enter lapse note two: '));
let laboratoryNote = parseInt(await prompt('Enter laboratory note: '));

let needNote = (lapseOne + lapseTwo + 0) / (3 + laboratoryNote) - 60;

console.log(`You need ${needNote}`);
