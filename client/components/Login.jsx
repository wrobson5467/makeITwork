const React = require('react');

class Login extends React.Component {
  render () {
    return (
      <div className='loginContainer'>
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

export default Login;