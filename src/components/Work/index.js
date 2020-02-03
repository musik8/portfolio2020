import React, { Component, Fragment } from 'react';
import {gsap} from 'gsap';
import './style.scss';
import data from '../../data.json'
import ProjectDetail from './ProjectDetail'


  

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectDetails: {},
      activeProject: false,
      activeContent: false,
    }

    this.container = null;

  
    // this.openingTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
    // this.closeTween = new TimelineLite({paused: true, defaults: {ease: "power4.inOut"}});
     this.openingTween = gsap.timeline({paused: true, defaults: {ease: "power4.inOut"} });
    this.setProjectDetail = this.setProjectDetail.bind(this);
    this.closeProjectDetails = this.closeProjectDetails.bind(this)
     this.displayPreview = this.displayPreview.bind(this);
  }

  setProjectDetail = (data) => {
    this.setState({projectDetails : data, activeContent: true})

    setTimeout(()=> {
      this.setState({activeProject: true})
    },800);

  }
  closeProjectDetails = () => {
    this.setState({activeProject: false})

    setTimeout(()=> {
      this.setState({activeContent: false})
    },800);

  }

  displayPreview = () => {

     
      let wordDisplay = data.map((postDetail, index) => {
      

      return(  <div key={index}  onClick={() => this.setProjectDetail(postDetail.content)}className="preview-container">
         
          <h2>{ postDetail.name}</h2>
          <div  className="info">
            <p>{postDetail.description}</p>
            <h4>{postDetail.interaction}</h4>
          </div>
        </div>
      )
      })

      
      return wordDisplay;


  }



  componentDidMount() {
    console.log("Mounting Work")
   
    this.openingTween
    .set(this.container,{y: 50, alpha: 0, scaleX:0.8, scaleY:0.8,  pointerEvents: "none"})
    .to(this.container, 0.8, {alpha : 1, y: 0, scaleX: 1, scaleY: 1})
    .set(this.container, {clearProps: "all", })
    .set(this.container, { alpha: 1, pointerEvents: "auto"})

    //After Preloader
    if(this.props.preLoader === false && this.props.initAnimation === false) {

      setTimeout(()=> {
         this.openingTween.play();
      }, 1000)
    
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
  
  if (this.props.workState.close) {
      
       if(this.state.activeProject) {
        this.setState({activeProject: false})
       }
       setTimeout(() => {
        this.openingTween.reverse();
       },500);
  }
}




  render() {
    return (<Fragment>
   
        <div ref={div => this.container = div} className={`work-container  ${this.state.activeProject ? "hide" : null}  ${this.state.activeContent}` }>
          <ProjectDetail  content={this.state.projectDetails} close={this.closeProjectDetails} active={this.state.activeProject} activeContent={this.state.activeContent}/>
          { this.displayPreview() }
          <div className="project-display-background">
          </div>
        </div>

   </Fragment>);
  
}
}


export default Work;

