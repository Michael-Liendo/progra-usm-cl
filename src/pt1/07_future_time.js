import { prompt } from "../utils/stdin.js";

let currentTime = parseInt(await prompt("Current Time: "));
let numberHours = parseInt(await prompt("Number of hours: "));

let futureTime = new Date();
futureTime.setHours(currentTime + numberHours);

console.log(
  `In ${numberHours}  hours, the clock will strike ${futureTime.getHours()}`
);
