function getComputerChoice(){
   let option = ["ROCK", "PAPER", "SCISSORS"];
   return option[Math.ceil(Math.random() * 3) - 1]
}
// console.log(getComputerChoice())

function getHumanChoice(){
   let choice = prompt("Input your choice here. ").toUpperCase();

   if(choice === "ROCK" ||
      choice === "PAPER" ||
      choice === "SCISSORS"
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
      humanScore++;
      console.log("You win, Rock beat Scissors");
   } else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
      computerScore++;
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   } 
   else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      humanScore++;
      console.log(`You win, ${humanChoice} beats ${computerChoice}`)
   } else if(humanChoice === "ROCK" && computerChoice === "PAPER")  {
      computerScore++;
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   }
   else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
      humanScore++;
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
   } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS"){
      computerScore++;
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
   }
   else if(humanChoice === computerChoice){
      console.log(`Its a draw`)
   } else {
      console.log(`invalid input`)
   }
}
   
 



// playRound(humanSelection, computerSelection);
// console.log(`Human Score ${humanScore} : ${computerScore} Computer Score`)

function playGame() {
   for(let i = 0; i < 5; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
   }
   console.log(`Human Score ${humanScore} : ${computerScore} Computer Score`);
}

playGame()