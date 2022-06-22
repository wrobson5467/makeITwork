import {Navigate, useNavigate} from 'react-router-dom'

import React from 'react';
function Login(props){
  return (
    // <div className='loginContainer'>
    //   <div className='loginForm'>
    //     <form method="POST" action='api/user/login'>
    //       <label>Username</label>
    //       <input type='text' name='username' required/><br></br>
    //       <label>Password</label>
    //       <input type='text' name='password' required/><br></br>
    //       <button type='submit' id='loginButton'>Login</button>
    //       <button type='button' id='forgotPWButton'>Forgot Password</button>
    //     </form> 
    //   </div>
    //   <div className='signupButton'>
    //     <button onClick={useNavigate('/signup')}>Sign Up</button>
    //   </div>
    // </div> 
    <div className='loginContainer'>
    <form action='api/user/login' method='POST'>
      <div className="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required />
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Login</button>
      </div>
      <div className="container">
        <button type="button" className="signupbtn">Sign Up</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
    </div>
  ) 
}

export default Login;