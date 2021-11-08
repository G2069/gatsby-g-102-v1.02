import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import {
  useGLTF,
  useAnimations,
  Text,
  AdaptiveDpr,
} from "@react-three/drei"
import {
  EffectComposer,
  SSAO,
  Bloom,
  Glitch,
} from "@react-three/postprocessing"
import { KernelSize } from "postprocessing"
import { RectAreaLightUniformsLib } from "three-stdlib"
import styled from "styled-components"
import Lvbu from "./Lvbu_cam_v4"
import Background from "./Background"

useGLTF.preload("/lvbu)cam_v4.glb")

RectAreaLightUniformsLib.init()
THREE.Vector2.prototype.equals = function (v, epsilon = 0.001) {
  return Math.abs(v.x - this.x) < epsilon && Math.abs(v.y - this.y) < epsilon
}

const Lights = () => {
  const lights = useRef()
  return (
    <>
      <directionalLight
        intensity={1}
        position={[2, 2, 0]}
        color="red"
        distance={5}
      />
      <spotLight
        intensity={1.5}
        position={[-5, 10, 2]}
        angle={0.7}
        penumbra={1}

        shadow-mapSize={[2048, 2048]}
      />
      <group ref={lights}>
        <rectAreaLight
          intensity={2}
          position={[4.5, 0, -3]}
          width={10}
          height={10}
        />
        <rectAreaLight
          intensity={2}
          position={[-10, 2, -10]}
          width={15}
          height={15}
        />
      </group>
    </>
  )
}

function Effects() {
  const ref = useRef()
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
      <Glitch
        delay={[2.5, 4]}
        duration={[0.2, 0.5]}
        ratio={[0.1]}
        strength={[0.01, 0.1]}
      />
    </EffectComposer>
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
            position={[1.3, 1, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            NFT
          </Text>
          <Text
            position={[1.3, 0.6, 0]}
            fontSize={0.5}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Play to Earn
          </Text>
          <Text
            position={[1.3, 0.15, 0]}
            fontSize={0.33}
            color="black"
            font="/Cyberpunk.ttf"
          >
            Conquer your metaverse
          </Text>
          <Text
            position={[1.3, -0.15, 0]}
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
