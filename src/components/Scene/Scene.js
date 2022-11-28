import {React} from 'react';
import './Scene.scss';
import { Canvas  } from '@react-three/fiber';
import Computer from './Computer.js';

const Scene = () => {

    return (
        <div className="canvas-container">
            <Canvas >
                <pointLight color={[0.564, 0.329, 0.956]} position={[10,10,2]} intensity={3}/>
                <Computer position={[0,-1.2,1]} rotation-y = {Math.PI * -0.5} />
            </Canvas>
        </div>
    )
};
  
export default Scene;