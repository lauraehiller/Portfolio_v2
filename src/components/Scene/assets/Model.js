/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF, RenderTexture, PerspectiveCamera, Text, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import glb from './Model.glb';

export default function Model( props) {
  const { nodes, materials } = useGLTF(glb)
  
  /*const name = useRef()
  const dev = useRef()
  const orb = useRef()

  const glowing = [name, dev, orb];
  setData(glowing);*/
  const ref = useRef()
  /*const text1Ref = useRef()
  const text2Ref = useRef()
  useFrame((state) => {
    text1Ref.current.position.y = (text1Ref.current.position.y >= -2.5) ? text1Ref.current.position.y - 0.02 : 2
  })*/
 
  return (
    <group {...props} dispose={null}>
      <group position={[0.86, 1.1, -2.96]} scale={[0.14, 1.56, 0.14]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Wood.003']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Wood.001']} />
        <mesh geometry={nodes.Cylinder003_3.geometry} material={materials['Wood.002']} />
      </group>
      <mesh geometry={nodes.Laptop.geometry} material={materials.Gray_Metal} position={[-0.3, 2.78, -1.54]} rotation={[0, -0.11, -1.58]} scale={[0.03, 0.54, 0.97]} />
      <mesh geometry={nodes.Screen.geometry} material={materials['Black_Metal.001']} position={[-0.82, 3.45, -1.59]} rotation={[0, -0.11, 0]} scale={[0.01, 0.55, 0.95]} />
      <mesh geometry={nodes.Mug.geometry} material={materials.Ceramic} position={[0.72, 3, 2.85]} rotation={[-3.06, -0.68, 1.65]} scale={[0.19, 0.28, 0.27]} />
      <group position={[-0.76, 3.76, 1.61]} rotation={[0, 0.21, 0]} scale={[0.02, 0.78, 1.46]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['Gray_Metal.001']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Gray_Metal} />
      </group>
      <mesh geometry={nodes.Monitor_screen.geometry} material={materials.Code} position={[-0.73, 3.81, 1.6]} rotation={[0, 0.21, 0]} scale={[0.01, 0.69, 1.41]} >
      <meshStandardMaterial>
        {/*<RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['black']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          
          <Text ref={text1Ref} position= {[0,-1.8,0]} fontSize={.1} color="green" rotation={[Math.PI * 1, 0, 0]}>
            lkjaskldnfkjejwiojkl,mn,msdjclkajew,kns,mcn
          </Text>
  </RenderTexture>*/}
      </meshStandardMaterial>
      </mesh>
      <mesh ref={ref}geometry={nodes.Pink_globe.geometry} material={materials.Pink_glow} position={[-0.73, 3, -2.91]} scale={0.3} >
        <meshBasicMaterial color={ref.color} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Yellow_globe.geometry} material={materials['Blue_glow.001']} position={[-0.77, 3.44, -3.12]} scale={0.23} >
        <meshBasicMaterial color={[4, 1, 0]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Blue_globe.geometry} material={materials.Blue_glow} position={[-0.77, 3.72, -2.82]} scale={0.2} >
        <meshBasicMaterial color={[0, 1, 4]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Green_globe.geometry} material={materials.Green_glow} position={[-0.77, 4.03, -3]} scale={0.15} >
        <meshBasicMaterial color={[0, 2, 0.1]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Red_globe.geometry} material={materials.Red_glow} position={[-0.56, 3.89, -2.91]} scale={0.13} >
        <meshBasicMaterial color={[2, 0, 0]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Purple_globe.geometry} material={materials.Purple_glow} position={[-0.56, 3.31, -2.95]} scale={0.08} >
        <meshBasicMaterial color={[2, 0, 2]} toneMapped={false} />
      </mesh>
      <mesh  geometry={nodes.Orange_globe.geometry} material={materials.Orange_glow} position={[-0.75, 4.2, -2.87]} scale={0.08} >
        <meshBasicMaterial color={[4, 0.1, 0.1]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Name.geometry} material={materials['Off-White']} position={[-1.29, 5.55, 1.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <meshBasicMaterial color={[0, 1, 4]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Dev.geometry} material={materials.Purple} position={[-1.26, 5, 2.17]} rotation={[Math.PI / 2, -0.05, -Math.PI / 2]} scale={[0.47, 0.36, 0.57]} >
      <meshBasicMaterial color={[4, 0.1, 1]} toneMapped={false} />
      </mesh>
      <group position={[0.07, 2.81, -1.5]} rotation={[0, -0.11, -1.58]} scale={[.005, -0.12, -0.22]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials['Black.006']} />
        <mesh geometry={nodes.Cube013_2.geometry} material={materials['Black.024']} />
      </group>
      <mesh geometry={nodes.Pot.geometry} material={materials.Pot} position={[-0.76, 2.99, -0.22]} scale={[0.28, 0.23, 0.28]} />
      <mesh geometry={nodes.Dirt.geometry} material={materials.Dirt} position={[-0.76, 3.14, -0.22]} scale={[-0.28, 0.04, -0.27]} />
      <group position={[-0.81, 3.18, -0.39]} rotation={[1.3, 0.1, -0.34]} scale={[0.09, 0.03, 0.35]}>
        <mesh geometry={nodes.Sphere009.geometry} material={materials['Leaf.002']} />
        <mesh geometry={nodes.Sphere009_1.geometry} material={materials.Leaf} />
        <mesh geometry={nodes.Sphere009_2.geometry} material={materials['Leaf.001']} />
        <mesh geometry={nodes.Sphere009_3.geometry} material={materials['Leaf.003']} />
        <mesh geometry={nodes.Sphere009_4.geometry} material={materials['Leaf.004']} />
        <mesh geometry={nodes.Sphere009_5.geometry} material={materials['Leaf.005']} />
        <mesh geometry={nodes.Sphere009_6.geometry} material={materials['Leaf.006']} />
        <mesh geometry={nodes.Sphere009_7.geometry} material={materials['Leaf.007']} />
        <mesh geometry={nodes.Sphere009_8.geometry} material={materials['Leaf.008']} />
      </group>
      <mesh geometry={nodes.Coffee.geometry} material={materials.Dirt} position={[0.59, 3.17, 2.66]} rotation={[0, 0.19, 0]} scale={[-0.2, -0.03, -0.2]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Paper} position={[0.3, 2.77, 1.28]} rotation={[0, 0.62, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Paper1.geometry} material={materials.Paper} position={[0.3, 2.77, 0.93]} rotation={[0, 0.41, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Paper2.geometry} material={materials.Paper} position={[0.3, 2.77, 0.3]} rotation={[0, -0.37, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Pencil.geometry} material={materials.Pencil} position={[0.36, 2.79, 0.81]} rotation={[-0.04, -0.56, -1.59]} scale={[-0.02, -0.43, -0.02]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Walls} position={[2.4, 3.28, 0.1]} scale={[3.75, 4.76, 10.0]} />
    </group>
  )
}

useGLTF.preload(glb)

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/