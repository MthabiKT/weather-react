import React from "react";
import "./Weather.css";

export default function () {
  let weatherData = {
    city: "New York",
    temperature: 11,
    date: "Tuesday 22:48",
    description: "Mostly Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/04n@2x.png",
    humidity: 70,
    wind: 2,
  };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div class="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date} PM</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong className="temperature">
                  {weatherData.temperature}
                </strong>
                °C " | °F
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span> {weatherData.humidity}</span>%
              </li>
              <li>
                wind: <span>{weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src="" alt="" srcset="" />
    </div>
  );
}
