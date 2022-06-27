import axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [description, setDesc] = useState("");
  let [icon, setIcon] = useState();
  let [pressure, setPress] = useState(null);
  let [humidity, setHum] = useState(null);
  let [wind, setWind] = useState(null);
  let [tempHigh, setTempHigh] = useState(null);
  let [tempLow, setTempLow] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  function showTemp(response) {
    console.log(response);
    setCity(props.city);
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setPress(response.data.main.pressure);
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setTempHigh(response.data.main.temp_max);
    setTempLow(response.data.main.temp_min);
    setFeelsLike(response.data.main.feels_like);
  }
  let apiKey = "f98ba7e599adf93cd93e20273e395b25";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
  if (temp) {
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
            {description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-img">
              <image>{icon}</image>
              <strong id="temperature">{temp} </strong>
              <small id="celc-link">°C</small>
            </div>
          </div>
          <div className="col-6">
            <ul className="w-details">
              <li>
                <strong>Pressure: </strong>
                <span id="pressure">{pressure} </span> mmHg
              </li>
              <li>
                <strong>Humidity: </strong>
                <span id="humidity">{humidity} </span>%
              </li>
              <li>
                <strong>Wind:</strong>
                <span id="wind">{wind}</span> km/h
              </li>
            </ul>
          </div>
          <ul>
            <li className="temp-summary p-3">
              <strong>High: </strong>
              <span id="dailyHigh">{tempHigh}</span>
            </li>
            <li className="temp-summary p-3">
              <strong>Low: </strong>
              <span id="dailyLow">{tempLow} </span>
            </li>
            <li className="temp-summary p-3">
              <strong>Feels Like: </strong>
              <span id="dailyFeelsLike">{feelsLike} </span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <p> Loading temperature for {props.city} </p>;
  }
}
