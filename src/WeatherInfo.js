import React from "react";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedTime date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">{props.data.temperature}</strong>
              <span>°C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span> {props.data.humidity}</span>%
            </li>
            <li>
              wind: <span>{props.data.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
