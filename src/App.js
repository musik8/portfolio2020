import React, { Component } from 'react';
import {Transition } from 'react-transition-group' 
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
      logoAnimate: false,
      homeState: {open: false, close: false},
    }
    this.triggerLogo = this.triggerLogo.bind(this);
    this.homeTransition = this.homeTransition.bind(this);
  }


  triggerClose = () => {

  }
  triggerLogo = () => {
  
    this.setState({logoAnimate: true})
  }


  
  homeTransition(node, done) {
     node.addEventListener('transitionend', done, false);
    
     console.log('Listener');
    // console.log(node)
    

    if(this.state.homeState.check) {
      this.setState({homeState: {close: true, check: false}})
    } else {
      this.setState({homeState: {close: false, check: true}})
    }

    // switch (status) {
    //   case 'entering':
    //   console.log("Entering")
    //   // this.tl.play();
    //     break;
    //   case 'exiting':
    //     console.log("exiting")
    //     // this.tl.reverse();
    // }

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
        {/* <Switch> */}
        <Route path="/" exact >
       
        {({ match }) => (
           <Transition
                     appear
                     in={!!match}
                     mountOnEnter
                     unmountOnExit
                    timeout={1500}
                    addEndListener={this.homeTransition}
                    >
          
              {state => (
                <Home status={state} homeState={this.state.homeState}/>
              )} 

          </Transition >
        )}
        
          </Route>
                        
        {/* </Switch> */}
        <Three active={this.state.logoAnimate}/>
        <Background triggerLogo={this.triggerLogo}/>
      </div>

    </Router>
      

    );
  
}
}


export default App;

