import { useRef, useEffect } from "react";

export default function GameField({ gameFieldDisplay, clickPlayerImage, housePick }) {
  const player1borderColor = useRef(null);
  const player2borderColor = useRef(null);

  // Store the previous class names
  const previousPlayer1Class = useRef("");
  const previousPlayer2Class = useRef("");

  useEffect(() => {
    // Player 1
    if (player1borderColor.current && clickPlayerImage?.id) {
      // Remove previous
      if (previousPlayer1Class.current) {
        player1borderColor.current.classList.remove(previousPlayer1Class.current);
      }

      const newClass = `player-border-${clickPlayerImage.id}`;
      player1borderColor.current.classList.add(newClass);
      previousPlayer1Class.current = newClass;
    }

    // Player 2
    if (player2borderColor.current && housePick?.id) {
      // Remove previous
      if (previousPlayer2Class.current) {
        player2borderColor.current.classList.remove(previousPlayer2Class.current);
      }

      const newClass = `player-border-${housePick.id}`;
      player2borderColor.current.classList.add(newClass);
      previousPlayer2Class.current = newClass;
    }
  }, [clickPlayerImage, housePick]);

  return (
    <div className="game-field" ref={gameFieldDisplay}>
      <div className="player1">
        <div className="player1-border" ref={player1borderColor}>
          {clickPlayerImage.element}
        </div>
        <div className="text" id="Player1-text">
          {`You picked ${clickPlayerImage.id}`}
        </div>
      </div>
      <div className="player2">
        <div className="player2-border" ref={player2borderColor}>
          {housePick.element}
        </div>
        <div className="text" id="Player2-text">{`The House Picked ${housePick.id}`}</div>
      </div>
    </div>
  );
}
