#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1)
const answer = await inquirer.prompt([
  {
    name: "userNumber",
    type: "number",
    message: "guess number between 1 to 10",
  },
]);

if (answer.userNumber === randomNumber) {
    console.log("you win")
} else {
    console.log("you lose")
}
console.log(`Right Number is ${randomNumber}`)
console.log("The End")