import React, { Suspense } from "react";
import "./Scene.scss";
import { Canvas } from "@react-three/fiber";
import DesktopComputer from "./DesktopComputer.js";

const Scene = () => {
  return (
    <Suspense fallback={<div className="hidden-canvas"></div>}>
      <div className="canvas-container">
        <Canvas>
          <pointLight
            color={[0.564, 0.329, 0.956]}
            position={[10, 10, 2]}
            intensity={3}
          />
          <DesktopComputer
            position={[0, -1.2, 1]}
            rotation-y={Math.PI * -0.5}
          />
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
