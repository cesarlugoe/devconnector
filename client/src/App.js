import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'in-view/dist/in-view.min.js';
import Header from './components/layout/Header';
import BookLover from './assets/img/svg/book-lover.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
      </div>
    );
  }
}

export default App;
