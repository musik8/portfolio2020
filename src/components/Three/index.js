import React, {useState, useRef, useEffect}from 'react'
import './style.scss'
// import {Link} from 'react-router-dom';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import {Canvas, useFrame, extend, useThree, Material, useLoader}  from "react-three-fiber";
// import {Keyframes} from 'react-spring/renderprops'
import {useSpring, a, config} from 'react-spring/three';
// import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";

import * as THREE from 'three' 



// extend({OrbitControls});



const LeftM = (propss) => {
 
  

  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive] = useState(true);
  const [hovered, setHovered] = useState(false);
  
  const props = useSpring({
     to: propss.trigger.active && active ? [{position: [-10,0,-4],rotation:[0,0.5,0], config:{mass: 1.5,tension: 350   }}, 
                  {rotation: [-6.4,0,0], config:{mass: 1, tension: 350 }},
                  {position: [-3.5,25,0], scale:[0.5,0.5,0.5], rotation:[-5.8, 0,0 ], config:{mass: 1, tension: 250 },  },
                  {onRest: ()=> {setActive(false)}, delay: 1000}
                  // {rotation: [1,2,4], config:{duration: 1000, mass: 5}}
                
                
                  ] : null,
    from:  {position: [-6.5,0,-5], rotation: [0,0,0], scale:[1,1,1]}
  })
  const meshProp = useSpring( {
    position: hovered && !active ? [-2,-2,2] : [0,0,0],
    rotation: hovered && !active ? [0,0.3,0] : [0,0,0]

  })

  useEffect(() => {
    console.log("Active On StateChange?");
    new GLTFLoader().load("/mModel.gltf", setModel)
  }, [])
 

    useFrame(() => {
      if(model) {
        // primRef.current.rotation.y += 0.01;
      // primRef.current.rotation.x += 0.01;
      }
    })
 
  return model ? (
   
    <a.mesh
      position={meshProp.position}
      rotation={meshProp.rotation}
    >
             {/* <Link to="/"> */}
           <a.primitive  
            //  ref={primRef}
        
            onClick={() => propss.trigger.sendHome()}
            // onPointerOut={() => setActive(false)}
            onPointerOut={() => setHovered(false)}
            onPointerOver={() => setHovered(true)}
           object={model.scene} 
            scale={props.scale}
            rotation={props.rotation}
           position={props.position}  /> 
            {/* </Link> */}
        </a.mesh>
      
    ): null


}

const RightM = (propss) => {
  
  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive2] = useState(true);
  const [hovered, setHovered2] = useState(false);
  
  const propsR = useSpring({
     to: propss.trigger.active && active ? [{position: [10,0,-4], rotation:[0,-0.5,0],  config:{mass: 1,tension: 350   }}, 
                  {rotation: [6.4,0,0], config:{mass: 1, tension: 350 }},
                  {position: [3.5,25,0], scale:[0.5,0.5,0.5], rotation:[6.8, 0,0 ], config:{mass: 1, tension: 250 },  },
                  {onRest: ()=> {setActive2(false)}, delay: 1000}
                  // {rotation: [1,2,4], config:{duration: 1000, mass: 5}}
                
                
                  ] : null,
    from:  {position: [6.5,0,-5], rotation: [0,0,0], scale:[1,1,1]}
  })
  const meshPropR = useSpring( {
    position: hovered && !active ? [0,-2,2] : [0,0,0],
    rotation: hovered && !active ? [0,0.2,0] : [0,0,0]

  })

  useEffect(() => {
     
    // setActive(trigger);
    new GLTFLoader().load("/mModelR.gltf", setModel)
  }, [])
 

    useFrame(() => {
      if(model) {
        if(active) {
            // primRef.current.rotation.y += 0.01;
        }
        // primRef.current.rotation.y += 0.01;
      // primRef.current.rotation.x += 0.01;
      }
    })
 

  return model ? (
  
    <a.mesh
      position={meshPropR.position}
      rotation={meshPropR.rotation}
    >
    
    <a.primitive  
    // ref={primRef}
    onClick={() => propss.trigger.sendHome()}
   // onClick={() => console.log("test")}
   onPointerOut={() => setHovered2(false)}
   onPointerOver={() => setHovered2(true)}
 //  onPointerOut={() => setHovered(false)}
  object={model.scene} 
   scale={propsR.scale}
   rotation={propsR.rotation}
  position={propsR.position}  /> 
  
  </a.mesh>  ): null


}





const Three = React.memo(props => {
  
  const [logo, activeLogo] = useState(false);
  
  useEffect(() => {
     
  
  }, [])
 
 

  return(
    <Canvas className={"canvus-container"} camera={{position:[0,4,35]} } onCreated={({ gl }) => {
      // gl.shadowMap.enabled = false 
      // gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}> 
     
     <ambientLight intensity={1} />
        <pointLight intensity={1} position={[-1, 0, 30]} />
      {/* <fog attach="fog" args={['#cc7b32', 16, 20]} /> */}
      {/* <Controls/> */}
      {/* <Box /> */}
      {/* <Plane /> */}
      <LeftM trigger={props}  />
    
     <RightM trigger={props}/>
    </Canvas>


   
  ) 

});


  
  export default Three
  