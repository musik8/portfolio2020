import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
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

    this.container = null;

  
    this.openingTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"}});
    // this.myTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
  }


  componentDidMount() {
    console.log("Mounting")
    console.log(this.props)
    this.openingTween
    .to(this.container, 1, {opacity: 1});
   
    this.openingTween.play();

  }

// componentDidMount() {

   
// }
componentWillUnmount() {
  
}


componentDidUpdate(prevProps) {
  // this.props.status

  // if (prevProps.homeState.open !== this.props.homeState.open) {
  //   console.log("Play")
  //   this.openingTween.play();
  // }

  if (this.props.homeState.close && this.props.homeState.close !== prevProps.homeState.close) {
    console.log("Exit")
    this.openingTween.reverse();
  }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className="home-container">
            <div className="intro-text">
                <h1>Home</h1>
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

