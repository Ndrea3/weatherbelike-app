import { useEffect, useState } from "react";


export default function DateTime() {
    let [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
        <p> Date : {date.toLocaleDateString()}</p>    
        <p> Time : {date.toLocaleTimeString()}</p>
        </div>
    )
}

  export function getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }