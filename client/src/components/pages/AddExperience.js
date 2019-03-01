import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddForm from '../AddForm';

export default class AddExperience extends Component {
  render() {
    const formFields = [
     "Job Title", 
     "Company", 
     "Location", 
     "Job Description", 
     "Some of your responsabilities, etc"
    ];
    return (
      <div className="custom-form">
      <div className="custom-form-inner">
        <Link to="/dashboard"><Button>Go Back</Button></Link>
        <div className="custom-form-title">
          <h1>Add Your Experience</h1>
          <p>Add any developer/programming positions that you have had in the past</p>
        </div>
        <p>* = required field</p>
        <AddForm fields={formFields}/>
      </div>
    </div>
    )
  }
}
