import {React, useEffect, useRef, Suspense} from 'react';
import './Scene.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/*import Building from './Building';*/
import { EffectComposer, Bloom, Vignette, Noise, DepthOfField } from '@react-three/postprocessing';
import { useTexture } from "@react-three/drei";
import texture from  '../../images/building.jpg';

import CityNew from "./assets/City_new.js";



function Buildings({ count = 25, temp = new THREE.Object3D() }) {
    const ref = useRef();
    const buildingHeights = [
        3,4,3,4,3,
        4,5,6,5,4,
        3,6,7,6,3,
        4,5,6,5,4,
        3,4,3,4,3
    ];
    const buildingOffsets = [
        -1.2,-.5,-.2,.5,1.2,
        -2.5,-0.8,0.3,1.0,2.5,
        -3.5,-2.5,-1.0,1.7,3.5,
        -2.5,-1.5, -0.5,0.5,2.5,
        -1.2,-.5,-.2,.5,1.2
    ];
    const buildingTexture = useTexture(texture, (tex) => {
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    });
    useEffect(() => {
      // Set positions
      for (let i = 0; i < count; i++) {
        let height = buildingHeights[i];
        let width = 1 + (height * .1);
        let z = 2 * (Math.floor(i / 5) - 7);
        let xOff = buildingOffsets[i];
        let x = xOff + (i - (Math.floor(i / 5) * 5) - 2);
        //console.log(x);
        //console.log("i=" + i + " x=" + x + " z=" + z);
        temp.scale.set(width, height, width);
        temp.position.set(x, height / 2, z);
        temp.updateMatrix()
        ref.current.setMatrixAt(i, temp.matrix)
      };
      // Update the instance
      ref.current.instanceMatrix.needsUpdate = true
    }, []);
    return (
      <instancedMesh ref={ref} args={[null, null, count]}>
        <boxGeometry args={[.6, 1, .6]} />
        <meshStandardMaterial map={buildingTexture}>
       </meshStandardMaterial>
        
      </instancedMesh>
    )
}

function Scene() {

    return (
        <div className="canvas-container">
            <Canvas camera={{position: [0,5,2], fov: 60}}>
                <color attach="background" args={['rgba(26, 0, 68, 1.0)']} />
                {/* <ambientLight /><pointLight position={[0, 15, 0]} />*/}
                
                <hemisphereLight intensity={0.5} position={[5, 10, 50]} />
                
                <OrbitControls target={[0,3.5,-6]}/>
                <Suspense fallback={null}>
                    <CityNew position={[0,0,-9]} rotation-y={Math.PI * -0.5}/>
                </Suspense>

                <mesh position={[0,-.35,-10]} rotation-x={Math.PI * -0.5}>
                    <planeBufferGeometry attach="geometry" args={[80, 25]}/>
                    <meshPhongMaterial attach="material" color="rgba(26, 0, 68, 1.0)" />
                </mesh>
                
                <fog attach="fog" color="rgba(26, 0, 68, 1.0)" near={0} far={25}/>
                
                {/* 
                <Buildings />
                */}
                <EffectComposer>
                    {/*<Noise opacity={0.05} /><DepthOfField focusDistance={0} focalLength={0.03} bokehScale={1} height={480} />*/}
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={500} />
                    
                    <Vignette eskil={false} offset={0.1} darkness={1.2} />
                </EffectComposer>

            </Canvas>
            
        </div>
    )
};
  
export default Scene;