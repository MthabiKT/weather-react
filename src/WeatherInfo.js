import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <strong>{props.data.city}</strong>
      </h1>

      <div className="row p-1 ">
        <div className="col-6 ">
          <ul>
            <li>
              <FormattedTime date={props.data.date} />,
              <span> {props.data.description}</span>
            </li>
            <li>
              Humidity:{" "}
              <strong>
                <span> {props.data.humidity}</span>%
              </strong>
              ,
              <span>
                {" "}
                wind:{" "}
                <strong>
                  <span>{props.data.wind}</span>km/h
                </strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon
                size={63}
                code={props.data.icon}
                alt={props.data.description}
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
