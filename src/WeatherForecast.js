import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row forecastDay">
          <div className="col border-end">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col border-end ">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col border-end">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col border-end">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "a0216b4f01efc0b0f21f29d5497ffa93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
