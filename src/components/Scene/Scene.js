import {React} from 'react';
import './Scene.scss';
import { Canvas  } from '@react-three/fiber';
import Computer from './Computer.js';

function Scene() {

    return (
        <div className="canvas-container">
            <Canvas >
                <color attach="background" args={['black']} />
                <pointLight color={[144/255, 84/255, 244/255]} position={[10,10,2]} intensity={2}/>
                <Computer position={[0,-1.2,1]} rotation-y = {Math.PI * -0.5} />
            </Canvas>
        </div>
    )
};
  
export default Scene;