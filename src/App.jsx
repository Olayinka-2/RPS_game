import MainPlayerItem from "./components/MainPlayer";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/GameFooter";
import GameField from "./components/GameField";
import Winner from "./components/Winner";

import { useRef, useState } from "react";



function App() {
  const modalTarget = useRef(null);
  const gameFieldDisplay = useRef(null);
  const playerItemDisplay = useRef(null);


  const [clickPlayerImage, setClickPlayerImage] = useState({element: null, id:null});
  const [housePick, setHousePick] = useState({element: null, id:null});


  return (
    <>
    <div className="game-container">
      <Header />

      <main>
        <div className="game-body">
          <MainPlayerItem
            gameFieldDisplay={gameFieldDisplay}
            playerItemDisplay={playerItemDisplay}
            setClickPlayerImage = { setClickPlayerImage}
            setHousePick = { setHousePick }  />

          <GameField
            gameFieldDisplay={gameFieldDisplay}
            clickPlayerImage = {clickPlayerImage}
            housePick = {housePick}
            />
        </div>
        <Winner
          housePick = {housePick}
          clickPlayerImage = {clickPlayerImage}
          gameFieldDisplay={gameFieldDisplay}
          playerItemDisplay={playerItemDisplay}
          setFunctions = {{setHousePick, setClickPlayerImage}}  />

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
