const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);

  userChoiceDisplay.textContent = `You chose: ${userChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  winnerDisplay.textContent = winner;
}
