import React from "react"; // Import React Component
import ReactDOM from "react-dom"; // Import ReactDOM Component
import "./style.css"; // Import CSS File

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
