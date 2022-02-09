import React ,{ useEffect} from "react";
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import dato from './PinoNevado.glb'
import dato from './arbolito2.glb'

import * as dat from 'dat.gui';
import { PerspectiveCamera } from "three";
import { render } from "@testing-library/react";

const Object3d = () =>{

    let aniani = React.useRef();

    
// useEffect(()=>{
//         // console.log(aniani.current);

    
//     const gui = new dat.GUI();
//     const scene = new THREE.Scene()
//     // scene.add(new THREE.AxesHelper(5))

//     const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
//     grid.material.opacity = 0.2;
//     grid.material.transparent = true;
//     scene.add( grid );

//     const light = new THREE.PointLight()
//     light.position.set(0.8, 1.4, 1.0)
//     scene.add(light)

//     const ambientLight = new THREE.AmbientLight()
//     scene.add(ambientLight)

//     const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     )
//     // camera.position.set(0.8, 1.4, 1.0)
//     // camera.position.set(2,3, 4)
    
//     camera.position.x = 0;  
//     camera.position.y = 10;
//     camera.position.z = 6;
//     scene.add(camera)

//     let rollup = gui.addFolder('Perspective');
//     rollup.add(camera.position,'y',0,100)
//     rollup.add(camera.position,'x',0,100)
//     rollup.add(camera.position,'z',0,100)
//     // camera.set(0, 1, 0)
//     // camera.up.x = 0;
//     // camera.up.y = 0;
    
//     // camera.up.z = 0;
//     // camera.translateZ(1)
//     // camera.rotation.x = Math.PI / 40;
//     // const pt= new THREE.Vector3(-100,-100,-200)
//     // camera.lookAt(pt);
//     // console.log(camera.position)
//     // const a = new THREE.Euler( 10, 100, 10, 'XYZ' );
//     // camera.rotation.y=a


//     // const orthographicCamera = new THREE.OrthographicCamera(100,100,100,100,100,100)
//     // scene.add(orthographicCamera)
//     // console.log(orthographicCamera)
//     const renderer = new THREE.WebGLRenderer({alpha:true})
//     renderer.setSize(window.innerWidth , window.innerHeight)
//     aniani.current.appendChild( renderer.domElement );

   
   

//     const loader = new GLTFLoader();
//     loader.load(dato,gltf=>{
//         // gltf.scale.set(0.01, 0.01, 0.01)
//         scene.add(gltf.scene);
 
//         // window.requestAnimationFrame( render );
//         // gltf.rotation.x += 0.01;
//         // gltf.rotation.y += 0.01;
//         // renderer.render( scene, camera );
//     },
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened'+ error );

// 	}
//     );

//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true;
//     //  controls.target.set(0, 1, 0);
//     // console.log(controls)

//     // const box = new THREE.Box3();

//     // const mesh = new THREE.Mesh(
//     //     new THREE.SphereGeometry(),
//     //     new THREE.MeshBasicMaterial()
//     // );

//     // mesh.geometry.computeBoundingBox();
//     // in the animation loop, compute the current bounding box with the world matrix
//     // box.copy( mesh.geometry.boundingBox ).applyMatrix4( mesh.matrixWorld );


//     function render() {
//         // window.requestAnimationFrame( render );
//         // scene.rotation.x += 0.01;
//         // scene.rotation.y += 0.01;
//         renderer.render( scene, camera );

//     }

//     render();
// })


useEffect(()=>{

    let scene = new THREE.Scene();
    let clock = new THREE.Clock();
    let mixer
    // scene.background = new THREE.Color('#7267CB')
    // scene.fog=new THREE.Fog(0x76456c,0.1,8)
    // const scene = new THREE.Scene()
    //     scene.add(new THREE.AxesHelper(5))

        // const light3 = new THREE.PointLight()
        // light3.position.set(0,0.5, 1)
        // scene.add(light3)
        // const light2 = new THREE.DirectionalLight(0xffffff)
        // light2.position.set(0,0.5, 1)
        // scene.add(light2)
        
        const light = new THREE.SpotLight()
        light.position.set(0,0.5, 1)
        scene.add(light)
        

        const ambientLight = new THREE.AmbientLight()
        scene.add(ambientLight)

    let camera = new THREE.PerspectiveCamera(
        75,
        350/650, 
        // window.innerWidth/window.innerHeight,
        0.1,
        1000
    )
    scene.add(camera)

    let renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(350,650)
    // renderer.setSize(window.innerWidth,window.innerHeight,)
    aniani.current.appendChild(renderer.domElement)
    let object;
    let loader = new GLTFLoader();
            loader.load(dato,gltf=>{
                // gltf.scale.set(0.01, 0.01, 0.01)
                scene.add(gltf.scene);
                // window.requestAnimationFrame( render );
                // renderer.render( scene, camera );  
                object =new THREE.Mesh(
                    gltf,
                    new THREE.MeshLambertMaterial({color:0x00ff00})
                )
                // object.scale.set(0.2,0.2,0.2)
                object.position.set(0,0,0)
                object.rotation.set(0.8,0,0)

                // mixer = new THREE.AnimationMixer( gltf.scene );
                // gltf.animations.forEach( ( clip ) => {
                //     mixer.clipAction( clip ).play();
                // })
                // animate()
                renderer.render(scene,camera)
       
            })

            
            camera.position.x= 0
            camera.position.y= 1
            camera.position.z= 3

            function render(){
                // window.requestAnimationFrame( render );
                // loader.rotation.x += 0.01;
                // loader.rotation.y += 0.01;
                // renderer.render(scene,camera)
            }
            render()

            // function animate() {
  
            //     requestAnimationFrame( animate );
                
            //     var delta = clock.getDelta();
                
            //     if ( mixer ) mixer.update( delta );
              
            //     renderer.render( scene, camera );
              
            // }
            
    
})

    return(
        <>
            <div ref={aniani}>
               
            </div>
        </>
    )
}
export default Object3d;