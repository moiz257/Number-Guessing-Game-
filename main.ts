import inquirer from "inquirer";
import chalk from "chalk";


const randomNumber= Math.floor(Math.random()*10+1)


console.log(chalk.bold.blueBright("         NUMBER GUESSING GAME         "));


const answer=await inquirer.prompt(
    {
        name:"question",
        message:chalk.bold.cyanBright("GUESS THE RIGHT NUMBER."),
        type:"number"
    }
)

if(answer.question===randomNumber){
    console.log(chalk.bold.greenBright("\n GREAT, YOU GUESS THE CORRECT NUMBER!!"));
}
else{
    console.log(chalk.bold.redBright("GUESSED NUMBER IS WRONG !!!"));
    console.log(chalk.bold.green(`\nTHE CORRECT ANSWER IS:${randomNumber}`));
}

console.log(chalk.bold.blueBright("         NUMBER GUESSING GAME         "));

