import React, { Component, Fragment } from 'react';

import './style.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






  

class Background extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (<Fragment>
   
        <div className="home-container">
            <div className="intro-text">

            </div>
            <div className="home-nav">
                <Link to="/work" className="nav-item">SKILLS</Link>
                <Link to="/work" className="nav-item">WORK</Link>
            </div>

        </div>

   </Fragment>);
  
}
}


export default Background;

