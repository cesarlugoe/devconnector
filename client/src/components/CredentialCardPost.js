import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class CredentialCardPost extends Component {
  render() {
     const { fields } = this.props;
    return (
      <div className="credentialCard-Post">
         <div className="credentialCard-field">{fields[0]}</div>
         <div className="credentialCard-field">{fields[1]}</div>
         <div className="credentialCard-field right">
            <span>{fields[2]}</span>
            <Button color="red">Delete</Button>
         </div>
      </div>
     
    )
  }
}
