import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";

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
      <div className="row p-1">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
              <WeatherTemperature celsius={props.data.temperature} />
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
