import React, { useRef } from "react"
import { Html } from "@react-three/drei"
import './Button.css'

const Background = props => {
  const ref = useRef()
  return (
    <mesh {...props} ref={ref} scale={11} position={[0, 1, -2]}>
      <planeGeometry />
      <meshStandardMaterial
        color="lightblue"
        toneMapped={false}
        fog={false}
        envMapIntensity={0}
      />
      <Html>
        <button class="cybr-btn">
          Join Presale<span aria-hidden>_</span>
          <a href='google.com'><span aria-hidden class="cybr-btn__glitch">
            Join Presale
          </span>
          </a>
        </button>
      </Html>
    </mesh>
  )
}

export default Background
