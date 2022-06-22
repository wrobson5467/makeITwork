import React from 'react';
import { Link } from 'react-router-dom';

function Nav (){
    return (
      <div className='headerBar'>
        <div className='navBar'>
          <ul className='navItems'>
            <li><Link to='/mainpage' class='home'>Homepage</Link></li>
            <li><Link to='/visual'>Visualization</Link></li>
            <li><Link to='/cardview'>Cards View</Link></li>
            <li style={{float:'right'}}><Link to='/' style={{color:'#ffb703'}}>Log Out</Link></li>
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