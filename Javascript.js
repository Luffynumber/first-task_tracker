// 1. Deposit some Money
// 2. determine the number of lines the user wants to bet on
// 3.Collect a betting amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again



// parseFloat turns "17.50" into 17.50 a number wihtout rounding it
const prompt = require("prompt-sync")();// using this allows you to grab users input using the package npm

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / numberOfLines){
            console.log("Invalid bet...");
        } else {
            return numberbet;
        }

    }
};

const spin = () =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = [[],[],[]];
    for(let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

reels();
spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getbet(balance);
