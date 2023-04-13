import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import Question from './components/Question'

function App() {

  const [doAgain, setDoAgain] = useState(false)

  useEffect(() => {
    if(!doAgain){
    axios
      .get("https://opentdb.com/api.php?amount=5")
      .then(res => {setQuestions(res.data.results); console.log(res.data.results)})
      .catch(err => alert(err))
    }

      if(doAgain) setDoAgain(false);
  },[doAgain]);

  const [questions,setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers,setShowAnswers] = useState(false)

  const handleAnswer = (answer) => {
    if(answer === questions[currentQuestionIndex].correct_answer){
      setScore(score+1)
    }
    setShowAnswers(true)
  }

  const handleNextQuestion = () => {
    setShowAnswers(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  };

  const TryAgain = () => {
    setDoAgain(true)
    setScore(0);
    setCurrentQuestionIndex(0)
  }

  return (
    <div className="App">

      <div className="nav">
        <p>Score: {score}</p>
        {(currentQuestionIndex<5) && <p>{currentQuestionIndex+1}/5</p>}
      </div>

      {(currentQuestionIndex == 5) && <button className="again-btn" onClick={TryAgain}>Try Again</button>}

      {questions.map((q,index) => {
        if(index === currentQuestionIndex) {
          return (
              <Question
                key={index} 
                correct_answer={q.correct_answer} 
                incorrect_answers={q.incorrect_answers} 
                question={q.question}

                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                handleNextQuestion={handleNextQuestion}/>
            )
          }
        })}

        {showAnswers && 
        <div>
          <button className="next-btn" onClick={handleNextQuestion}>Next question</button>
        </div>}



      
    </div>
  )
}

export default App
