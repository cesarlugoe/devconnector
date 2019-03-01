import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProfileForm from '../ProfileForm';

export default class CreateProfile extends Component {
  render() {
    const formFields = {
      handle: "Profile Handle", 
      professionalStatus: "Select Professional Status" , 
      company: "Company", 
      website: "Website", 
      location: "Location", 
      skills: "Skills", 
      github:  "Github Username", 
      bio:  "A short bio on yourself", 
    }

    return (
      <div className="custom-form">
        <div className="custom-form-inner">
          <Link to="/dashboard"><Button>Go Back</Button></Link>
          <div className="custom-form-title">
            <h1>Create Your Profile</h1>
            <p>Let's get some information to make your profile stand out</p>
          </div>
          <p>* = required field</p>
          <ProfileForm fields={formFields}/>
        </div>
      </div>
    )
  }
}
