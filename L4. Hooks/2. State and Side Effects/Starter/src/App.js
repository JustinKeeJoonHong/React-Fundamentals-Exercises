import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <Game
        value1={value1}
        value2={value2}
        value3={value3}
        proposedAnswer={proposedAnswer}
        numQuestions={numQuestions}
        numCorrect={numCorrect}
      />
    </div>
  );
};

export default App;
