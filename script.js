let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  playerSelection =
    playerSelection.toLowerCase().charAt(0).toUpperCase() +
    playerSelection.slice(1);
  const computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    return "Tie game!";
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")
  ) {
    computerScore = computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore = playerScore++;
    return `You Won! ${playerSelection} beats ${computerScore}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors?");
    playRound(playerSelection);
  }

  if (playerScore === computerScore) {
    return "Draw!";
  } else if (playerScore > computerScore) {
    return "You Win! Congratulations";
  } else {
    return "You Lost! Sorry!;";
  }
}

console.log(game());
