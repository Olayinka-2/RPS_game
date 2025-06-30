import bgtriangle from "./assets/bg-triangle.svg"
import iconRock from "./assets/icon-rock.svg";
import iconPaper from "./assets/icon-paper.svg";
import iconScissors from "./assets/icon-scissors.svg";


function App() {

  return (
    <>
    <div className="game-container">
      <header>
        <div className="game-header">
          <div className="item-title">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div className="score">
            <p>SCORE</p>
            <p>12</p>
          </div>
        </div>
      </header>

      <main>
        <div className="game-body">
          <div className="game-items">
          <img src={bgtriangle} alt="bg-pentagon" />
          <div className="iconRock border">
            <div >
              <img src={iconRock} alt="icon rock"/>
            </div>
          </div>
          <div className="iconPaper border">
            <div >
              <img src={iconPaper} alt="icon paper" />
            </div>
          </div>
          <div className="iconScissors border">
            <div >
              <img src={iconScissors} alt="icon scissors"  className="man"/>
            </div>
          </div>
          </div>
        </div>
      </main>
      <div>
      </div>
    </div>
    </>
  )
}

export default App
