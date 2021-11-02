import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, Environment, Stage, OrbitControls, useAnimations } from '@react-three/drei'
import styled from "styled-components"
import Lvbu from './Lvbu_cam_v2'


const Three = () => {
  return(
    <ThreeContainer>
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <Suspense fallback={null}>
          <Lvbu scale={0.1} position={[0,-6,0.3]} />
      </Suspense>
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
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
`