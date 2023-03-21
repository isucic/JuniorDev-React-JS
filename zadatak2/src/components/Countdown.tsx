import {useEffect, useState} from 'react';

function Countdown() {
    const [time,setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(()  => {
            if(time < 5400)
                setTime((prevTime) => prevTime + 1);
        },1000);

        return () => clearInterval(timer);
    },[time]);

    function convertTime(seconds: number): string {
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;

        return  `${minutes < 10 ? "0" + minutes : minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
    }

    return (
        <div>
            <h2>{convertTime(time)}</h2>
        </div>
    )
}

export default Countdown;