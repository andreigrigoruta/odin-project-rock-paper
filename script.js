let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock",
};
let winner = document.getElementById("winner");
let results = document.getElementById("results");
let playerS = document.getElementById("player-score");
let computerS = document.getElementById("computer-score");
let rockBtn = document
  .getElementById("rock")
  .addEventListener("click", playRound);
let paperBtn = document
  .getElementById("paper")
  .addEventListener("click", playRound);
let scissorsBtn = document
  .getElementById("scissors")
  .addEventListener("click", playRound);

function playerInputCase(playerSelection) {
  return playerSelection.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function computerWins(playerSelection, computerSelection) {
  return beats[computerSelection] === playerSelection;
}

function playRound(e) {
  playerSelection = playerInputCase(e.target.value);
  const computerSelection = getComputerChoice();

  if (computerSelection === playerSelection) {
    results.innerText = "Tie game!";
  } else {
    if (computerWins(playerSelection, computerSelection)) {
      computerScore++;
      results.innerText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      results.innerText = `You Won! ${playerSelection} beats ${computerSelection}.`;
      playerScore++;
    }
  }
  if (playerScore === 5) {
    winner.innerText = "Player wins the game! Congrats!";
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    winner.innerText = "Computer wins the game. Try your luck next time.";
    playerScore = 0;
    computerScore = 0;
  }
  playerS.innerText = `Player Score: ${playerScore}`;
  computerS.innerText = `Computer Score: ${computerScore}`;
}
