import React from "react";

export default function Date() {
    return (
 (date) => {
            let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            let weekDay = weekDays[now.getDay()];

            let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            let hours = date.getHours();
            let AmOrPm = hours >= 12 ? "pm" : "am";
            hours = hours % 12 || 12;
            if (hours < 10) {
                hours = `0${hours}`;
            }
            let minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            let month = months[date.getMonth()];
            let year = date.getFullYear();
            let day = date.getDate();
            return `${weekDay}, ${month} ${day}, ${year}  ${hours}:${minutes} ${AmOrPm}`;
        })

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return days[day];
}
}
