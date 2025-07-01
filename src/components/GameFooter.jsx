export default function Footer({modalTarget}) {
  const handleClick = () => {
    modalTarget.current.style.display = "block"
  }

  return (
    <>
        <div className="game-footer">
          <button onClick={handleClick}>Rules</button>
        </div>
    </>
  )
}