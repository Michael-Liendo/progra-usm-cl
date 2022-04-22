import { prompt } from "../utils/stdin.js";

let number = parseFloat(await prompt("Put a number: "));

let decimalPart = number - Math.floor(number);

console.log(decimalPart);
