// 1. Deposit some Money
// 2. determine the number of lines the user wants to bet on
// 3.Collect a betting amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const PromptSync = require("prompt-sync");

// parseFloat turns "17.50" into 17.50 a number wihtout rounding it
const prompt = require("prompt-sync")();// using this allows you to grab users input using the package npm

const deposit = () => {
    while (true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); 

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("invalid deposit amount, try again!");
        } else{
            return numberDepositAmount; //breaks the while loop
        }
    }
    
};
const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = Number(lines);

        if(isNaN(numberOfLines) || numberOfLines > 3 || numberOfLines <= 0) {
            console.log("Invalid Slot lines amount, Try again!")
        } else {
            return numberOfLines;
        }
    }
    
};

const getbet = (balance) => {
    while(true){
        const bet = prompt("Enter the total bet per line: ");
        const numberbet = parseFloat(bet);

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines){
            console.log("Invalid bet...");
        } else {
            return numberbet;
        }

    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getbet(balance);
