import { useRef } from "react";
import { useEffect } from "react";
import iconPaper from "../assets/icon-paper.svg";


export default function GameField({gameFieldDisplay, clickPlayerImage, housePick}) {
  const player1borderColor = useRef(null);
  const player2borderColor = useRef(null);

  console.log(clickPlayerImage, housePick)

  useEffect(() => {
    if (player1borderColor.current) {
      player1borderColor.current.classList.add(`player-border-${clickPlayerImage.id}`);
    }
    if(player2borderColor.current) {
      player2borderColor.current.classList.add(`player-border-${housePick.id}`);
    }
  }, [clickPlayerImage]);

  return (
    <>
      <div className="game-field" ref={gameFieldDisplay}>
            <div className="player1">
              <div  className="player1-border"  ref={player1borderColor}>
                  {clickPlayerImage.element}
              </div>
              <div className="text" id="Player1-text">
                {`You picked ${clickPlayerImage.id}`}
              </div>
            </div>
            <div className="player2">
              <div className="player2-border" ref={player2borderColor} >
                {
                  housePick.element
                }
              </div>
             <div  className="text" id="Player2-text">The House Picked</div>
            </div>
          </div>
    </>
  )
}