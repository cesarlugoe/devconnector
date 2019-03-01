import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css'
import 'in-view/dist/in-view.min.js';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Profiles from './components/pages/Profiles';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import AddEducation from './components/pages/AddEducation';
import AddExperience from './components/pages/AddExperience';
import CreateProfile from './components/pages/CreateProfile';
import Dashboard from './components/pages/Dashboard';
import EditProfile from './components/pages/EditProfile';
import Feed from './components/pages/Feed';
import Post from './components/pages/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/profiles" exact component={Profiles} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/add-education" exact component={AddEducation} />
          <Route path="/add-experience" exact component={AddExperience} />
          <Route path="/create-profile" exact component={CreateProfile} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/edit-profile" exact component={EditProfile} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/post" exact component={Post} />
        </Switch>  
        <Footer />
      </div>
    );
  }
}

export default App;
