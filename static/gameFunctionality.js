let playerScore = 0;
let computerScore = 0;

let gameBtns = document.querySelectorAll('.gameBtn');
let restartBtn = document.getElementById('restart');

let scoreboard = document.getElementById('scoreboard');
let message = document.getElementById('message');

// Add events for each button, once the player cicks any of them you should run the game function.
gameBtns.forEach(button => button.addEventListener('click', game));

restartBtn.addEventListener('click', restartGame);

let gameResults = {
    "Rock": {
        win: "You win!, Rock crushes Scissors.",
        lose: "You lose!, the Rock gets covered by Paper.",
    },
    "Paper": {
        win: "You win!, the Paper covers the Rock.",
        lose: "You lose!, Paper gets easily cut by the Scissors."
    },
    "Scissors": {
        win: "You win!, Paper gets cut by the Scissors.",
        lose: "You lose!, Scissors are not that strong for a Rock.",
    },
    "Tie": "This is a tie!"
    }

function computerPlay() {
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

function game(e) {
    // Plays a round only till one of the players reaches 5 points.
    if (playerScore < 5 && computerScore < 5) {
        message.textContent = playRound(e.target.id, computerPlay());
        scoreboard.firstElementChild.textContent = `${playerScore} - ${computerScore}`;
    }

    if (playerScore >= 5) {
        message.classList.add('bold');
        message.textContent = `Congratulations, you've WON!`;
        restartBtn.hidden = false;
    } else if (computerScore >= 5) {
        message.classList.add('bold');
        message.textContent = `Sorry, you've LOST the entire game.`;
        restartBtn.hidden = false;

        gameBtns.forEach(button => button.removeEventListener('click', game));
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;

    message.classList.remove('bold');
    message.textContent = ``;

    scoreboard.firstElementChild.textContent = `${playerScore} - ${computerScore}`;

    restartBtn.hidden = true;
    gameBtns.forEach(button => button.addEventListener('click', game));
}