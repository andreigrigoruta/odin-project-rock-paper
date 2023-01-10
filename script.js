function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const playerS = player.charAt(0).toUpperCase() + player.slice(1);

  switch (playerS) {
    case "Rock":
      if (computerSelection === "Rock") {
        return "Draw!";
      } else if (computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors!";
      } else return "You Lose! Paper beats Rock!";
      break;
    case "Scissors":
      if (computerSelection === "Scissors") {
        return "Draw!";
      } else if (computerSelection === "Paper") {
        return "You Win! Scissors beats Paper!";
      } else return "You Lose! Rock beats Scissors!";
      break;
    case "Paper":
      if (computerSelection === "Paper") {
        return "Draw!";
      } else if (computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
      } else return "You Lose! Scissors beats Paper!";
      break;
  }
}
