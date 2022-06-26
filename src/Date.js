import { useEffect, useState } from "react";


export default function DateTime() {
    let [date, setDate] = useState(newDate());
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

  