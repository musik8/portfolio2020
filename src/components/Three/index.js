import React, {useState, useRef, useEffect}from 'react'
import './style.scss'
import {Link} from 'react-router-dom';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {Canvas, useFrame, extend, useThree}  from "react-three-fiber";
import {useSpring, a} from 'react-spring/three';
import * as THREE from 'three' 


extend({OrbitControls});


const SpaceShip = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new OBJLoader().load('./../assets/models/m.obj', setModel)
  })

  return (
    model ? <primitive object={model.scene}/> : null
  )
}


const Controls = () => {

  const orbitRef = useRef();
  const {camera, gl} = useThree()
  
  useFrame(()=> {
    orbitRef.current.update()
  })

  return (
    <orbitControls
    autoRotate
    maxPolorAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

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
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5,1.5,1.5] : [1,1,1],
    color: hovered ? 'pink': 'gray'
  })


  //executed every frame
  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01;
  //   meshRef.current.rotation.x += 0.01;
  // })
  
 
  return(
  <a.mesh 
    // ref={meshRef}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    onClick={()=>setActive(!active)}
    scale={props.scale}
    castShadow
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
    <boxBufferGeometry
      attach="geometry"
      args={[1, 1, 1]}
    />
    <a.meshPhysicalMaterial attach="material" color={props.color} />
  </a.mesh>)
}

function Three () {

  
  return(
    <Canvas camera={{position:[0,0,5]} } onCreated={({ gl }) => {
      gl.shadowMap.enabled = true 
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}> 
      {/* <fog attach="fog" args={['#cc7b32', 16, 20]} /> */}
      <Controls/>
      <Box />
      <Plane />
      <SpaceShip />
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
  