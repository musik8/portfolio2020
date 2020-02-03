import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
import './style.scss';


import rightImage from '../../assets/images/gdBack.jpg';
import leftImage from '../../assets/images/sdBack.png';



  

class Background extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: false
    }

     // reference to the DOM node
    this.mainContainer = null;

    this.hideLeft = null;
    this.hideRight = null;

    this.lImage = null;
    this.rImage = null;

     this.left = null;
     this.right = null;

     this.m = null;
     this.u = null;
     this.mu = null;

     this.sd = null;
     this.gd = null;

     this.vLine = null;
     // reference to the animation
     this.myTween = gsap.timeline({paused: true, delay: 1, defaults: {ease: "power4.inOut"} });
     this.imageTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
     this.openState = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
  }

  componentDidMount() {
    this.myTween
      .to(this.m, 0.5, {y: "-100%", ease: "power4.inOut"})
      .to(this.u, 0.5, {y: "-100%", ease: "power4.inOut"}, "-=0.3")
      .to(this.sd, 0.7, {y: "0%", ease: "power4.inOut"} , "-=0.3")
      .to(this.gd, 0.7, {y: "0%", ease: "power4.inOut"}, "-=0.3")
      .to(this.gd, 0.3, {alpha: 0.2, ease: "power2.in"})
      .to(this.sd, 0.3, {alpha: 0.2, ease: "power2.in"}, "-=0.3")
      .to(this.vLine, 0.6, {height: "100%", ease: "power3.inOut"}, "-=0.2")
      .to(this.mu, 0.4, {top: "2%", scale:0.25 , ease: "power4.inOut"}, "-=0.35")
      .to(this.vLine, 0.5, {alpha: 0}, "-=0.3")
      .to(this.left, 1, {backgroundColor: "#FFD64F", alpha: 0.2}, "-=1")
      .to(this.right, 1, {backgroundColor: "#EB383D", alpha: 0.2}, "-=1")
      .to(this.left, 1, {x: "-61.8%"})
      .to(this.right, 1, {x: "61.8%"}, "-=1")


      .to(this.hideLeft, 1, {x: "-100%"}, "-=1")
      .to(this.hideRight, 1, {x: "100%"}, "-=1")
      .add(() => this.props.triggerLogo(), "-=0.5")
      .to(this.mainContainer, 0, {zIndex: 1})

      .to(this.sd, 0.9, {x: "-60%", ease: "power4.inOut"} , "-=0.8")
      .to(this.gd, 0.9, {x: "60%", ease: "power4.inOut"}, "-=0.9");
      

      
        // setTimeout( () => {
        //   console.log("Logo Trigger")
        //   this.props.triggerLogo()
        // },1800)
        
   
         
      this.myTween.play();


      //Activate
      //Content 
      setTimeout( () => {
        this.props.endPreloader()
      },4500)
            
      this.openState
      .to(this.left, 1, {x: "0%"})
      .to(this.right, 1, {x: "0%"}, "-=1")
      .to(this.sd, 0.9, {x: "0%", ease: "power4.inOut"} , "-=0.8")
      .to(this.gd, 0.9, {x: "0%", ease: "power4.inOut"}, "-=0.9");
      // {clearProps: 'all'}
      //Most likely will have to remove transforms so i can change them with css
  

  }

  componentDidUpdate(prevProps) {

     console.log(window.location.pathname)
    let url = window.location.pathname;

    
    

  

    if(!this.props.preLoader) {
      if(!this.props.triggerBackground && this.props.triggerBackground !== prevProps.triggerBackground) {
        //Close
            
        if(url === "/") {
          this.imageTween.to(this.rImage, 1.5, {x: "0%"})
                
          console.log("SELECT RIGHT IMAGE");
        }
        if(url === "/work" || url === "/about") {
          this.imageTween.to(this.lImage, 1.5, {x: "0%"})
                         
          console.log("SELECT LEFT IMAGE");
        } 
       

      
        console.log("BACKGROUND CLOSE")
        this.openState.play()

       

        this.imageTween.play();
      } 
      if(this.props.triggerBackground && this.props.triggerBackground !== prevProps.triggerBackground) {
        //Open

        if(url === "/") {
          this.imageTween.to(this.lImage, 0.8, {x: "-100%"})
          console.log("SELECT RIGHT IMAGE");
        } 
         if(url === "/work" || url === "/about") {
          this.imageTween.to(this.rImage, 0.8, {x: "100%"})
          console.log("SELECT LEFT IMAGE");
        }  


       
        console.log("BACKGROUND OPEN")
        this.openState.reverse()
        this.imageTween.play();
      } 
      
      // if (prevProps.text !== this.props.text) {
      //   this.updateAndNotify();
      // }

    }
  }


  render() {
    return (<Fragment>
      
    <div className="logo-hider">
        <div ref={div => this.hideLeft  = div} className="left-hide"></div>
        <div ref={div => this.hideRight  = div} className="right-hide"></div>
    </div>

     <div ref={div => this.mainContainer = div} className="background-container">
        


        <div ref={div => this.left = div}  className="left-side"></div>
        <div className="left-image"  ref={div => this.lImage = div}  style={{backgroundImage: `url(${leftImage})`}}></div>

        <div ref={div => this.right = div} className="right-side"></div>   
        <div className="right-image" ref={div => this.rImage = div} style={{backgroundImage: `url(${rightImage})`}}></div>

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

