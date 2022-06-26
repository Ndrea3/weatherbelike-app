import DateTime from "./Date";

export default function CurrentWeather() {
    <div className="curWeather">
      <h2 className="place mt-3" id="city">
        Frankford, ON
      </h2>
      <ul>
        <li className="cur-date" id="date">
        <DateTime />
        </li>
        <li className="w-desc" id="desc">
          Sunny
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-img">
            <img
              src="http://openweathermap.org/img/wn/04d.png"
              alt="Overcast Clouds"
              width="42"
              className="float-left"
              id="icon"
            />
            <strong id="temperature">14</strong>
            <small id="celc-link">°C</small>
          </div>
        </div>
        <div className="col-6">
          <ul className="w-details">
            <li>
              <strong>Pressure: </strong>
              <span id="pressure">1015</span> mmHg
            </li>
            <li>
              <strong>Humidity: </strong>
              <span id="humidity">86</span>%
            </li>
            <li>
              <strong>Wind:</strong>
              <span id="wind">2</span> km/h
            </li>
          </ul>
        </div>
        <ul>
          <li className="temp-summary p-3">
            <strong>High: </strong>
            <span id="dailyHigh">21°C </span>
          </li>
          <li className="temp-summary p-3">
            <strong>Low: </strong>
            <span id="dailyLow"> 11°C </span>
          </li>
          <li className="temp-summary p-3">
            <strong>Feels Like: </strong>
            <span id="dailyFeelsLike">14°C </span>
          </li>
        </ul>
      </div>
    </div>
  ;
}

