import {useState} from 'react';
import './App.css'
import Team from './components/Team';
import Button from './components/Button';

import team1 from '../public/borussia-dortmund.png';
import team2 from '../public/hajduk-split.png';
import Countdown from './components/Countdown';

function App() {
  const team1name = "Borussia";
  const team2name = "Hajduk";

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [flag,setFlag] = useState(false);
  const [scoreList, setScoreList] = useState([] as any);
  const [buttonClicked,setButtonClicked] = useState(false);
  

  function ResetAll() {
    setNum1(0);
    setNum2(0);
    setFlag(false);
    setScoreList([]);
  }

  const WriteTime = (value: string) => {
    const element = {
      score: `${num1} : ${num2}`,
      time: value,
    }
    const updatedTimeArray = [...scoreList,element];

    setScoreList(updatedTimeArray);
    setButtonClicked(false);
  }

  let today = new Date();
  let date=today.getDate() + "/"+ (today.getMonth()+1) +"/"+today.getFullYear();

  return (
    <div className="app">
      <h3>{date}</h3>

      <div className="teams">
        <Team name={team1name} teamphoto={team1} />

        <div className="score">
            
          <p>{num1} : {num2}</p>

          <Countdown flag={flag} buttonClicked={buttonClicked} action={WriteTime} />

          {scoreList.map(s => <h5 key={s.time}>{s.score} - {s.time}</h5>)}

          <div className="controls">
            <Button sign="+" action={() => {setNum1(num1+1); setButtonClicked(!buttonClicked)}} flag={flag} />
            <Button sign="-" action={() => {(num1==0) ? <p></p> : setNum1(num1-1); setButtonClicked(!buttonClicked)}} flag={flag} />
            <Button sign="+" action={() => {setNum2(num2+1); setButtonClicked(!buttonClicked)}} flag={flag} />
            <Button sign="-" action={() => {(num2==0) ? <p></p> : setNum2(num2-1); setButtonClicked(!buttonClicked)}} flag={flag} />
          </div>

          {!flag &&
          <button className="start-btn" onClick={() => {setFlag(true)}}>Start Game</button>}
          {(flag) && 
          <button className='start-btn' style={{backgroundColor: "#8b0000"}} onClick={ResetAll}>Reset</button>
          }
          
        </div>

        <Team name={team2name} teamphoto={team2}/>
        
      </div>

    </div>
  )
}

export default App
