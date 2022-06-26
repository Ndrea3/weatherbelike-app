import { useEffect, useState } from "react";

export default function DateTime() {
  let [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="curWeather">
      <ul>
        <li className="cur-date" id="date">
          {" "}
          Date/Time: {date.toLocaleDateString()}, {date.toLocaleTimeString()}
        </li>
      </ul>
    </div>
  );
}
