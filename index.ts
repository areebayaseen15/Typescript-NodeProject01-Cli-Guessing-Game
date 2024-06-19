#!/usr/bin/env node
//                 Project 01: Guessing Number
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

console.log(chalk.magentaBright(figlet.textSync(`
                            LET'S gUESS
  `)));

//1) computer will generate a random number
//2) User input guessing number
//3) compare user input with computer generated number and show result

//const randomNumber = 13;   (ya agr hum btayengay k kia number hoga)

// const randomNumber = Math.random();
// console.log(randomNumber);
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const answers = await inquirer.prompt([
    {
    name: "userGuessdNumber",
    type: "number",
    message:chalk.yellow("please guess a number between 1-10"),
  },
]);
if (answers.userGuessdNumber === randomNumber) {
  console.log(chalk.green("Congratulations you guessed a right number."));
} else {
  console.log(chalk.red("You guessed wrong"));
  
}
