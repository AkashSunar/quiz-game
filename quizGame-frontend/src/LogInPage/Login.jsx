import { useState } from "react"
import "./login.css"
import logIn from "../services/authentication";
import tokenHandle from "../utility/tokenHandle";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [credendials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
//   const handleLogin = name => event => {
//   setCredentials({...credendials, [name]: event.target.value})
  // }

  const handleUsername = event => {
      setCredentials({...credendials,username: event.target.value})
  }
  const handlePassword = event => {
      setCredentials({...credendials,password: event.target.value})
  }
  const handleSubmit = () => {
    logIn(credendials).then((res) => {
      tokenHandle.setToken(res.data.token)
      navigate("/category")
    })
  }
  return (
    
    <div className="container">
      <div className="image">
        <img src="images/caartoon.png" alt=""  height={600} width={300}/>
      </div>
      <div className="login-box">

          <div className="header">
          <div className="text">LOGIN TO PLAY</div>
          <div className="underline"></div>
        </div>  
        <div className="inputs">
          <div className="input">
            <label >Username:</label>
            <input type="text" onChange={handleUsername
            } />
          </div>
          <div className="input">
            <label >Password:</label>
            <input type="password" onChange={handlePassword}/>
          </div>
        </div>
          <div className="submit" onClick={handleSubmit} >Log in</div>
        

      </div>
    </div>
      
  )
}



export default Login
