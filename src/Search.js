import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);

function displayWeather(response) {
    console.log(response);
    setDisplay(true);}

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
    </div>
  );
} else {
  return form;
}
  }

