import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProfileForm from '../ProfileForm';


// in this fields you would put what comes back from the database
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

export default class CreateProfile extends Component {
  render() {

    return (
      <div className="custom-form">
        <div className="custom-form-inner">
          <Link to="/dashboard"><Button>Go Back</Button></Link>
          <div className="custom-form-title">
            <h1>Edit Your Profile</h1>
            <p>Let's get some information to make your profile stand out</p>
          </div>
          <p>* = required field</p>
          <ProfileForm fields={formFields}/>
        </div>
      </div>
    )
  }
}
