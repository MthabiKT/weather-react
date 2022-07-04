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
        <div className="col">
          <div className="WeatherForecast-day">TUES</div>
          <div>
            <WeatherIcon code="50d" size={38} />
          </div>
          <div className="WeatherForecast-temperature">21°</div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">WED</div>
          <div>
            <WeatherIcon code="03d" size={38} />
          </div>
          <div className="WeatherForecast-temperature">21°</div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">THUR</div>
          <div>
            <WeatherIcon code="11d" size={38} />
          </div>
          <div className="WeatherForecast-temperature">21°</div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">FRI</div>
          <div>
            <WeatherIcon code="11d" size={38} />
          </div>
          <div className="WeatherForecast-temperature">21°</div>
        </div>
      </div>
    </div>
  );
}
