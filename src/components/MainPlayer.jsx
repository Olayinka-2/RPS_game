import bgtriangle from "../assets/bg-triangle.svg"
import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";

export default function MainPlayerItem({gameFieldDisplay, playerItemDisplay, setClickPlayerImage, setHousePick}) {

  function handleClick(event) {
    gameFieldDisplay.current.style.display = "flex"
    playerItemDisplay.current.style.display = "none"

    const selectedItem = event.currentTarget.dataset.item;
    let houseItem = getHouseItem();

    if(selectedItem) {
      setSelectedImage(selectedItem, setClickPlayerImage);
      setSelectedImage(houseItem, setHousePick)
    }

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

function setSelectedImage(item, setClickPlayerImage) {
  switch (item) {
    case "iconRock":
      setClickPlayerImage({
        element: (
          <div data-item="iconRock">
            <img src={iconRock} alt="icon rock" />
          </div>
        ),
        id: "Rock"
      });
      break;
    case "iconPaper":
      setClickPlayerImage({
        element: (
          <div data-item="iconPaper">
            <img src={iconPaper} alt="icon paper" />
          </div>
        ),
        id: "Paper"
      });
      break;
    case "iconScissors":
      setClickPlayerImage({
        element: (
          <div data-item="iconScissors">
            <img src={iconScissors} alt="icon scissors" />
          </div>
        ),
        id: "Scissors"
      });
      break;
    default:
      console.warn("Unknown item selected");
  }
}

function getHouseItem() {
  const items = ["iconPaper", "iconScissors", "iconRock"];
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
