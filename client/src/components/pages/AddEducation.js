import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddForm from '../AddForm';

export default class AddEducation extends Component {
  render() {
    const formFields = [
      "School or Bootcamp", 
      "Degree or Certificate", 
      "Field of Study", 
      "Current job", 
      "Program Description",
      "Tell us about your experience and what you learned"
    ];

    return (
      <div className="custom-form">
        <div className="custom-form-inner">
          <Link to="/dashboard"><Button>Go Back</Button></Link>
          <div className="custom-form-title">
            <h1>Add Your Education</h1>
            <p>Add any school, bootcamp, etc that you have attended</p>
          </div>
          <p>* = required field</p>
          <AddForm fields={formFields}/>
        </div>
      </div>
    )
  }
}
