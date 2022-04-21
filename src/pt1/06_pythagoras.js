import { prompt } from "../utils/stdin.js";

let firstHick = parseInt(await prompt("Put the first Hick: "));
let secondHick = parseInt(await prompt("Put the second Hick: "));

let hypotenuse = Math.sqrt(firstHick ** 2 + secondHick ** 2);

console.log(`The hypotenuse is: ${hypotenuse}`);
