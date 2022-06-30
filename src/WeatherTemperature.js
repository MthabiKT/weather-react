import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault;
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <span className="temperature">
        {Math.round(fahrenheit())}
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | °F
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        {props.celsius}
        <span className="units">
          °C | {""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
