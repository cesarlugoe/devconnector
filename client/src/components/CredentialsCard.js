import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import CredentialCardPost from './CredentialCardPost';

export default class CredentialsCard extends Component {
  render() {
     const { info } = this.props;
    return (
      <div className="credentialCard-container">
        <h1>{info.cardTitle}</h1>
        <Segment.Group horizontal>
          <Segment>{info.tableHeaders[0]}</Segment>
          <Segment>{info.tableHeaders[1]}</Segment>
          <Segment>{info.tableHeaders[2]}</Segment>
        </Segment.Group>
        { info.entries.map(entree => {
           return (
            <div>
               <CredentialCardPost fields={entree}/>
               <Divider section />
            </div>
           );
        })}
      </div>
    )
  }
}
