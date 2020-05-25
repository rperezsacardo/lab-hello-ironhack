import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src="images/ironhack-logo.svg" alt="" />
            <img src="images/menu-top.svg" alt="" />
          </nav>
          <section className="containeir-1">
            <div>
              <h1>Say hello to</h1>
              <h1>ReactJS</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
              <a href="/">Awsome!</a>
            </button>
          </section>
          <section className="containeir-2">
            <div>
              <img src="images/icon1.png" alt="" />
              <h3>Title</h3>
              <p>Nice and short description</p>
            </div>
            <div>
              <img src="images/icon2.png" alt="" />
              <h3>Title</h3>
              <p>Nice and short description</p>
            </div>
            <div>
              <img src="images/icon3.png" alt="" />
              <h3>Title</h3>
              <p>Nice and short description</p>
            </div>
            <div>
              <img src="images/icon4.png" alt="" />
              <h3>Title</h3>
              <p>Nice and short description</p>
            </div>
          </section>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
