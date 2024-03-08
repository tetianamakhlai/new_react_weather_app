import React from "react";
import "./index.css";
import Icon from "./Icon";

export default function Forecast(props) {
  return (
    <div className="row justify-content-start">
      <div className="col-2 ">
        <div className="weather-forecast-day">
          <div id="WeatherForecast-day">Thu</div>
          <Icon code={props.code} width={60} height={60} />
          <div className="WeatherForecast-temperatures">
            <span id="weather-forecast-max"> 18°</span>
            <span id="weather-forecast-min">2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
