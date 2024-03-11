import React, { useState } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function searchForecast(responce) {
    setForecast(responce.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(searchForecast);
    return null;
  }
}
