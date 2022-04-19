import { prompt } from "../utils/stdin.js";

let centimeters = parseInt(
  await prompt("Put centimeters for convert in inches:  ")
);

let inches = centimeters / 2.54;

console.log(`${centimeters} centimeters is ${inches.toFixed(4)} Inches`);
