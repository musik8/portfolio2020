import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/fonts/fonts.scss';
import './App.scss';
// import 'normalize.css';
import './assets/stylesheets/_reset.scss';
import {gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Three from './components/Three'
import Home from './components/Home'
import Background from './components/Background'

 gsap.registerPlugin(CSSPlugin)

  

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <Router>
      <div className="project-container">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            {/* <Home /> */}
            <Three />
          </Route>
          
        </Switch>
        <Background />
      </div>

    </Router>
      

    );
  
}
}


export default App;

