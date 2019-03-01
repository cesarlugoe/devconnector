import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
         <div className="landing-inner">
            <div className="landing-title">
               <h1>Developer Connector</h1>
               <p>Create a developer profile/portfolio share posts and get help from other developers </p>
               <div className="landing-button-container">
                  <Link to='/register'><Button className="primary">Sign Up</Button></Link>
                  <Link to='/login'><Button >Login</Button></Link>
               </div>
               
            </div>
         </div>
      </div>
    )
  }
}
