import { useState } from "react";
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const [likedNum, setLikeNum] = useState(0);
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likedNum}</p>
      <button onClick={() => setLikeNum(likedNum + 1)}>Like</button>
    </div>
  );
};

export default App;
