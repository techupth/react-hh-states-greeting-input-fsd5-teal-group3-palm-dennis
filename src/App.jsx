import { useState } from "react";
import "./App.css";

function App() {
  const [displayMessage, setDisplayMessage] = useState("Greeting Message");
  const [inputMessage, setInputMessage] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{displayMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setDisplayMessage(inputMessage);
            setInputMessage("");
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
