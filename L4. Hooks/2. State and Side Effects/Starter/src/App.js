import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";
import { useState } from "react";

const App = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const handleAnswer = (answerWasCorrect) => {
    if (answerWasCorrect) {
      setNumCorrect(numCorrect + 1);
    }
    setNumQuestions(numQuestions + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numQuestions={numQuestions} numCorrect={numCorrect} />
      </div>
    </div>
  );
};

export default App;
