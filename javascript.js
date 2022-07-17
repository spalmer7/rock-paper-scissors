function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoice = (choices[Math.floor(Math.random() * choices.length)]);
    return randomChoice;
}
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection ==="scissors") {
        alert("Rock wins!");
    } else {
        alert("Fill");
    }
}

singleRound("rock", "scissors")
