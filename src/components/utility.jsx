export function getWinner(mainPlayer, house) {
  if(mainPlayer == house) {
    return "draw"
  }
  if(
      (mainPlayer == "Rock" && house == "Scissors") ||
      (mainPlayer == "Scissors" && house == "Paper") ||
      (mainPlayer == "Paper" && house == "Rock")
  ) {
    return 'mainPlayer'
  } else {
    return 'house'
  }
}

export function resetGame(setClickPlayerImage, setHousePick, winnerSection,  gameFieldDisplay, playerItemDisplay) {
  winnerSection.current.style.display = "none";
  gameFieldDisplay.current.style.display = "none";
  playerItemDisplay.current.style.display = "flex";
  setClickPlayerImage({element: null, id:null});
  setHousePick({element: null, id:null})
}