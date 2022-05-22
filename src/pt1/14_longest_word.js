import { prompt } from '../utils/stdin.js';

let firstWord = await prompt('First word: ');
let secondWord = await prompt('Second word: ');

if (firstWord.length > secondWord.length) {
  console.log(
    `The word ${firstWord} have ${
      firstWord.length - secondWord.length
    } more letters than ${secondWord}`,
  );
} else if (secondWord.length > firstWord.length) {
  console.log(
    `The word ${secondWord} have ${
      secondWord.length - firstWord.length
    } more letters than ${firstWord}`,
  );
} else if (firstWord.length === secondWord.length) {
  console.log('Both words have the same length');
}
