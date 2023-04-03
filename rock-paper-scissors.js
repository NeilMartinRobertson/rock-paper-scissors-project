/* 
The Problem: 
The getComputerChoice function will either randomly 
return either "Rock", "Paper" or "Scissors".
This function will be used to make the computer play.

Breaking Down The Problem:
3 Choices
Rock, Paper Or Scissors
Not predefined choices
The choices must be selected at random
The computer must be able to take a random choice and return it as the value

How To Solve The Problem: 
1: getComputerChoice receives 3 values
2: The values entered are Rock, Paper Scissors
3: It will then pull one of those values randomly
4: After it has received the value it will output it

Problem I need to Solve:
How do I pul out a random value from an array every time?

Solution: 
Every index from an array is numbered so since it is a number, we can use Math.random on it
The formula for finding out a random number within a range would be the same for finding a random value from an array
Finding Random Number: 
randomNumber = Math.floor(Math.random() *  (1 + High - Low) + Low;

Finding a Random Value:

randomValue = arr[Math.floor(Math.random() * arr.length)]

*/

function getComputerChoice(choicesArr) {
  choicesArr = ["Rock", "Paper", "Scissors"];
  const randomValue = choicesArr[Math.floor(Math.random() * choicesArr.length)];
  return randomValue;
}

/* 
Write a function that plays a single round
Function should take two parameters:
1: The player selection
2: The computer selection
After it has taken them it should return the winner
Example: "You Lose, Paper Beats Rock"
It should also be case insensitive 

IF the player selection is Rock AND the computer selection is Scissors output the text "You win, Rock beats Scissors"

IF the player selection is Rock and the computer selection is Paper, output the text "You lose, Paper beats Rock"

IF the player selection is Rock and the computer selection is Rock, output the text "A Tie, go again"

IF the player selection is Scissors and the computer selection is paper, output the text "You win, Scissors beat Paper"

IF the player selection is Scissors and the computer selection is Rock, output the text "You lose,  Rock beats Scissors"

IF the player selection is Scissors and the computer selection is Scissors, output the text "A tie, go again"

IF the player selection is Paper and the computer selection is Rock, output the text "You win, Paper Beats Rock"

IF the player selection is Paper and the computer selection is Scissors, output the text "You lose, Scissors beats Rock"
*/

function playerChoice() {
  const playerChoiceWord = prompt("Pick between Rock, Paper or Scissors", "");
  const PlayersWord = playerChoiceWord;
  const insensitiveWord = PlayersWord.toLowerCase();
  const capitalizedWord =
    insensitiveWord.charAt(0).toUpperCase() + insensitiveWord.substring(1);
  return capitalizedWord;
}
// console.log(playerChoice());
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `You win, ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    return `You lose, ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return "It was a tie!";
  }
}
const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
