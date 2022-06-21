const React = require('react');

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className='navBar'>
          <ul className='navItems'>
            <li>Main</li>
            <li>Visualization</li>
            <li>Cards View</li>
          </ul>
        </div>
        <div className='welcome'>
          <p>Welcome</p>
          <p>showing Username</p>
        </div>
      </div>
    )
  }
}

export default Nav;