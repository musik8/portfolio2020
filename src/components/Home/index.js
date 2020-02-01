import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
import './style.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

    this.container = null;

    this.leftC = null;
    this.h2 = null;
    this.p = null; 
    this.nav1 = null;
    this.nav2 = null; 
    // this.openingTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
    // this.closeTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
     this.openingTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
  }


  componentDidMount() {
    console.log("Mounting Home")
   
    this.openingTween
    .set([ this.h2, this.p, this.nav1, this.nav2],{y: 50, z: -50, alpha: 0, scaleX:0.8, scaleY:0.8})
    .to(this.container, 0.5, {alpha: 1})
    .to(this.leftC, 0.1, {alpha: 1}, "-=0.5")
    .to(this.h2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1})
    .to(this.p, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.3")
    .to(this.nav1, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.2")
    .to(this.nav2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.2")
    .to(this.nav2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.1")
    .to(this.leftC, 0.5,{boxShadow : "-1px 11px 17px -3px rgba(0,0,0,0.62)" } ,"-=0.2")
   

    if(this.props.preLoader === false) {
      this.openingTween.play();
        //Close Back
        setTimeout(()=> {
          // console.log("close back");
          this.props.triggerBack(false)
        }, 1000)

    }

  }



componentDidUpdate(prevProps) {
 
  //Active if first time 
  if(this.props.preLoader === false && !this.props.homeState.close) {
      this.openingTween.play();

      if(this.props.backState) {
        setTimeout(()=> {
          // console.log("close back");
          this.props.triggerBack(false)
         }, 1000)
         
       }
  }
  //Activate When it's going to be unmounted
  console.log(this.props.homeState.close && this.props.homeState.close !== prevProps.homeState.close);
  if (this.props.homeState.close) {
      this.openingTween.reverse();
      // console.log("hide home")
  }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className="home-container">
            <div  ref={div => this.leftC = div} className="left-container">
              <h2  ref={div => this.h2 = div}> Hello, My Name Is Maxim Usik</h2>
              <div  ref={div => this.p = div} className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend, augue ut finibus dictum, odio tortor eleifend lectus, vitae eleifend augue risus commodo dolor. </p>
              </div>
            </div>
            <div className="right-container">
                <Link  ref={div => this.nav1 = div}  to="/work" className="nav-item">
                  <div className="v-bar">
                  </div>
                  <h3>ABOUT</h3>
                  
                  </Link>
                <Link  ref={div => this.nav2 = div} to="/work" className="nav-item">
                  <div className="v-bar">
                    </div>
                    <h3>WORK</h3>
  
                </Link>
            </div>

        </div>

   </Fragment>);
  
}
}


export default Home;

