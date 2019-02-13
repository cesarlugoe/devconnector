import React, { Component } from 'react';
import './assets/css/theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import * as $ from 'jquery/jquery.min.js';
import 'in-view/dist/in-view.min.js';
import './assets/js/theme.min.js';
import Header from './components/layout/Header';
import BookLover from './assets/img/svg/book-lover.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section className="section-rotate">
              <div className="section-inner bg-gradient-primary"></div>
              <div className="container pt-lg">
                  <div className="row">
                      <div className="col-lg-5">
                          <div className="pt-lg-md text-center text-lg-left">
                              <h1 className="text-white mb-0 lh-150">
                          This is the new era of
                          <span className="text-white font-weight-bold">web development</span>.
                      </h1>
                              <p className="lead text-white lh-180">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                              <div className="mt-5">
                                  <a href="#" className="btn btn-info btn-circle btn-translate--hover mr-4">Get started</a>
                                  <a href="#" className="btn btn-outline-white btn-circle btn-translate--hover">See how it works</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <img alt="Image placeholder" src={BookLover} className="img-fluid d-none d-lg-block" />
                      </div>
                  </div>
              </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
