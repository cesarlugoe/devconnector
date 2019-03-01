import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
        <header className="header-transparent header" id="header-main">
            <div className="nav-container-left">
              <ul className="nav-bar">
                <li id="logo"><Link to='/'>DevConnector</Link></li>
                <li><Link to='/profiles'>Developers</Link></li>
              </ul>
            </div>
            <div className="nav-container-right">
              <ul className="nav-bar">
                <li><Link to='/register'>Sign-up</Link></li>
                <li><Link to='/login'>Login</Link></li>
              </ul>
            </div>
        </header>
    )
  }
}

export default Header;
