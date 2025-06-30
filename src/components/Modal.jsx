import rulesImage from "../assets/image-rules.svg";

export default function Modal({modalTarget}) {

  const closeModal = () => {
    modalTarget.current.style.display = "none"
  }


  return (
    <>
      <div className="modal" id="my-modal" ref={modalTarget}>
        <div className="modal-content">
          <div>
            RULES
          </div>
          <img src={rulesImage} alt="rulesImage" />
          <button onClick={closeModal}>
            &times;
          </button>
        </div>
      </div>
    </>
  )
}