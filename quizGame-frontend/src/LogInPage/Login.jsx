import  "./login.css"
const Login = () => {
  
  // const handleSubmit = () => {
  //    console.log(question,"from useeffect")
  //  }


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
            <input type="text"/>
          </div>
          <div className="input">
            <label >Password:</label>
            <input type="password"/>
          </div>
        </div>
          <div className="submit" onClick={handleSubmit} >Log in</div>
        

      </div>
    </div>
      
  )
}



export default Login
