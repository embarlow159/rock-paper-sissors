const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".playerBtn");
let player;
let computer;
let result;

choiceBtns.forEach(btn => btn.addEventListener("click", () => {
  player = btn.textContent;
  computerChoice();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = playRound()
}))

function computerChoice() {
  const randomNumber = Math.floor(Math.random()*3)+1
  switch(randomNumber){
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  };
}

function playRound() {
  //If choice is the same
  if (computer === player) {
    return "It's a tie!";
  } else if (
    //Choices where the player would win
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "Player wins";
  } else if (
    //choices where the computer would win
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    return "Computer Wins";
  } else {
    return "Invalid choice!";
  }
}