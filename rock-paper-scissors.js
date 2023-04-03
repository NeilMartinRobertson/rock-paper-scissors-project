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
  const randomValue = choicesArr[Math.floor(Math.random() * choicesArr.length)]
}
