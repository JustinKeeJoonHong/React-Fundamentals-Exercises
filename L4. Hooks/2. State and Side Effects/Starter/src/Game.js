import Score from "./Score";

const Game = ({
  value1,
  value2,
  value3,
  proposedAnswer,
  numCorrect,
  numQuestions,
}) => {
  return (
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button>True</button>
      <button>False</button>
      <Score numQuestions={numQuestions} numCorrect={numCorrect} />
    </div>
  );
};

export default Game;
