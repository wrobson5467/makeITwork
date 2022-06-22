import React from 'react';
import { Link } from 'react-router-dom';

function Nav (){
    return (
      <div className='headerBar'>
        <div className='navBar'>
          <ul className='navItems'>
            <li><Link to='/mainpage'>Homepage</Link></li>
            <li><Link to='/visual'>Visualization</Link></li>
            <li><Link to='/cardview'>Cards View</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        </div>
        {/* <div className='welcome'>
          <p>Welcome</p>
          <p>showing Username</p>
        </div> */}
      </div>
    )
}

export default Nav;