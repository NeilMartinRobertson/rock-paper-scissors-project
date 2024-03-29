//Made up of old Code and Pseudo Code as a source of reference while I was creating the game

//Pseudo Code

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

//I need to make play round respond to to the event listener so it outputs the correct values based on the button that is clicked
//I do this by making a const that equals the value for each of the buttons
//This need to be done for while the player score is under or equal to 5
//Once the score has reached 5, we then want to see who the winner is
//We want to disable the buttons once a score has reached 5


/*
Part 3:
Write a function called game()
Use previous function inside it 
Play a 5 round game that keeps score and reports a winner/loser at the end

First, declare a count variable for both the player and the computer
Initialize the count variable at 0
IF they win the game have it increase by 1
IF it is a draw do not increase it by anything but keep it as it is
When the player or the computer reach a score of 5, have the game end
When the game ends, print the winner
If the player has reached 5 won games, print out that the player has won
IF the computer has reached 5 won games print out that the computer has won

What if they want to specify the number of rounds they want to play?
Use another function for this task with a prompt asking them to enter the number of rounds
Convert the string to a number
Then use the callback function on that in its own function
*/


//Old Code
// function fullGame() {
//   const numberOfRounds = Number(
//     prompt("How many Rounds do you want to play for?", "")
//   );
//   gameRounds(numberOfRounds, game);
// }

// function gameRounds(numberOfTimes, gameCallback) {
//   for (let i = numberOfTimes; i > 0; i--) {
//     gameCallback(i);
//   }
// }

// function playerChoice() {
//   const playerChoiceWord = prompt("Pick between Rock, Paper or Scissors", "");
//   const playersWord = playerChoiceWord;
//   const insensitiveWord = playersWord.toLowerCase();
//   const capitalizedWord =
//     insensitiveWord.charAt(0).toUpperCase() + insensitiveWord.substring(1);
//   return capitalizedWord;
// }

// function game() {
//   const playerSelection = playerChoice();
//   const computerSelection = getComputerChoice();
//   playRound(playerSelection, computerSelection);
// }