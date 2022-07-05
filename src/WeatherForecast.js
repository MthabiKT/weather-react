import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "a0216b4f01efc0b0f21f29d5497ffa93";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">MON</div>
          <div>
            <WeatherIcon code="50d" size={38} />
          </div>
          <div className="WeatherForecast-temperature">21°</div>
        </div>
      </div>
    </div>
  );
}
