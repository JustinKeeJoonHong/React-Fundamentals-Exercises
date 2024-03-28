import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {
  // If the user did not type anything, he/she should not be allowed to submit.
  const [message, setMessages] = useState([]);

  const onMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message,
    };

    setMessages(message.concat([newMessage]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
