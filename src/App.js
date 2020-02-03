import React, { Component, useEffect, Fragment} from 'react';
import {Transition } from 'react-transition-group' 
import './assets/fonts/fonts.scss';
import './App.scss';
 import 'normalize.css';
import './assets/stylesheets/_reset.scss';
import {gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'




import {
  BrowserRouter as Router,
 
  Route,

} from "react-router-dom";

import Three from './components/Three'
import Home from './components/Home'
import Background from './components/Background'
import Work from './components/Work'
import About from './components/About'
//import GoHome from './components/Nav'

const GoHome = (props) => {

  // const history = useHistory();
 
 useEffect(() => {
   
   if(props.goHome) {
      props.history.push('/');
      props.sendHome(false);
      // console.log("goHome");
   }
   
  
 });
 

 return (
   <Fragment></Fragment>
 );
}






 gsap.registerPlugin(CSSPlugin)

  

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logoAnimate: false,
      homeState: {check: false, close: false},
      workState: {check: false, close: false},
      aboutState: {check: false, close: false},
      preLoader: true,
      initAnimation: true,
      triggerBackground: true,
      goHome: false,
    }
    this.triggerLogo = this.triggerLogo.bind(this);

    this.homeTransition = this.homeTransition.bind(this);
    this.workTransition = this.workTransition.bind(this);
    this.aboutTransition = this.aboutTransition.bind(this);
    
    this.endPreloader = this.endPreloader.bind(this);
    this.initAnime = this.initAnime.bind(this);
    this.triggerBack = this.triggerBack.bind(this);
    this.sendHome = this.sendHome.bind(this);
  }

  endPreloader = () => {
    this.setState({preLoader: false});
  }

  
  initAnime = () => {
    this.setState({initAnimation: false});
  }

  sendHome = (check) => {
    console.log("send home" + check)
    if(check === undefined){
      check = true
    }
    this.setState({goHome: check})
    //this.props.history.push('/');
   
  }


  triggerBack = (change) => {
    this.setState({triggerBackground: change})
  }

  triggerLogo = () => {
    this.setState({logoAnimate: true})
  }


  
  homeTransition(node, done) {
  
    if(this.state.homeState.check) {
      //close
      console.log("Close Home Listener");
      this.triggerBack(true)
      let filler = this.state.homeState;
      filler.close = true;
      filler.check = false;
      this.setState({homeState: filler})
    } else {
      //Open
      let filler = this.state.homeState;
      filler.close = false;
      filler.check = true;
      this.setState({homeState: filler})
    }
  }

   
  aboutTransition(node, done) {
  
    if(this.state.aboutState.check) {
      //close
      console.log("Close About Listener");
      this.triggerBack(true)
      let filler = this.state.aboutState;
      filler.close = true;
      filler.check = false;
      this.setState({aboutState: filler})
    } else {
      //Open
      let filler = this.state.aboutState;
      filler.close = false;
      filler.check = true;
      this.setState({aboutState: filler})
    }
  }

  
  workTransition(node, done) {
  
    if(this.state.workState.check) {
      //close
      console.log("Close Work");
      this.triggerBack(true)
      let filler = this.state.workState;
      filler.close = true;
      filler.check = false;
      this.setState({workState: filler})
    } else {
      //Open
      let filler = this.state.workState;
      filler.close = false;
      filler.check = true;
      this.setState({workState: filler})
    }
  }



  render() {
    return (
      <Router>
      <div className="project-container">
      <div className="in-progress">
        <span>Ops! Mobile display is still in the works. <br/>
          Take a look on a bigger screen please!
        </span>
      </div>
      <Route path="/" render={(props) => <GoHome {...props} active={this.state.logoAnimate} sendHome={this.sendHome} goHome={this.state.goHome} />} />

        {/* <div className="hiddenNav"></div> */}
      <Three active={this.state.logoAnimate} sendHome={this.sendHome} />
    
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
                    timeout={1200}
                    addEndListener={this.homeTransition}
                    >
          
              {state => (
                <Home status={state} homeState={this.state.homeState} triggerBack={this.triggerBack} preLoader={this.state.preLoader} initAnime={this.initAnime}  initAnimation={this.state.initAnimation}  backState={this.state.triggerBackground}/>
              )} 

          </Transition >
        )}
        
          </Route>


          <Route path="/work" exact >
       
       {({ match }) => (
          <Transition
                    appear
                    in={!!match}
                    mountOnEnter
                    unmountOnExit
                   timeout={1500}
                   addEndListener={this.workTransition}
                   >
         
             {state => (
               <Work status={state} workState={this.state.workState} triggerBack={this.triggerBack} preLoader={this.state.preLoader} initAnime={this.initAnime}  initAnimation={this.state.initAnimation} backState={this.state.triggerBackground}/>
             )} 

         </Transition >
       )}
       
         </Route>

         <Route path="/about" exact >
       
       {({ match }) => (
          <Transition
                    appear
                    in={!!match}
                    mountOnEnter
                    unmountOnExit
                   timeout={1950}
                   addEndListener={this.aboutTransition}
                   >
         
             {state => (
               <About status={state} aboutState={this.state.aboutState} triggerBack={this.triggerBack} preLoader={this.state.preLoader} initAnime={this.initAnime}  initAnimation={this.state.initAnimation}  backState={this.state.triggerBackground}/>
             )} 

         </Transition >
       )}
       
         </Route>



                        
        {/* </Switch> */}
      
        
        <Background triggerLogo={this.triggerLogo} endPreloader={this.endPreloader} preLoader={this.state.preLoader} triggerBackground={this.state.triggerBackground}/>
      </div>

    </Router>
      

    );
  
}
}


export default App;

