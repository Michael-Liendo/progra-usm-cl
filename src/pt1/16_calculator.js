import { prompt } from "../utils/stdin.js";

let operatingOne = parseInt(await prompt("Operanting: "));
let operator = await prompt("Operator: ");
let operatingTwo = parseInt(await prompt("Operanting: "));

console.log(eval(operatingOne + operator + operatingTwo));
