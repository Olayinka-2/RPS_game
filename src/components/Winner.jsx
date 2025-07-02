import { getWinner } from "./utility";
import { useEffect, useRef } from "react";
import { resetGame } from "./utility";

export default function Winner({ housePick, clickPlayerImage, gameFieldDisplay, playerItemDisplay, setFunctions }) {
  const winnerText = useRef(null);
  const winnerSection = useRef(null);

  function handleClickForReplay() {
    winnerSection.current.style.display = "none";
   gameFieldDisplay.current.style.display = "none";
   playerItemDisplay.current.style.display = "flex";
   resetGame(setFunctions.setClickPlayerImage, setFunctions.setHousePick);
  }

  useEffect(() => {
    if (!clickPlayerImage?.id || !housePick?.id) return;

    const winner = getWinner(clickPlayerImage?.id, housePick?.id); // Pass IDs

    let timer = setTimeout(() => {
      if (winnerSection.current && winnerText.current) {
        winnerSection.current.style.display = "flex";

        if (winner === "mainPlayer") {
          winnerText.current.textContent = "You win";
        } else if (winner === "house") {
          winnerText.current.textContent = "You lose";
        } else if(winner === "draw") {
          winnerText.current.textContent = "It's a draw";
        }
        console.log(winner)
      }
    }, 1500)

    return () => clearTimeout(timer);

  }, [clickPlayerImage, housePick]); // Runs only when picks change

  return (
    <div className="winner-section" ref={winnerSection} style={{ display: "none" }}>
      <div className="winner-text" ref={winnerText}>Waiting...</div>
      <button className="play-again" onClick={handleClickForReplay}>Play Again</button>
    </div>
  );
}
