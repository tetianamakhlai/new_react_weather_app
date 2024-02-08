import React from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  function showWeather(response) {
    alert(response.data.temperature.current);
  }

  function handleEvent(event) {
    event.preventDefault();
    let apiKey = "03824abff0933330t40db0e3a5obfa62";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  return (
    <div className="App">
      <h1> Hi</h1>
      <button onClick={handleEvent}> Api call </button>
    </div>
  );
}

export default App;
