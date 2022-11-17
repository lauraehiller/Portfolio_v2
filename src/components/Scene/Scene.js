import {React, useEffect, useRef, Suspense, useState} from 'react';
import './Scene.scss';
import { Canvas, extend  } from '@react-three/fiber';
import { Effects, OrbitControls, Bounds, useTexture, Stats } from '@react-three/drei';
import * as THREE from 'three';
import {  SelectiveBloom, Vignette, Noise, DepthOfField } from '@react-three/postprocessing';
import { UnrealBloomPass } from 'three-stdlib';

import Model from "./assets/Model.js";


extend({ UnrealBloomPass })

function Scene() {
    /*const lightRef = useRef();
    const glowref = useRef()
    const glowing=[glowref];
    
    const [data, setData] = useState(null);*/

    return (
        <div className="canvas-container">
            {/*<Canvas camera={{position: [5,5,1]> {position: [3,3.5,4]}*/}
            <Canvas >
                <color attach="background" args={['rgba(26, 0, 68, 1.0)']} />
                {/*position: [0,5,2] target={[0,3.5,-6]}<ambientLight /><pointLight position={[0, 15, 0]} />*/}
                <pointLight position={[0,4,4]}/>
                <hemisphereLight intensity={0.3} position={[5, 10, 50]} />
                {/*<mesh position={[0,0,1.4]} ref={glowref}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color={'red'} />
    </mesh>*/}
                <Suspense fallback={null}>
                    {/*<Model position={[6,2.5,-8]} rotation-y={Math.PI * -.4}/>
                    <Model position={[3,-1,-3]} rotation-y={Math.PI * -.45}/>*/}
                    <Model position={[0,-3.6,1.4]} rotation-y={Math.PI * -.5} rotation-x={Math.PI * .02}/>
                </Suspense>
                
                {/*<fog attach="fog" color="rgba(26, 0, 68, 1.0)" near={0} far={25}/>*/}
                
                
                {/*<Vignette eskil={false} offset={0.1} darkness={0.8} />*/}
                 
                <Effects disableGamma>
                    {/*<SelectiveBloom selection={glowing} luminanceThreshold={0.01} intensity={2.0} luminanceSmoothing={0.025} lights={[lightRef]} />*/}
                    <unrealBloomPass threshold={1} strength={0.5} radius={0.5}/>
                </Effects>
                <Stats />

            </Canvas>
            
        </div>
    )
};
  
export default Scene;

/*
            <Canvas camera={{position: [0,5,1], fov: 60}}>
                <color attach="background" args={['black']} />
                <pointLight position={[0,10.0,0]}/>
                
                <OrbitControls target={[0,3.5,-6]}/>
                <Bounds fit clip observe damping={6} margin={1.2}>
                    <mesh />
                </Bounds>
                <Suspense fallback={null}>
                    <Model position={[5,1.0,-8]} rotation-y={Math.PI * -0.6}/>
                </Suspense>*/