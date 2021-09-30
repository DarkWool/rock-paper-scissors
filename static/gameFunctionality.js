let playerScore = 0;
let computerScore = 0;

// Just created this object for testing!
let gameResults = {
    "Rock": {
        win: "You win!, Rock crushes Scissors.",
        lose: "You lose!, the Rock gets covered by Paper.",
    },
    "Scissors": {
        win: "You win!, Paper gets cut by the Scissors.",
        lose: "You lose!, Scissors are not that strong for a Rock.",
    },
    "Paper": {
        win: "You win!, the Paper covers the Rock.",
        lose: "You lose!, Paper gets easily cut by the Scissors."
    },
    "Tie": "This is a tie!"
    }

function computerPlay() {
    // Returns a number between 1 and 3, didn't included a break statement cause we are using return.
    switch (Math.floor(Math.random() * (4 - 1) + 1)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Convert the user input to lowercase.
    playerSelection = playerSelection.toLowerCase();

    // Return an appropiate result based on the inputs.
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return gameResults["Rock"].win;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return gameResults["Rock"].lose;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return gameResults["Scissors"].lose;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return gameResults["Scissors"].win;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return gameResults["Paper"].win;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return gameResults["Paper"].lose;
    } else if (playerSelection === computerSelection) {
        return gameResults["Tie"];
    } else {
        return "Invalid selection, can not determine a winner.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerDecision = computerPlay();
        const playerDecision = prompt("Enter 'Rock', 'Paper' or 'Scissors', good luck!");

        console.log(playRound(playerDecision, computerDecision));
    }

    // Final result of the round.
    if (playerScore > computerScore) {
        console.log("You've won!");
    } else if (playerScore < computerScore) {
        console.log("You've lost!");
    } else {
        console.log("Draw.");
    }
}

game();