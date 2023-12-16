import { useEffect, useState } from 'react'
import axios from 'axios'
import "./displayQuestion.css"
const DIsplayQuestion = () => {
    const[question,setQuestion]=useState([])
  useEffect(() => {
    console.log("hello from useeffect")
    axios.get("https://opentdb.com/api.php?amount=5").then(response=>{setQuestion(response.data.results)})
  }, [question])
    console.log(question,"from useEffect")
  return (
    <div>
       {
  question.map((val,key=val.id) => {
            return (
                <><div className="quiz-box">
                     <div className="question-box">
                        <h2>{val.question}</h2>
                    </div>
                    <div className="answer-box">
                      <h3>{val.correct_answer}</h3>
                    </div>
                    <h3>{val.incorrect_answers.map((each)=> {
                        return (
                            <div className="incorrect-answer-container" key={val}>
                                <div className="incorrect-ans">
                                    {each}
                                </div>
                            </div>
                        )
                    })}</h3>
                    
              </div>

                   
              </>
            )
          })}
    </div>
  )
}

export default DIsplayQuestion
