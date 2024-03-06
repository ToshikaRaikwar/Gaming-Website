const ScoreBoard = ({ score }) => {
    return (
      <div className="score-board">
        
        <h1 style={{color: "red"},{fontFamily:"fantasy"},{padding:"40px"},{fontSize:"45px"}}>{score}</h1>
      </div>
    )
  }
  
  export default ScoreBoard