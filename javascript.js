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
        console.log(`Draw! ${playerSelection} equals ${computerSelection}`)
        alert(`Draw! ${playerSelection} equals ${computerSelection}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`)
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        playerScore = playerScore + 1;
        console.log(`Player Score: ${playerScore}!`)
        alert(`You win! ${playerSelection} beats ${computerSelection}!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`)
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === "paper" && playerSelection === "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        computerScore = computerScore + 1;
        console.log(`Computer Score: ${computerScore}!`)
        alert(`You lose! ${computerSelection} beats ${playerSelection}!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`)
    } else {
        console.log('Please sumbit a valid option!')
        alert('Please sumbit a valid option!')
    }
}

// Plays the entire game through, 5 rounds.
function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt('Rock, Paper or Scissors?');
        if (playerChoice === null) {
            break;
        }
        let playerChoiceLower = playerChoice.toLowerCase();
        singleRound(playerChoiceLower, computerPlay());
    }
}

game();