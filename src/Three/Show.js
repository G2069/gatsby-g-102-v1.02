import React, { Suspense, useRef } from "react"
import { ThreeContainer } from "./Three"
import { Canvas } from "@react-three/fiber"
import Lvbu from "./Main-model"

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

const Show = () => {
  return (
    <ThreeContainer>
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
            <Lvbu position={[-2, -5.9, 0]} />
        </Suspense>
      </Canvas>
    </ThreeContainer>
  )
}

export default Show
