import React, {useState, useRef, useEffect}from 'react'
import './style.scss'
import {Link} from 'react-router-dom';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import {Canvas, useFrame, extend, useThree, Material, useLoader}  from "react-three-fiber";
import {Keyframes} from 'react-spring/renderprops'
import {useSpring, a, config} from 'react-spring/three';

import * as THREE from 'three' 



extend({OrbitControls});


// const SpaceShip = () => {
//   const [model, setModel] = useState();
 
//   useEffect(() => {
//     const model = useLoader(GLTFLoader, "/mModel.gltf")
//     // new GLTFLoader().load("/mModel.gltf", setModel)
//   })

  
//   return model ? <primitive object={model.scene} /> : null
// }

const LeftM = (trigger) => {

   
  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive] = useState(true);
  const [hovered, setHovered] = useState(false);
  
  const props = useSpring({
     to: trigger.active && active ? [{position: [-10,0,-4], config:{mass: 1,tension: 250   }}, 
                  {rotation: [-6.4,0,0], config:{mass: 2, tension: 250 }},
                  {position: [-3,25,0], scale:[0.4,0.4,0.4], rotation:[-5.8, 0,0 ], config:{mass: 1, tension: 250 },  },
                  {onRest: ()=> {setActive(false)}, delay: 400}
                  // {rotation: [1,2,4], config:{duration: 1000, mass: 5}}
                
                
                  ] : null,
    from:  {position: [-6.5,0,-5], rotation: [0,0,0], scale:[1,1,1]}
  })
  const meshProp = useSpring( {
    position: hovered && !active ? [0,-2,2] : [0,0,0],
    rotation: hovered && !active ? [0,0.2,0] : [0,0,0]

  })



  useEffect(() => {
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
             ref={primRef}
            //  onClick={() => setActive(true)}
            // onClick={() => console.log("test")}
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

const RightM = (trigger) => {








  
  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive] = useState(true);
  const [hovered, setHovered] = useState(false);
  
  const props = useSpring({
     to: trigger.active && active ? [{position: [10,0,-4], config:{mass: 1,tension: 250   }}, 
                  {rotation: [6.4,0,0], config:{mass: 2, tension: 250 }},
                  {position: [3,25,0], scale:[0.4,0.4,0.4], rotation:[6.8, 0,0 ], config:{mass: 1, tension: 250 },  },
                  {onRest: ()=> {setActive(false)}, delay: 400}
                  // {rotation: [1,2,4], config:{duration: 1000, mass: 5}}
                
                
                  ] : null,
    from:  {position: [6.5,0,-5], rotation: [0,0,0], scale:[1,1,1]}
  })
  const meshProp = useSpring( {
    position: hovered && !active ? [0,-2,2] : [0,0,0],
    rotation: hovered && !active ? [0,0.2,0] : [0,0,0]

  })



  useEffect(() => {
    // console.log(trigger)
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
      position={meshProp.position}
      rotation={meshProp.rotation}
    >
    
    <a.primitive  
    ref={primRef}
    // onClick={() => setActive(true)}
   // onClick={() => console.log("test")}
   onPointerOut={() => setHovered(false)}
   onPointerOver={() => setHovered(true)}
 //  onPointerOut={() => setHovered(false)}
  object={model.scene} 
   scale={props.scale}
   rotation={props.rotation}
  position={props.position}  /> 
  
  </a.mesh>  ): null


}


function Three (props) {

  console.log(props.active)
  return(
    <Canvas camera={{position:[0,4,35]} } onCreated={({ gl }) => {
      // gl.shadowMap.enabled = false 
      // gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}> 
     
     <ambientLight intensity={1} />
        <pointLight intensity={1} position={[-1, 0, 30]} />
      {/* <fog attach="fog" args={['#cc7b32', 16, 20]} /> */}
      {/* <Controls/> */}
      {/* <Box /> */}
      {/* <Plane /> */}
      <LeftM active={props.active} />
    
     <RightM active={props.active}/>
    </Canvas>


   
  )
}

// class Three extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         scene: null,
//         camera: null,
//         renderer: null,

//       };
      
  
//     }
  
//     threeInit = () => {

//     }
  
//     componentDidMount() {
//       var scene = new THREE.Scene();
//       var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//       var renderer = new THREE.WebGLRenderer({antialias: true});
//       renderer.setSize( window.innerWidth, window.innerHeight );
//       // document.body.appendChild( renderer.domElement );
//       // use ref as a mount point of the Three.js scene instead of the document.body
//       this.mount.appendChild( renderer.domElement );
//       var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//       var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//       var cube = new THREE.Mesh( geometry, material );
//       scene.add( cube );
//       camera.position.z = 2;
//       var animate = function () {
        
//         requestAnimationFrame( animate );
        
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;


//         renderer.render( scene, camera );
//       };
//       animate();
//     }
   
  
//     render() {
//       return(<div className="content-container">
      

//       <div ref={ref => (this.mount = ref)} />
//           <div className></div>
  
//       </div>)
  
  
  
  
//     }
  
  
//   }
  
  
  export default Three
  