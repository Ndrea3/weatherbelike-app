import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [details, setDetails] = useState({});
  let [display, setDisplay] = useState(false);

  function displayWeather(response) {
    setDisplay(true);
    setDetails({
    temp:Math.round(response.data.main.temp),
    description:response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    pressure:Math.round(response.data.main.pressure),
    humidity:Math.round(response.data.main.humidity),
    wind: Math.round(response.data.wind.speed),
    tempHigh: Math.round(response.data.main.temp_max),
    tempLow: Math.round(response.data.main.temp_min),
    feelsLike: Math.round(response.data.main.feels_like),
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
      className ="form-control"
      id="city-input"
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" className="btn btn-info w-100" value="Search" onClick={showSubmit} />
    </form>
  );

  if (display) {
    return (
  <div className="curWeather">
        <h2 className="place mt-3" id="city">
          {city}
        </h2>
        <ul>
          <li className="cur-date" id="date">
            June 6, 2022 @ 10:40 AM
          </li>
          <li className="w-desc" id="desc">
            {details.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-img">
              <img src={details.icon} alt = {details.description}/>
              <strong id="temperature">{details.temp}</strong>
              <small id="celc-link">°C</small>
            </div>
          </div>
          <div className="col-6">
            <ul className="w-details">
              <li>
                <strong>Pressure: </strong>
                <span id="pressure">{details.pressure} </span> mmHg
              </li>
              <li>
                <strong>Humidity: </strong>
                <span id="humidity">{details.humidity} </span>%
              </li>
              <li>
                <strong>Wind:</strong>
                <span id="wind">{details.wind}</span> km/h
              </li>
            </ul>
          </div>
          <ul>
            <li className="temp-summary p-3">
              <strong>High: </strong>
              <span id="dailyHigh">{details.tempHigh}</span>
            </li>
            <li className="temp-summary p-3">
              <strong>Low: </strong>
              <span id="dailyLow">{details.tempLow} </span>
            </li>
            <li className="temp-summary p-3">
              <strong>Feels Like: </strong>
              <span id="dailyFeelsLike">{details.feelsLike} </span>
            </li>
          </ul>
        </div>
      </div>);
  } else {
    return form;
  }
}

