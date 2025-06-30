import rulesImage from "../assets/image-rules.svg";

export default function Modal() {
  return (
    <>
      <div className="modal" id="my-modal">
        <div className="modal-content">
          <div>
            RULES
          </div>
          <img src={rulesImage} alt="rulesImage" />
          <button>
            &times;
          </button>
        </div>
      </div>
    </>
  )
}