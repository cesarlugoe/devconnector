import React, { Component } from 'react';
import { Icon, Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile">
          <div className="profile-main">
              <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="profile" />
              <h2>John Doe</h2>
              <p>Developer at Microsoft</p>
              <p>Seattle, WA</p>
              <div className="profile-icon-container">
                <Link to="/#"><Icon name="globe big" ></Icon></Link>
                <Link to="/#"><Icon name="twitter big" ></Icon></Link>
                <Link to="/#"><Icon name="facebook big" ></Icon></Link>
                <Link to="/#"><Icon name="linkedin big" ></Icon></Link>
                <Link to="/#"><Icon name="instagram big" ></Icon></Link>
              </div>
          </div>
          <Segment>
            <div className="profile-bio">
              <h2>John's Bio</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel, officia facere porro esse numquam assumenda doloremque saepe aliquam nemo excepturi aliquid maiores! Excepturi, libero repudiandae.</p>
            </div>
            <Divider />
            <div className="profile-bio">
              <h2>Skill Set</h2>
              <div className="profile-skill-icon-container">
                <span><Icon name="checkmark"></Icon>HTML</span>
                <span><Icon name="checkmark"></Icon>CSS</span>
                <span><Icon name="checkmark"></Icon>JavaScript</span>
                <span><Icon name="checkmark"></Icon>Python</span>
                <span><Icon name="checkmark"></Icon>C#</span>
              </div>
            </div>
          </Segment>
          <div className="profile-experience"> 
              <div className="profile-experience-section">
                <h2>Experience</h2>
                <div className="profile-experience-card">
                  <Segment>
                      <h3>Microsoft</h3>
                      <p>Oct 2011 - Current</p>
                      <p><b>Position</b>Senior Developer</p>
                      <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
                  </Segment>
                  <Divider />
                </div>
                <div className="profile-experience-card">
                  <Segment>
                      <h3>Sun Microsystems</h3>
                      <p>Oct 2004 - Nov 2011</p>
                      <p><b>Position</b>Systems Admin</p>
                      <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
                  </Segment>
                  <Divider />
                </div>
              </div>
              <div className="profile-experience-section">
                <h2>Education</h2>
                <div className="profile-experience-card">
                  <Segment>
                      <h3>University Of Washington</h3>
                      <p>Sep 1993 - June 1999</p>
                      <p><b>Degree:</b>Masters</p>
                      <p><b>Field of Study:</b>Computer Science</p>
                      <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p>
                  </Segment>
                  <Divider />
                </div>
              </div>
          </div> 
        </div>
      </div>
    )
  }
}
