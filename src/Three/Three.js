import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  useGLTF,
  OrbitControls,
  useAnimations,
  Text,
  AdaptiveDpr,
  Html,
} from "@react-three/drei"
import {
  EffectComposer,
  SSAO,
  Bloom,
  Glitch,
} from "@react-three/postprocessing"
import { KernelSize, BlendFunction } from "postprocessing"
import { RectAreaLightUniformsLib } from "three-stdlib"
import styled from "styled-components"
import Lvbu from "./Lvbu_cam_v4"

useGLTF.preload("/lvbu)cam_v4.glb")

RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}

function useLerpedMouse() {
  const mouse = useThree(state => state.mouse)
  const lerped = useRef(mouse.clone())
  const previous = new THREE.Vector2()
  useFrame(state => {
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
  useFrame(state => {
    lights.current.rotation.x = (mouse.current.x * Math.PI) / 2
    // lights.current.rotation.y = Math.PI * 0.25 - (mouse.current.y * Math.PI) / 2
  })
  return (
    <>
      <directionalLight
        intensity={1}
        position={[2, 2, 0]}
        color="red"
        distance={5}
      />
      <spotLight
        intensity={1}
        position={[-5, 10, 2]}
        angle={0.7}
        penumbra={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <group ref={lights}>
        <rectAreaLight
          intensity={2}
          position={[4.5, 0, -3]}
          width={10}
          height={10}
          onUpdate={self => self.lookAt(0, 0, 0)}
        />
        <rectAreaLight
          intensity={2}
          position={[-10, 2, -10]}
          width={15}
          height={15}
          onUpdate={self => self.lookAt(0, 0, 0)}
        />
      </group>
    </>
  )
}

function Effects() {
  const ref = useRef()
  useFrame(state => {
    // Disable SSAO on regress
    ref.current.blendMode.setBlendFunction(
      state.performance.current < 1
        ? BlendFunction.SKIP
        : BlendFunction.MULTIPLY
    )
  }, [])
  return (
    <EffectComposer multisampling={8}>
      <SSAO
        ref={ref}
        intensity={15}
        radius={10}
        luminanceInfluence={0}
        bias={0.035}
      />
      <Bloom
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.55}
        luminanceSmoothing={0.2}
        intensity={0.67}
      />
      <Glitch delay={[2.5, 4]} duration={[0.2, 0.5]} ratio={[0.3]} />
    </EffectComposer>
  )
}

function Background(props) {
  const ref = useRef()
  return (
    <mesh {...props} ref={ref} scale={11} position={[0, 1, -1.2]}>
      <planeGeometry />
      <meshStandardMaterial
        color="lightblue"
        toneMapped={false}
        fog={false}
        envMapIntensity={0}
      />
      <Html>
      <p>hi</p>
    </Html>
    </mesh>
  )
}

const Three = () => {
  return (
    <ThreeContainer>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <color attach="background" args={["lightblue"]} />
        <Lights />
        <Suspense fallback={null}>
          <Lvbu scale={0.1} position={[-2, -5.9, 0.3]} />
          <Text
            position={[0, -0.3, -1.2]}
            fontSize={2.5}
            color="white"
            material-fog={false}
            letterSpacing={0.1}
            font="/orbitron.bold.ttf"
          >
            G-102
          </Text>
          <Text
            position={[1.35, 1, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            NFT
          </Text>
          <Text
            position={[1.35, 0.6, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Play to Earn
          </Text>
          <Text
            position={[1.35, 0.15, 0]}
            fontSize={0.33}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Conquer your metaverse
          </Text>
          <Text
            position={[1.35, -0.15, 0]}
            fontSize={0.33}
            color="black"
            font="/Cyberpunk.ttf"
          >
            world now
          </Text>
        </Suspense>
        <Background />
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
