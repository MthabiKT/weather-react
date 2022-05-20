import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <div>
        <a href="https://github.com/MthabiKT/weather-react">Open-source code</a>
        , by Mthabi.K.T
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
