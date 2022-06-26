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
    <div>
      <p>
        {" "}
        Date/Time: {date.toLocaleDateString()}, {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
