import { prompt } from '../utils/stdin.js';

const radius = await prompt('Put you circle radius: ');

let area = Math.PI * radius ** 2;
let perimeter = 2 * Math.PI * radius;

console.log(
  `You circle...\n 
  Perimeter is: ${perimeter.toFixed(2)} \n 
  Area is: ${area.toFixed(2)}`,
);
