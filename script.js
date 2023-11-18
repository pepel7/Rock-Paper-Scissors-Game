let userSelection = null;
let computerSelection = null;
let userVictoryCount = 0;
let computerVictoryCount = 0;
let roundNumber = 0;
let winner = null;

const scoreCounter = document.querySelector('.score-counter');
scoreCounter.textContent = `${userVictoryCount}:${computerVictoryCount}`

const buttons = document.querySelectorAll('button')
const gameResult = document.querySelector('.game-result');
const img = document.createElement('img')
const imgContainer = document.querySelector('.selection-image')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        userSelection = btn.id;
        img.src = `images/${userSelection}.png`;
        imgContainer.appendChild(img);

        playRound();
        scoreCounter.textContent = `${userVictoryCount}:${computerVictoryCount}`
        getWinner();
        if(winner) {
            gameResult.textContent = `The winner is ${winner}`;
            buttons.forEach((btn) => btn.disabled = true);
            if(winner == 'You') img.src = `images/win.png`;
            else img.src = `images/loss.png`;
        }
    });
    
});

function getComputerChoise() {
    computerSelection = ["rock", "paper", "scissors"];
    // makes a random choice from the array
    index = (Math.floor(Math.random() * computerSelection.length));
    return computerSelection = computerSelection[index];
}

function playRound() {
    getComputerChoise();
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

function getWinner() {
    if(userVictoryCount === 5) winner = 'You';
    if((computerVictoryCount === 5)) winner = 'Mr. PC';
}