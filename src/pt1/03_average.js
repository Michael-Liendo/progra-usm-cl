import { prompt } from '../utils/stdin.js';

console.log('Put your notes.');

let firstNote = parseInt(await prompt('Put your first note: '));
let secondNote = parseInt(await prompt('Put your second note: '));
let thirdNote = parseInt(await prompt('Put your third note: '));
let fourthNote = parseInt(await prompt('Put your fourth note: '));

let totalNotes = firstNote + secondNote + thirdNote + fourthNote;

let notesAverage = totalNotes / 4;

console.log(`Your average notes is ${notesAverage}`);
