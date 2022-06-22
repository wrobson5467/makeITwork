
import React from 'react';


function SignUp(props) {
    return (
      <div className='loginContainer'>
        <form className='signupForm' method="POST" action='api/user/signup'>
          <label>Username</label>
          <input type='text' name='username' required/><br></br>
          <label>Password</label>
          <input type='password' name='password' required/><br></br>
          <label>Confirm Password</label>
          <input type='password' name='passwordConfirm' required/><br></br>
          <button type='submit' id='signUpButton'>Create Account</button>         
        </form> 
      </div> 
    ) 
}

export default SignUp;
/*
loginContainer'>
        <form className='loginForm'>
          <label>Username</label>
          <input type='text' name='username' required/><br></br>
          <label>Password</label>
          <input type='text' name='password' required/><br></br>
          <button type='submit' id='loginButton'>Login</button>
          <button type='submit' id='forgotPWButton'>Forgot Password</button>
        </form> 
      </div> 
    ) 
  }
}

export default Signup;
*/