let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function computerWins(playerSelection, computerSelection) {
  return (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  );
}

function playRound(playerSelection) {
  playerSelection =
    playerSelection.toLowerCase().charAt(0).toUpperCase() +
    playerSelection.slice(1);
  const computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    return "Tie game!";
  }
  if (computerWins(playerSelection, computerSelection)) {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
  playerScore++;
  return `You Won! ${playerSelection} beats ${computerSelection}.`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors?");
    console.log(playRound(playerSelection));
  }

  if (playerScore === computerScore) {
    return "Draw!";
  }
  if (playerScore > computerScore) {
    return "You Win! Congratulations!";
  }
  return "You Lost! Sorry!";
}

console.log(game());
