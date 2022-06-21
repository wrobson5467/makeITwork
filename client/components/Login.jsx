import {Navigate, useNavigate} from 'react-router-dom'

import React from 'react';
function Login(props){
    return (
      <div className='loginContainer'>
        <form className='loginForm' method="POST" action='api/user/login'>
          <label>Username</label>
          <input type='text' name='username' required/><br></br>
          <label>Password</label>
          <input type='text' name='password' required/><br></br>
          <button type='submit' id='loginButton'>Login</button>
          <button type='button' id='forgotPWButton'>Forgot Password</button>
        </form> 
        <button onClick={useNavigate('/signup')}>Sign Up</button>
      </div> 
    ) 
}

export default Login;