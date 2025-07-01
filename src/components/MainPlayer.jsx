import bgtriangle from "../assets/bg-triangle.svg"
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";

export default function MainPlayerItem({gameFieldDisplay, playerItemDisplay}) {

  function handleClick() {
    gameFieldDisplay.current.style.display = "flex"
    playerItemDisplay.current.style.display = "none"
  }

  return (
    <>
      <div className="game-items" ref={playerItemDisplay}>
          <img src={bgtriangle} alt="bg-pentagon" />
          <div className="iconRock border" onClick={handleClick} data-item="iconRock">
            <div>
              <img src={iconRock} alt="icon rock"/>
            </div>
          </div>
          <div className="iconPaper border" onClick={handleClick} data-item="iconPaper">
            <div >
              <img src={iconPaper} alt="icon paper" />
            </div>
          </div>
          <div className="iconScissors border" onClick={handleClick} data-item="iconScissors">
            <div >
              <img src={iconScissors} alt="icon scissors"  className="man"/>
            </div>
          </div>
          </div>
    </>
  )
}

