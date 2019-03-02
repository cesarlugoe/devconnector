import React, { Component } from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Profiles extends Component {
  render() {
    return (
      <div className="explore-profiles-container">
        <div className="explore-profiles">
            <h2>Developer Profiles</h2>
            <p>Browse and connect with developers</p>
            {/* this is a profile card, when having database use map function and use component to render for each developer in DB */}
              <div className="explore-profile-card">
                <div className="explore-profile-card-left-section">
                  <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""></img>
                  <div>
                    <h2>John Doe</h2>
                    <p>Developer at Microsoft</p>
                    <p>Seattle, WA</p>
                    <Link to="/profile"><Button className="primary">View Profile</Button></Link>
                  </div>
                </div>
                <div className="explore-profile-card-right-section">
                  <h3>Skill Set</h3>
                  <div>
                    <Segment.Group piled className="profile-card-segment">
                      <Segment textAlign='left'><Icon className="check"></Icon>HTML</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>CSS</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>JavaScript</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>Python</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>C#</Segment>
                    </Segment.Group>
                  </div>
                </div>
              </div>
              {/* ------------------------End of 1 developer card Profile ------------------------------------- */}
              <div className="explore-profile-card">
                <div className="explore-profile-card-left-section">
                  <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""></img>
                  <div>
                    <h2>John Doe</h2>
                    <p>Developer at Microsoft</p>
                    <p>Seattle, WA</p>
                    <Link to="/profile"><Button className="primary">View Profile</Button></Link>
                  </div>
                </div>
                <div className="explore-profile-card-right-section">
                  <h3>Skill Set</h3>
                  <div>
                    <Segment.Group piled className="profile-card-segment">
                      <Segment textAlign='left'><Icon className="check"></Icon>HTML</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>CSS</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>JavaScript</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>Python</Segment>
                      <Segment textAlign='left'><Icon className="check"></Icon>C#</Segment>
                    </Segment.Group>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
  }
}
