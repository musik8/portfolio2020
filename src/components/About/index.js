import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
import './style.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

    this.container = null;
    this.leftContent = null;
    this.rightContent = null;
    this.skillheader = null;
    this.sk1 = null;
    this.sk2 = null;
    this.sk3 = null;
    this.sk4 = null;
    this.heading = null;
    this.para = null; 
   
    // this.openingTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
    // this.closeTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
     this.openingTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
  }


  componentDidMount() {
    console.log("Mounting About")
   
    this.openingTween
    .set([ this.heading, this.para, this.sk1, this.skillheader, this.sk2 ,this.sk3m, this.sk4 ],{y: 50, z: -50, alpha: 0, scaleX:0.8, scaleY:0.8})
    .set([this.leftContent], {x: 200})
    .set([this.rightContent], {x: -200})
    .to(this.container, 0.5, {alpha: 1})
    .to([this.leftContent, this.rightContent], 0.2, {alpha: 1, x: 0}, "-=0.1")
    .to(this.heading, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1})
    .to(this.para, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1} ,"-=0.3")
    .to(this.skillheader, 0.4,{alpha: 1, y: 0, scaleX: 1, scaleY: 1})
    .staggerTo([this.sk1,this.sk2,this.sk3,this.sk4 ],0.2,{alpha: 1, y: 0, scaleX: 1, scaleY: 1},0.05)
    .to([this.leftContent, this.rightContent], 0.5,{boxShadow : "-1px 11px 17px -3px rgba(0,0,0,0.62)" } ,"-=0.2")
    .to(this.container, 0.3 ,{left: "60%"}, "-=1.3")
    

    //After Preloader
    if(this.props.preLoader === false && this.props.initAnimation === false) {
       
      setTimeout(()=> {
          this.openingTween.play();
        }, 1200)
    
        //Close Back
        setTimeout(()=> {
          // console.log("close back");
          this.props.triggerBack(false)
        }, 1500)


    }

  }



componentDidUpdate(prevProps) {
 
   
  //Active if first time 
  if(this.props.preLoader === false && this.props.initAnimation === true) {
    this.props.initAnime();
  
    setTimeout(()=> {
      this.openingTween.play();
    }, 1000);

    setTimeout(()=> {
      this.props.triggerBack(false)
    }, 1500)
         
       
  }
  //Activate When it's going to be unmounted
 
  if (this.props.aboutState.close) {
    console.log("Its rewin time");
      this.openingTween.reverse();
  }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className="about-container">
            <div  ref={div => this.leftContent = div} className="left-container">
              <h2  ref={div => this.heading = div}> About</h2>
              <div  ref={div => this.para = div} className="info">
                <p>From an idea to pencil & paper to code; <br/> making a design come to life is a unique and awesome experience.</p>
                <p>Discovering my respect for the creative industry after I spent three hours making a kick-ass logo in a video game (or so I thought). I seriously reconsidered my career path and pursued my newly realized appreciation for the creative field. Along the way, I realized that programming doesn’t have to be boring, but can actually be mildly boring. Eventually, that too turned into something that I love and get excited about. I graduated from Seneca College’s Graphic Design course with eyes for both design and development.</p>
              </div>
            </div>
            <div  ref={div => this.rightContent = div}  className="right-container">
              <h2  ref={div => this.skillheader = div} >Skills</h2>
              <div ref={div => this.sk1 = div} className="skill-box">
                <h4>C/C++</h4>
                <h4>JavaScript</h4>
                <h4>Swift</h4>
                <h4>Java</h4>
                <h4>HTML</h4>
                <h4>CSS/SASS</h4>
                <h4>PHP</h4>
              </div>

              <div ref={div => this.sk2 = div} className="skill-box">
                <h4>React</h4>
                <h4>Angular</h4>
                <h4>Vue</h4>
                <h4>GreenSock</h4>
                <h4>Wordpress</h4>
                <h4>jQuery</h4>
                <h4>Opencart</h4>
                <h4>Git</h4>
                <h4>Express</h4>
                <h4>Node</h4>
                <h4>React-Spring</h4>
              </div>

              <div ref={div => this.sk3 = div} className="skill-box">
                <h4>MySQL</h4>
                <h4>REST API</h4>
                <h4>Oracle</h4>
                <h4>MongoDB</h4>
              </div>

              
              <div ref={div => this.sk4 = div} className="skill-box">
                <h4>Visual Studio</h4> 
                <h4> Xcode</h4> 
                <h4> Adobe Photoshop</h4> 
                <h4> Adobe XD</h4> 
                <h4> Adobe Illustrator</h4> 
                <h4> Adobe InDesign</h4> 
                <h4> Autodesk 3ds Max</h4> 
              </div>


            </div>
          

        </div>

   </Fragment>);
  
}
}


export default About;

