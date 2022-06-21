const React = require('react');

class Login extends React.Component {
  render () {
    return (
      <div class='loginContainer'>
        <form class='loginForm'>
          <label>Username</label>
          <input type='text' name='username' required/><br></br>
          <label>Password</label>
          <input type='text' name='password' required/><br></br>
          <button type='submit' id='login'>Login</button>
          <button type='submit' id='forgotPW'>Forgot Password</button>
        </form> 
      </div> 
    ) 
  }
}

export default Login;