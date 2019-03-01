import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

export default class DashBoardNavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/edit-profile">
            <Button icon>
               <Icon name="user circle"/>
               <span>Edit Profile</span>
            </Button>
         </Link>
         <Link to="/add-experience">
            <Button icon>
               <Icon name="briefcase" />
               <span>Add Experience</span>
            </Button>
         </Link>
         <Link to="/add-education">
            <Button>
               <Icon name="graduation cap"/>
               <span>Add Education</span>
            </Button>
         </Link>
      </div>
    )
  }
}
