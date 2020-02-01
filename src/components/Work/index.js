import React, { Component, Fragment } from 'react';
import {gsap, TimelineLite} from 'gsap';
import './style.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  

class Work extends Component {
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
    console.log("Mounting Work")
   
    this.openingTween
    .set([this.h2, this.p, this.nav1, this.nav2],{y: 50, z: -50, alpha: 0, scaleX:0.8, scaleY:0.8})
    .to(this.container, 0.1, {alpha : 1})
    .to(this.leftC, 0.1, {backgroundColor: "rgba(255,255,255,1)"}, "-=0.5")
    .to(this.h2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1})
    .to(this.p, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.3")
    .to(this.nav1, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.2")
    .to(this.nav2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.2")
    .to(this.nav2, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.1")
    .to(this.leftC, 0.5,{boxShadow : "-1px 11px 17px -3px rgba(0,0,0,0.62)" } ,"-=0.2")
   

    //After Preloader
    if(this.props.preLoader === false && this.props.initAnimation === false) {

      setTimeout(()=> {
        this.openingTween.play();
      }, 2500)
    
        //Close Back
        setTimeout(()=> {
          // console.log("close back");
          this.props.triggerBack(false)
        }, 3500)

    }

  }



componentDidUpdate(prevProps) {
 
  //Active if first time 
  if(this.props.preLoader === false && this.props.initAnimation === true) {
    this.props.initAnime();
    setTimeout(()=> {
      this.openingTween.play();
    }, 2000);

    setTimeout(()=> {
      this.props.triggerBack(false)
    }, 3500)
         
       
  }
  //Activate When it's going to be unmounted
  // if(this.props.workState.close && this.props.workState.close !== prevProps.workState.close);
  if (this.props.workState.close) {
      this.openingTween.reverse();
      console.log("hide Work")
  }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className="work-container">
            <div  ref={div => this.leftC = div} className="left-container">
              <h2  ref={div => this.h2 = div}> Work</h2>
              <div  ref={div => this.p = div} className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend, augue ut finibus dictum, odio tortor eleifend lectus, vitae eleifend augue risus commodo dolor. </p>
              </div>
            </div>
            {/* <div className="right-container">
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
            </div> */}

        </div>

   </Fragment>);
  
}
}


export default Work;

