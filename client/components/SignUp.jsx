
import React from 'react';


function SignUp(props) {
    return (
      <div className='signupContainer'>
        
        <form className='signupForm' method="POST" action='api/user/signup'>
        <div className='container'>
          <label><b>Username</b></label>
          <input type='text' name='username' placeholder="Enter Username" required/><br></br>
          <label><b>Password</b></label>
          <input type='password' name='password' placeholder="Enter Password" required/><br></br>
          <button type='submit' className='signUpButton'>Create Account</button>
          </div>
        </form> 
        
      </div> 
    ) 
}

export default SignUp;