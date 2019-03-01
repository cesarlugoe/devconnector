import React, { Component } from 'react';
import DashBoardNavBar from '../DashBoardNavBar';
import CredentialsCard from '../CredentialsCard';


//this is just for seeding info, when you have database you need to include logic here
// to render appropiate information about user.

const companyCredentials = {
  cardTitle: "Experience Credentials",
  tableHeaders: ["Company", "Title", "Years"], 
  entries: [
    ["Tech Guy Web Solutions", "Senior Developer", "02-03-2009 - 01-02-2014"], 
    ["Traversy Media", "Instructor & Developer", "02-03-2015 - Now"]
  ]
}

const educationCredentials = {
  cardTitle: "Education Credentials",
  tableHeaders: ["School", "Degree", "Years"], 
  entries: [
     ["Northern Essex", "Associates", "02-03-2007 - 01-02-2009"] 
  ]
}

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <h1>Dashboard</h1>
          <h3>Welcome John Doe</h3>
          <div className="dashboard-nav-container">
            <DashBoardNavBar />
          </div>
          <CredentialsCard info={companyCredentials}/>
          <CredentialsCard info={educationCredentials}/>
        </div>  
      </div>
    )
  }
}
