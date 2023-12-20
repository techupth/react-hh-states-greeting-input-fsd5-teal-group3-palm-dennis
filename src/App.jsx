import "./App.css";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState("Greeting Message");
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    e.target[0].value === ""
      ? setMessage("Greeting Message")
      : setMessage(e.target[0].value);
    e.target[0].value = "";
  };
  return (
    <div className="App">
      <form action="" onSubmit={handleChange}>
        <div className="greeting-container">{message}</div>
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input id="greeting-message" type="text" />
        </div>

        <div className="buttons">
          <button>Update text</button>
        </div>
      </form>
    </div>
  );
}

export default App;
