import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        <a href="https://github.com/MthabiKT/weather-react">Open-source code</a>
        , by Mthabi.K.T, hosted on{" "}
        <a href="https://fluffy-treacle-d6f7bb.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
