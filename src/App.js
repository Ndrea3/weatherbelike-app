import "./App.css";
import React from "react";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Search from "./Search";
import Background from "./Images/coffee-and-donuts-pop-color-background.png";
import DateTime from "./Date";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="weather-app-wrap background"
    >
      <h1 className="page-title">
        The Weather Be Like...
        <span role="img" aria-label="Thinking Face">
          🤔
        </span>
      </h1>
      <br />
      <Search />
      <br/>
      <DateTime />
      <br />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </div>
  );
}
