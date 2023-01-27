let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];
const beats = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock",
};
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

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
    console.log("Tie game!");
  } else {
    if (computerWins(playerSelection, computerSelection)) {
      computerScore++;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`You Won! ${playerSelection} beats ${computerSelection}.`);
      playerScore++;
    }
  }
}

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

// function game() {
//   let playerSelection = (playerSelection = playerInputCase(playerSelection));
//   while (choices.indexOf(playerSelection) === -1) {
//     playerSelection = prompt(
//       "Please choose a valid option: Rock, Paper, Scissors?"
//     );
//     playerSelection = playerInputCase(playerSelection);
//   }
//   playRound(playerSelection);

//   if (playerScore === computerScore) {
//     return "Draw!";
//   }
//   if (playerScore > computerScore) {
//     return "You Win! Congratulations!";
//   }
//   return "You Lost! Sorry!";
// }

//console.log(game());
