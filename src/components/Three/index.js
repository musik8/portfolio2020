import React, {useState, useRef, useEffect}from 'react'
import './style.scss'
import {Link} from 'react-router-dom';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import {Canvas, useFrame, extend, useThree, Material, useLoader}  from "react-three-fiber";
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

const LeftM = () => {

  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const props = useSpring({
  //   scale: hovered ? [2,2,2] : [0.5,0.5,0.5],
  //   position: active ? [0,0,5] : [0,0,0],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  // })

  // const [props] = useSpring({
  //   to: async (next, cancel) => {
  //     await next({position: [5,5,5], config:{duration: 5000, mass: 5}})
  //     await next({position: [-5,-5,5], config:{duration: 1000}})
  //   },
  //   from: {position: [0,0,0]}
  // })

  const props = useSpring({
    to:  active ? [{position: [5,5,5], config:{duration: 1000, mass: 5}}, 
                  {position: [1,2,4], config:{duration: 1000, mass: 5}},
                  {rotation: [1,2,4], config:{duration: 1000, mass: 5}}
                
                
                  ] : [0,0,0],
    from: {position: [0,0,0], rotation: [0,0,0]}
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
    
    
           <a.primitive  
             ref={primRef}
             onClick={() => setActive(true)}
            // onClick={() => console.log("test")}
            // onPointerOut={() => setActive(false)}
            // onPointerOver={() => setActive(true)}
          //  onPointerOut={() => setHovered(false)}
           object={model.scene} 
            scale={props.scale}
            rotation={props.rotation}
           position={props.position}  /> 
  
    ): null


}

const RightM = () => {

  //This is used in useFrame
  const primRef = useRef();
  const [model, setModel] = useState()

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    scale: hovered ? [2,2,2] : [0.5,0.5,0.5],
    position: active ? [0,0,5] : [0,0,0],
  })

  useEffect(() => {
    new GLTFLoader().load("/mModelR.gltf", setModel)
  }, [])
 

    useFrame(() => {
      if(model) {
        // primRef.current.rotation.y += 0.01;
      // primRef.current.rotation.x += 0.01;
      }
    })
 

  return model ? (
    
    
           <a.primitive  
             ref={primRef}
            //  onClick={() => setHovered(true)}
            // // onClick={() => console.log("test")}
            // onPointerOut={() => setActive(false)}
            // onPointerOver={() => setActive(true)}
          //  onPointerOut={() => setHovered(false)}
          // rotation={[deg(-20), 0, 0]}
           object={model.scene} 
            scale={props.scale}
            // rotation={}
           position={props.position}  /> 
  
    ): null


}





// const Controls = () => {

//   const orbitRef = useRef();
//   const {camera, gl} = useThree()
  
//   useFrame(()=> {
//     orbitRef.current.update()
//   })

//   return (
//     <orbitControls
//     autoRotate
//     maxPolorAngle={Math.PI / 2}
//     minPolarAngle={Math.PI / 3}
//       args={[camera, gl.domElement]}
//       ref={orbitRef}
//     />
//   )
// }

// const Plane = () => {
 
//  return(<mesh rotate={[-Math.PI /2, 0 ,0]}>
//      <planeBufferGeometry
//       attach="geometry"
//       args={[100, 100]}
//     />
//     <meshPhysicalMaterial attach="material" color="red" />  
    


    
//   </mesh>)
// }



const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="red" />
  </mesh>
)

const Box = () => {
  //This is used in useFrame
  // const meshRef = useRef(); 
 
  const [hovered, setHovered] = useState(false);
  // const [active, setActive] = useState(false);
  // const props = useSpring({
  //   scale: active ? [1.5,1.5,1.5] : [1,1,1],
  //   color: hovered ? 'pink': 'gray'
  // })


  //executed every frame
  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01;
  //   meshRef.current.rotation.x += 0.01;
  // })
  
 
  return(
  <a.mesh 
    // ref={meshRef}
    // onPointerOver={() => setHovered(true)}
    // onPointerOut={() => setHovered(false)}
    // onClick={()=>setActive(!active)}
    // scale={props.scale}
    // castShadow
  > 
    <ambientLight />
    {/* <pointLight intensity={2} position={[-10, -25, -10]} /> */}
    <spotLight
      // castShadow
      // penumbra={1}
      // position={[0,5,10]}

      intensity={1.25}
      angle={Math.PI / 8}
      position={[25, 25, 15]}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}

    />
    {/* <boxBufferGeometry
      attach="geometry"
      args={[1, 1, 1]}
    /> */}
    {/* <a.meshPhysicalMaterial attach="material" color={props.color} /> */}
  </a.mesh>)
}

function Three () {

  
  return(
    <Canvas camera={{position:[-0.4,4,20]} } onCreated={({ gl }) => {
      // gl.shadowMap.enabled = false 
      // gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}> 
     
     <ambientLight intensity={1} />
        {/* <pointLight intensity={2} position={[-10, -25, -10]} /> */}
      {/* <fog attach="fog" args={['#cc7b32', 16, 20]} /> */}
      {/* <Controls/> */}
      {/* <Box /> */}
      {/* <Plane /> */}
      <LeftM />
      <RightM />
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
  