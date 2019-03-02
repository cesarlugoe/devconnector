import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <div className="register">
            <div className="register-title-container">
              <h1> Sign-up </h1>
              <p>Create your DevConnector account</p>
            </div>
            <Form>
                <Form.Field>
                  <input placeholder="Name"/>
                </Form.Field>
                <Form.Field>
                  <input placeholder="Email Address"/>
                  <label>This site uses Gravatar so if you want a profile image, use a Gravatar email</label>
                </Form.Field>
                <Form.Field>
                  <input placeholder="Password"/>
                </Form.Field>
                <Form.Field>
                  <input placeholder="Confirm Password"/>
                </Form.Field>
                <Button className="primary" fluid>Submit</Button>
            </Form>
          </div>
      </div>
    )
  }
}
