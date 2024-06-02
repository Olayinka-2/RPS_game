function getComputerChoice(){
   let option = ["Rock", "Paper", "Scissors"];
   return option[Math.ceil(Math.random() * 3) - 1]
}
// console.log(getComputerChoice())

function getHumanChoice(){
   let choice = prompt("Input your choice here. ");

   if(choice === "Rock" ||
      choice === "Paper" ||
      choice === "Scissors"
   ) {
      return choice
   } else {
      return "Input the right choice"
   }
}

// console.log(getHumanChoice())