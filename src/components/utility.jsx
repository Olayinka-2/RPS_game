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

export function resetGame(setClickPlayerImage, setHousePick) {
  setClickPlayerImage({element: null, id:null});
  setHousePick({element: null, id:null})
}