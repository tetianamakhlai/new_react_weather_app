import React from "react";
import "./index.css";

export default function Forecast() {
  return (
    <div className="row ">
      <div className="col-2">
        <div className="weather-forecast-day "></div>
        <img
          src="https://cdn.icon-icons.com/icons2/3192/PNG/512/sunny_sun_cloud_weather_cloudy_icon_194267.png"
          alt="Clear"
          id="icon"
        />
        <div>
          <span id="weather-forecast-max"> 13°</span>
          <span id="weather-forecast-min">2°</span>
        </div>
      </div>
    </div>
  );
}
