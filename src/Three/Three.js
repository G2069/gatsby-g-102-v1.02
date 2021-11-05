import * as THREE from 'three'
import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Stage, OrbitControls, useAnimations, Text, AdaptiveDpr } from '@react-three/drei'
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'
import { RectAreaLightUniformsLib } from 'three-stdlib'
import styled from "styled-components"
import Lvbu from './Lvbu_cam_v4'

RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}

function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame((state) => {
    previous.copy(lerped.current)
    lerped.current.lerp(mouse, 0.1)
    // Regress system when the mouse is moved
    if (!previous.equals(lerped.current)) state.performance.regress()
  })
  return lerped
}

const Lights = () => {
  const lights = useRef()
  const mouse = useLerpedMouse()
  useFrame((state) => {
    lights.current.rotation.x = (mouse.current.x * Math.PI) / 2
    // lights.current.rotation.y = Math.PI * 0.25 - (mouse.current.y * Math.PI) / 2
  })
  return (
    <>
      <directionalLight intensity={1} position={[2, 2, 0]} color="red" distance={5} />
      <spotLight intensity={2} position={[-5, 10, 2]} angle={0.2} penumbra={1} castShadow shadow-mapSize={[2048, 2048]} />
      <group ref={lights}>
        <rectAreaLight intensity={2} position={[4.5, 0, -3]} width={10} height={10} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        <rectAreaLight intensity={2} position={[-10, 2, -10]} width={15} height={15} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </group>
    </>
  )
}

function Effects() {
  const ref = useRef()
  useFrame((state) => {
    // Disable SSAO on regress
    ref.current.blendMode.setBlendFunction(state.performance.current < 1 ? BlendFunction.SKIP : BlendFunction.MULTIPLY)
  }, [])
  return (
    <EffectComposer multisampling={8}>
      <SSAO ref={ref} intensity={15} radius={10} luminanceInfluence={0} bias={0.035} />
      <Bloom kernelSize={KernelSize.LARGE} luminanceThreshold={0.55} luminanceSmoothing={0.2} />
    </EffectComposer>
  )
}

const Three = () => {
  return(
    <ThreeContainer>
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
    <color attach="background" args={['lightblue']} />
<Lights/>
      <Suspense fallback={null}>
          <Lvbu scale={0.1} position={[0,-5.9,0.3]} />
          <Text position={[0, 0, -1.2]} fontSize={3} color="white" material-fog={false} letterSpacing={0.1}>
          G-102
        </Text>
      </Suspense>
      <mesh scale={11} position={[0, 1, -1.2]}>
        <planeGeometry />
        <meshStandardMaterial color="black" toneMapped={false} fog={false} envMapIntensity={0} />
      </mesh>
      <AdaptiveDpr />
      <Effects />
    </Canvas>
  </ThreeContainer>
  )
}

export default Three

const ThreeContainer = styled.div`
background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  color: #fff;
`