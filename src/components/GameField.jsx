import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";

export default function GameField({gameFieldDisplay}) {
  return (
    <>
      <div className="game-field" ref={gameFieldDisplay}>
            <div className="player1">
              <div  className="player1-border">
                <div>
                  <img src={iconRock} alt="icon rock"/>
                </div>
              </div>
             <div className="text" id="Player1-text">You Picked</div>
            </div>
            <div className="player2">
              <div className="player2-border" >
                <div>
                  <img src={iconPaper} alt="icon paper" />
                </div>
              </div>
             <div  className="text" id="Player2-text">The House Picked</div>
            </div>
          </div>
    </>
  )
}