import { useEffect, useState } from 'react'
import axios from 'axios'
import "./displayQuestion.css";
import { useNavigate } from 'react-router-dom';
import tokenHandle from '../utility/tokenHandle';
import { useParams } from 'react-router-dom';
import DisplayScore from '../DisplayScore/DisplayScore';
const DIsplayQuestion = () => {
  const [question, setQuestion] = useState([])
  const [sum, setSum] = useState(0);
  const navigate = useNavigate();
  const query = useParams();
  useEffect(() => {
    const token = tokenHandle.getToken();
    !token?navigate("/"):null
  },)

  let correct_answer = [];
  
  useEffect(() => {
    axios.get(`https://quizapi.io/api/v1/questions?apiKey=zjQQLuRqysvrlhzWDKbpAdipN7gZaU5EQhBkxd4H&${query.id}&limit=10`)
      .then(response =>
      {
        setQuestion(response.data)
        console.log(response.data, 'response data')
      })
  }, [])

  const handleAnswerClick = (val, answers, correct_answer) => {
    const matchingKey = Object.keys(answers).find(key => answers[key] === val);
    if (matchingKey === correct_answer) {
      setSum(sum + 1)
      console.log(sum,"cheking the sum")
    }
    else {
      console.log("wrong")
    }
    console.log(`you clicked ${val}`)
6  }

  const handleAnswerCheck = () => {
    return (
      <div>
        <p> You have scored {sum} marks in the quiz</p>
      </div>
    )
}

  return (
    <>
      {console.log(correct_answer, 'correct answer')}
      {question.map((each,index) => {
        return (
          <div key={index}>
            <div className="question-box">
              <span>{each.question}</span>
            </div>
            <div className="answer-container">
              {Object.values(each.answers).map((val, index) => {
                if (val !== null) {
                  return (
                    <div onClick={()=>handleAnswerClick(val,each.answers, each.correct_answer)} className='answer-box' key={index}> 
                      {val}
                    </div>
                  )
                }

              })}
            </div>
            
          </div>
        )
      })}
      <div className="check-answer" onClick={handleAnswerCheck}><span>Check Answer</span></div>
    </>
     

  )
}

export default DIsplayQuestion;
