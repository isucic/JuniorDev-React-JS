import { useState } from 'react'
import style from '../styles/Question.module.css'

function Question(props){

    const answers = [props.correct_answer, ...props.incorrect_answers].sort(() => Math.random() - 0.5)
    const [isDisabled,setIsDisabled] = useState(false);

    const handleButtonClick = (answer) => {
        setIsDisabled(true)

        props.handleAnswer(answer)
    }

    return (
        <div className={style.questionCard}>
            <h1 dangerouslySetInnerHTML={{__html:props.question}} /> {/* Šta je bolje koristit umjesto ovoga kako bi se tekst parsira bez (&#039,&quot ...) znakova */}

            <div className={style.answers}>
                {answers.map((answer,index) => {
                    const colorAnswers = props.showAnswers ? (
                        answer === props.correct_answer ? "correct_btn" : "incorrect_btn"
                    ) : "";

                    return (
                        <button
                         className={`${style.btn} ${style[colorAnswers]}`} 
                         key={index}
                         disabled={isDisabled}
                         onClick={() => handleButtonClick(answer)}>
                        {answer}
                        </button>
                    )
                })
                }
            </div>

        </div>
    )
}
export default Question