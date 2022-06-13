import React from "react"; // Import React Component
import ReactDOM from "react-dom"; // Import ReactDOM Component
import "./style.css"; // Import CSS File

function sum(a, b) {
  return a + b;
}

function primeiroJSX() {
  return <div className="teste">Edson F. Cunha - Introdução ao ReactJS</div>;
  <h1>Soma: {sum(10, 10)}</h1>;
}

const App = () => {
  return;
  <div className="App">{primeiroJSX()}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
