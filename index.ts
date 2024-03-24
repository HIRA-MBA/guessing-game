#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([{

    type : "number",
    name: "guess_number",
    message : "Please enter a number between 1 to 5 : "
}])

const random_number = Math.floor(Math.random() * 5 + 1)


if (random_number === answer.guess_number){
    console.log("Congragulations , you pick the correct number. ")
}else {
    console.log("sorry, you choose an incorrect number")
    
}