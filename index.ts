#!/usr/bin/env node

import inquirer from "inquirer";

//1) computer will generate a random number
//2) User input guessing number
//3) compare user input with computer generated number and show result

//const randomNumber = 13;   (ya agr hum btayengay k kia number hoga)

// const randomNumber = Math.random();
// console.log(randomNumber);
const randomNumber = Math.floor(Math.random() * 10 +1);
//console.log(randomNumber);
const answers = await inquirer.prompt([{
    name:"userGuessdNumber",
    type: "number",
    message:"please guess a number between 1-10",
}]);
if (answers.userGuessdNumber === randomNumber){
    console.log("Congratulations you guessed a right number.");
} else {
    console.log("You guessed wrong number");
}
