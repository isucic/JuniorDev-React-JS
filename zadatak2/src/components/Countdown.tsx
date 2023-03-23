import {useEffect, useState} from 'react';
type CountdownProps = {
    flag: boolean;
}

function Countdown(props: CountdownProps) {
    const [time,setTime] = useState(0);

    useEffect(() => {
        if(!props.flag){
            setTime(0)
        }
        const timer = setInterval(()  => {
            if(time < 5400) //this is 90 minutes in seconds
                setTime((prevTime) => prevTime + 1);
        },1000);

        return () => clearInterval(timer);
    },[time,props.flag]);

    function convertTime(seconds: number): string {
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;

        return  `${minutes < 10 ? "0" + minutes : minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
    }


    return (
        <div className='countdown'>
            {props.flag &&
            <h2>{convertTime(time)}</h2>}
        </div>
    )
}

export default Countdown;