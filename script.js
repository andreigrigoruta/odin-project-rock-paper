let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock",
};

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function computerWins(playerSelection, computerSelection) {
  return beats[computerSelection] === playerSelection;
}

function playRound(playerSelection) {
  playerSelection = playerSelection
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
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
