import React, { useRef } from "react"
import { Html } from "@react-three/drei"
import { useThree } from '@react-three/fiber'
import { Link } from "gatsby"
import "./Button.css"
import CyberButton from "./CyberButton"

const Background = props => {
  const ref = useRef()
  const { viewport } = useThree()
  return (
    <mesh {...props} ref={ref} scale={(viewport.width * 4)} position={[0, 1, -2]}>
      <planeGeometry />
      <meshStandardMaterial
        color="lightblue"
        toneMapped={false}
        fog={false}
        envMapIntensity={0}
      />
      <Html>
        <Link to="/page-2">
          <CyberButton />
        </Link>
      </Html>
    </mesh>
  )
}

export default Background
