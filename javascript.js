function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = (choices[Math.floor(Math.random() * choices.length)]);
    return randomChoice;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} equals ${computerSelection}`)
        alert(`Draw! ${playerSelection} equals ${computerSelection}`)
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        alert(`You win! ${playerSelection} beats ${computerSelection}!`)
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === "paper" && playerSelection === "rock")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`)
    } else {
        console.log('Please sumbit a valid option!')
        alert('Please sumbit a valid option!')
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        let playerChoiceLower = playerChoice.toLowerCase();
        singleRound(playerChoiceLower, computerPlay());
    }
}

game();