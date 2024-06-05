function getComputerChoice(){
   let option = ["ROCK", "PAPER", "SCISSORS"];
   return option[ Math.ceil(Math.random() * 3) - 1 ]
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
      humanScore++;
      playerParagraph.textContent = "You win, Rock beat Scissors";
   } else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
      computerScore++;
      playerParagraph.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
   } 
   else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      humanScore++;
      playerParagraph.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
   } else if(humanChoice === "ROCK" && computerChoice === "PAPER")  {
      computerScore++;
      playerParagraph.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
   }
   else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
      humanScore++;
      playerParagraph.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
   } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
      computerScore++;
      playerParagraph.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
   }
   else if(humanChoice === computerChoice){
      playerParagraph.textContent = `Its a draw`;
   } else {
      playerParagraph.textContent = `invalid input`;
   }
}

const gameButtons = document.querySelectorAll("button");

gameButtons.forEach((button) => {
   button.addEventListener("click", () => {
      playRound(button.textContent, getComputerChoice());
      scoreParagraph.textContent = `Human Score ${humanScore} : ${computerScore} Computer Score`;
   
      if(humanScore === 5 ) {
         winnerParagraph.textContent = `Congratulations, you are  the winner of the game`;
         restartGame();
      } else if(computerScore === 5){
         winnerParagraph.textContent = `Ouch, you lost the game`;
         restartGame();
      }
   });
})


function restartGame() {
   humanScore = 0;
   computerScore = 0;

}

let playerParagraph = document.querySelector(".player");
let scoreParagraph = document.querySelector(".score");

let winnerParagraph = document.querySelector("h3");
