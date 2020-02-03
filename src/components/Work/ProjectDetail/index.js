import React, { Component, Fragment } from 'react';
import {gsap, TimelineLite} from 'gsap';
import './style.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  

class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }

    this.container = null;

    
  }






  componentDidMount() {
    console.log("Mounting Project")
   
    
   

    //After Preloader
   

  }

componentDidUpdate(prevProps) {
 
  // //Active if first time 
  // if(this.props.preLoader === false && this.props.initAnimation === true) {
  //   this.props.initAnime();
  
  //   setTimeout(()=> {
  //     // this.openingTween.play();
  //   }, 1000);

  //   setTimeout(()=> {
  //     this.props.triggerBack(false)
  //   }, 1500)
         
       
  // }
  // //Activate When it's going to be unmounted
  
  // if (this.props.workState.close) {
  //     // this.openingTween.reverse();
  // }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className={`project-display-container ${this.props.active}`}>
            <div className="close-project" onClick={()=> this.props.close()}>

            <svg xmlns="http://www.w3.org/2000/svg" width="33.872" height="33.872" viewBox="0 0 33.872 33.872">
                <path id="Icon_material-close" data-name="Icon material-close" d="M41.372,10.911,37.961,7.5,24.436,21.025,10.911,7.5,7.5,10.911,21.025,24.436,7.5,37.961l3.411,3.411L24.436,27.847,37.961,41.372l3.411-3.411L27.847,24.436Z" transform="translate(-7.5 -7.5)"/>
              </svg>

            </div>
          
          { this.props.activeContent ? this.props.content.map((item, index) => {
            return(

                <div key={index} className="content-slide"> 
              
                  <div className="image-content" style={{backgroundImage: `url(${item.img})`}}> </div>
                  <div className="text-content">
                      
                    <h2>{item.heading}</h2>
                    <p>{item.desc}</p>  
                  </div>
                </div>
            )
          }) : null}

        </div>

   </Fragment>);
  
}
}


export default ProjectDetail;

