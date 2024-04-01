#! /usr/bin/env node
console.log("guess a num between 1 t0 10");
let a = Math.floor(Math.random() * 10);
import inquirer from 'inquirer';
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "enter your guess number you want:" });
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct");
        break;
    }
    else {
        console.log("your guess number is wrong");
    }
}
