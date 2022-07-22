// Score variables
let playerScore = 0;
let computerScore = 0;

// Creates the logic for random computer selection
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = (choices[Math.floor(Math.random() * choices.length)]);
    return randomChoice;
}

// This function plays through a round and keeps score.
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} equals ${computerSelection}`);
        alert(`Draw! ${playerSelection} equals ${computerSelection}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        playerScore++;
        console.log(`Player Score: ${playerScore}!`);
        if (playerScore === 3) {
            alert(`You win! Game Over!\nFinal Score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
        } else {
            alert(`You win! ${playerSelection} beats ${computerSelection}!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
        }
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
        console.log(`Computer Score: ${computerScore}!`);
        if (computerScore === 3) {
            alert(`You lose, Game Over!\nFinal Score\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
        } else {
            alert(`You lose! ${computerSelection} beats ${playerSelection}!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
        }
    } else {
        console.log('Please sumbit a valid option!');
        alert('Please sumbit a valid option!');
    }
}

// This function plays the entire game through, best of 5 rounds.
function game() {
    while (playerScore < 3 && computerScore < 3) {
        let playerChoice = prompt('Rock, Paper or Scissors?');
        if (playerChoice === null) {
            break;
        }
        playerChoice = playerChoice.toLowerCase();
        singleRound(playerChoice, computerPlay());
    }
}

// Runs the game function
game();