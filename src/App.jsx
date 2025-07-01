import MainPlayerItem from "./components/MainPlayer";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/GameFooter";
import GameField from "./components/GameField";
import { useRef } from "react";



function App() {
  const modalTarget = useRef(null);
  const gameFieldDisplay = useRef(null);
  const playerItemDisplay = useRef(null);

  return (
    <>
    <div className="game-container">
      <Header />

      <main>
        <div className="game-body">
          <MainPlayerItem gameFieldDisplay={gameFieldDisplay} playerItemDisplay={playerItemDisplay}/>
          <GameField gameFieldDisplay={gameFieldDisplay} />
        </div>
        <Footer modalTarget={modalTarget} />
      </main>
      <div>
      </div>
    </div>
    <Modal modalTarget={modalTarget} />
    </>
  )
}

export default App
