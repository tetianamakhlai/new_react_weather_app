import React from "react";
import "./index.css";

export default function Forecast() {
  return (
    <div class="row ">
      <div class="col-2">
        <div class="weather-forecast-day "></div>
        <img
          src="https://cdn.icon-icons.com/icons2/3192/PNG/512/sunny_sun_cloud_weather_cloudy_icon_194267.png"
          alt="Clear"
          id="icon"
        />
        <div>
          <spam id="weather-forecast-max"> 13°</spam>
          <spam id="weather-forecast-min">2°</spam>
        </div>
      </div>
    </div>
  );
}
