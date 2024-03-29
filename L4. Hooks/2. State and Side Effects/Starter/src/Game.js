import Score from "./Score";

const Game = ({ handleAnswer }) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  const makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);

    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);

    return [value1, value2, value3, proposedAnswer];
  };

  return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button>True</button>
      <button>False</button>
    </div>
  );
};

export default Game;
