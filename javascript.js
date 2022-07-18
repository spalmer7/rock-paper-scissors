let playerChoice = prompt('Rock, Paper, or Scissors?');
let playerChoiceLower = playerChoice.toLowerCase();

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = (choices[Math.floor(Math.random() * choices.length)]);
    return randomChoice;
}

computerPlay();

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Draw!');
    } else if ((playerSelection === 'rock' && computerSelection == 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
}

singleRound(playerChoiceLower, computerPlay());
