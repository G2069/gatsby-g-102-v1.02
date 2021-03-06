import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import Model from "./Second"
import Overlay from "./Overlay"
import "./Show.css"
import { Environment } from "@react-three/drei"

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
  const scroll = useRef(0)
  const overlay = useRef()
  const caption = useRef()

  return (
    <>
      <Canvas
        onCreated={state => state.events.connect(overlay.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Environment path="/cube" />
            <Model scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}

export default Show
