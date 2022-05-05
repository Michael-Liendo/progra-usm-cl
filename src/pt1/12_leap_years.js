import { prompt } from "../utils/stdin.js";

let year = parseInt(await prompt("Put a year: "));

const leap = new Date(year, 1, 29).getDate() === 29;
if (leap) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
