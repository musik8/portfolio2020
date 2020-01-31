import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
import './style.scss';


import rightImage from '../../assets/images/gdBack.jpg';
import leftImage from '../../assets/images/sdBack.png';

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

     // reference to the DOM node
    this.hideLeft = null;
    this.hideRight = null;

     this.left = null;
     this.right = null;

     this.m = null;
     this.u = null;
     this.mu = null;

     this.sd = null;
     this.gd = null;

     this.vLine = null;
     // reference to the animation
     this.myTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
     this.closeTweenRight = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
     this.closeTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
  }

  componentDidMount(){
    this.myTween
      .to(this.m, 0.5, {y: "-100%", ease: "power4.inOut"})
      .to(this.u, 0.5, {y: "-100%", ease: "power4.inOut"}, "-=0.3")
      .to(this.sd, 0.7, {y: "0%", ease: "power4.inOut"} , "-=0.3")
      .to(this.gd, 0.7, {y: "0%", ease: "power4.inOut"}, "-=0.3")
      .to(this.gd, 0.3, {alpha: 0.1, ease: "power2.in"})
      .to(this.sd, 0.3, {alpha: 0.1, ease: "power2.in"}, "-=0.3")
      .to(this.vLine, 0.6, {height: "100%", ease: "power3.inOut"}, "-=0.2")
      .to(this.mu, 0.4, {top: "2%", scale:0.25 , ease: "power4.inOut"}, "-=0.35")
      .to(this.vLine, 0.5, {alpha: 0}, "-=0.3")
      .to(this.left, 1, {backgroundColor: "#FFD64F", alpha: 0.2}, "-=1")
      .to(this.right, 1, {backgroundColor: "#EB383D", alpha: 0.2}, "-=1")
      .to(this.left, 1, {x: "-40%"})
      .to(this.right, 1, {x: "40%"}, "-=1")


      .to(this.hideLeft, 1, {x: "-100%"}, "-=1")
      .to(this.hideRight, 1, {x: "100%"}, "-=1")
      .add(() => this.props.triggerLogo(), "-=0.2" )

      .to(this.sd, 0.9, {x: "-60%", ease: "power4.inOut"} , "-=0.8")
      .to(this.gd, 0.9, {x: "60%", ease: "power4.inOut"}, "-=0.9");
   

         
      this.myTween.play();
      
      // .to(this.left, 1, {backgroundColor: "#FFD64F", alpha: 0.2}, "-=1")
      // .to(this.right, 1, {backgroundColor: "#EB383D", alpha: 0.2}, "-=1")
    
      // this.closeTweenRight
      // .to()
      
      this.closeTween
      .to(this.left, 1, {x: "0%"})
      .to(this.right, 1, {x: "0%"}, "-=1")
      .to(this.sd, 0.9, {x: "0%", ease: "power4.inOut"} , "-=0.8")
      .to(this.gd, 0.9, {x: "0%", ease: "power4.inOut"}, "-=0.9");
      // {clearProps: 'all'}
      //Most likely will have to remove transforms so i can change them with css
  

  }

  componentDidUpdate(prevProps) {
    // if (prevProps.text !== this.props.text) {
    //   this.updateAndNotify();
    // }
  }


  render() {
    return (<Fragment>
      
    <div className="logo-hider">
        <div ref={div => this.hideLeft  = div} className="left-hide"></div>
        <div ref={div => this.hideRight  = div} className="right-hide"></div>
    </div>

     <div className="background-container">
        


        <div ref={div => this.left = div}  className="left-side"></div>
        <div className="left-image" style={{backgroundImage: `url(${leftImage})`}}></div>

        <div ref={div => this.right = div} className="right-side"></div>
        
        <div className="right-image" style={{backgroundImage: `url(${rightImage})`}}></div>

      <div ref={div => this.mu = div} className="mu-container ">
        <div className="mu-divider left ">
          <h1 ref={h1 => this.m = h1} className="m">
            MAXIM
          </h1>
        </div>
        <div className="mu-divider">
          <h1 ref={h1 => this.u = h1} className="u">
            USIK
          </h1>
        </div>
      </div>

      <div className="big-container">
        <div className="sd">
          <h1 ref={h1 => this.sd = h1}>SOFTWARE <br/> DEVELOPER</h1>
        </div>

        <div className="gd">
          <h1 ref={h1 => this.gd = h1}>GRAPHIC <br/> DESIGNER</h1>
        </div>
      </div>

      <div ref={div => this.vLine = div} className="v-line"> </div>

     </div>

   </Fragment>);
  
}
}


export default Background;

