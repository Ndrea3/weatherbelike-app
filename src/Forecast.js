export default function Forecast() {
  return (
    <div className="forecast">
      <h4 className="forecast-name">
        What's Up Next? ...<small id="subTitle">(Daily Forecast)</small>
      </h4>
      <div className="daily-forecast" id="forecast">
        <div className="row">
          <div className="daily-weather col-2">
            <div className="daily-forecast-day">Tues</div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt=""
              width="42"
            />
            <div className="daily-forecast-temp">
              <span className="daily-forecast-temp-max">16°</span>
              <span className="daily-forecast-temp-min">14°</span>
            </div>
            </div>
            <div className="row">
          <div className="daily-weather col-2"></div>
            <div className="daily-forecast-day">Wed</div>
            <img
              src="http://openweathermap.org/img/wn/12d.png"
              alt=""
              width="42"
            />
            <div className="daily-forecast-temp">
              <span className="daily-forecast-temp-max">15°</span>
              <span className="daily-forecast-temp-min">11°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
