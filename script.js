function getComputerChoice(){
   let option = ["ROCK", "PAPER", "SCISSORS"];
   return option[Math.ceil(Math.random() * 3) - 1]
}
// console.log(getComputerChoice())

function getHumanChoice(){
   let choice = prompt("Input your choice here. ").toUpperCase();

   if(choice === "ROCK" ||
      choice === "PAPER" ||
      choice === "PAPER"
   ) {
      return choice
   } else {
      return "Input the right choice"
   }
}

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
      console.log("You win, Rock beat Scissors");
   } else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   } 
   else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      console.log(`You win, ${humanChoice} beats ${computerChoice}`)
   } else if(humanChoice === "ROCK" && computerChoice === "PAPER")  {
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   }
   else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
   } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   }
   else if(humanChoice === computerChoice){
      console.log(`Its a draw`)
   } else {
      console.log(`invalid input`)
   }
}
   
   

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);