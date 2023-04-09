// Calculates the random choice for the Computer
function getComputerChoice(choicesArr) {
  choicesArr = ["Rock", "Paper", "Scissors"];
  const randomValue = choicesArr[Math.floor(Math.random() * choicesArr.length)];
  return randomValue;
}

//Declares the counters

let playerScore = 0;
let computerScore = 0;

//UI Elements
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const anotherGame = document.getElementById("reset");
const resultDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");
const buttons = document.querySelectorAll("button");
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
anotherGame.addEventListener("click", resetGame);

//Main Game Function

function playRound(event) {
  const playerSelection = event.target;
  const computerSelection = getComputerChoice();
  if (
    (playerSelection.value === "Rock" && computerSelection === "Scissors") ||
    (playerSelection.value === "Paper" && computerSelection === "Rock") ||
    (playerSelection.value === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    resultDiv.textContent = `It was a victory with ${playerSelection.value} beating ${computerSelection}.`;
    scoreDiv.textContent = `The score is now ${playerScore} - ${computerScore}`;
  } else if (
    (playerSelection.value === "Rock" && computerSelection === "Paper") ||
    (playerSelection.value === "Paper" && computerSelection === "Scissors") ||
    (playerSelection.value === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    resultDiv.textContent = `It was a loss with ${playerSelection.value} losing to ${computerSelection}`;
    scoreDiv.textContent = `The score is now ${playerScore} - ${computerScore}`;
  } else if (playerSelection.value === computerSelection) {
    resultDiv.textContent = `It was a tie with ${playerSelection.value} equaling ${computerSelection}`;
    scoreDiv.textContent = `The score is now ${playerScore} - ${computerScore}`;
  }
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => (button.disabled = true));
    document.getElementById("reset").disabled = false;
    resultDiv.textContent = "";
    scoreDiv.textContent = "";
    if (playerScore > computerScore) {
      winnerDiv.textContent = `You win with a score of ${playerScore} to a score of ${computerScore}`;
    } else {
      winnerDiv.textContent = `You lose with a score ${playerScore} to a score of ${computerScore}`;
    }
  }
}

//Reloads the game
function resetGame() {
  window.location.reload();
}
