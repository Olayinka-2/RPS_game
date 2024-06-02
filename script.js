function getComputerChoice(){
   let option = ["Rock", "Paper", "Scissors"];
   return option[Math.ceil(Math.random() * 3) - 1]
}
console.log(getComputerChoice())