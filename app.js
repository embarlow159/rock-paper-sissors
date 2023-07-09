//array containing the choices the computer can make
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  //return random item from the array the function is given
  return arr[Math.floor(Math.random() * arr.length)];
}

//getting computers choice
let computerChoice = getComputerChoice(choices);
console.log(computerChoice);

function getPlayerChoice() {
  //Prompt for player to enter choice
  let choice = prompt("Please enter rock, paper or scissors");
  //Return choice in lower case
  return choice.toLowerCase();
}

//Getting players choice
let playerChoice = getPlayerChoice();
console.log(playerChoice);

function playRound(computerChoice, playerChoice) {
  //If choice is the same
  if (computerChoice === playerChoice) {
    return "It's a tie!";
  } else if (
    //Choices where the player would win
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "Player wins";
  } else if (
    //choices where the computer would win
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    return "Computer Wins";
  } else {
    return "Invalid choice!";
  }
}

//Runs the playRound function and returns the winner
let winner = playRound(computerChoice, playerChoice);
console.log(winner);

/*
function game(computerChoice, playerChoice) {
    let i = 0
    while (i < 5) {
        code
        i++
    }
}
*/
