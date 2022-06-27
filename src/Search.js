import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [details, setDetails] = useState({});
  let [display, setDisplay] = useState(false);

  function displayWeather(response) {
    console.log(response);
    setDisplay(true);
    setDetails({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function showSubmit(event) {
    event.preventDefault();
    let apiKey = "f98ba7e599adf93cd93e20273e395b25";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={showSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" onClick={showSubmit} />
    </form>
  );

  if (display) {
    return (
      <div>
        {form}
        <h2>{city}</h2>
        <img src={details.icon} alt={details.description} />
        <ul className="Details">
          <li>
            <strong>Temp</strong>: {Math.round(details.temperature)}°C
          </li>
          <li>
            <strong>Description</strong>: {details.description}
          </li>
          <li>
            <strong>Humidity</strong>: {details.humidity}%
          </li>
          <li>
            <strong>Wind</strong>: {details.wind}km/h
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
