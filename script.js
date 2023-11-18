let userSelection = null;
let computerSelection = null;
let userVictoryCount = 0;
let computerVictoryCount = 0;
let roundNumber = 0;

function getUserChoise() {
    userSelection = prompt("What's your choise?").toLowerCase();
    return userSelection;
}

function getComputerChoise() {
    computerSelection = ["rock", "paper", "scissors"];
    // makes a random choice from the array
    index = (Math.floor(Math.random() * computerSelection.length));
    return computerSelection = computerSelection[index];
}

function playRound() {
    getComputerChoise();
    getUserChoise() ;
    let userVictory;
    if(userSelection === "rock" && computerSelection === "scissors") {
        userVictory = true;
    } else if(userSelection === "scissors" && computerSelection === "paper") {
        userVictory = true;
    } else if(userSelection === "paper" && computerSelection === "rock") {
        userVictory = true;
    } else {
        userVictory = false;
    }

    if(userVictory === true) {
        userVictoryCount++;
    } else {
        computerVictoryCount++;
    }
                
    roundNumber++;
    // for correct singular and plural
    if(userVictoryCount === 1) {
        console.log(`Round ${roundNumber}: You have ${userVictoryCount} win now!`)
    } else {
        console.log(`Round ${roundNumber}: You have ${userVictoryCount} wins now!`)
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (userVictoryCount > computerVictoryCount) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game.")
    }
}

game()