import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);

  function displayWeather(response) {
    console.log(response);
    setDisplay(true);
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
    <div className="weather-app">
      <form id="search-form" onSubmit={showSubmit}>
        <div className="row">
          <div className="col-9">
      <input
        className="form-control"
        id="city-input"
        type="search"
        placeholder="Enter a city..."
        autoComplete="off"
        onChange={updateCity}
      />
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-info w-100" onClick={showSubmit} />
    </div>
    </div>
    </div>
    </form>
    </div>
  );

  if (display) {
    return (
      <div>
        {form}
      </div>
    );
  } else {
    return form;
  }
}


//
export default function Search() {
  return (
    <div className="weather-app">
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}