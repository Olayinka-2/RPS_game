export default function Header({scoreDispaly, score}) {
  return (
    <>
      <header>
        <div className="game-header">
          <div className="item-title">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div className="score">
            <p>SCORE</p>
            <p  ref={scoreDispaly}>{score}</p>
          </div>
        </div>
      </header>
    </>
  )
}