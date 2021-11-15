import React from "react"
import "./Button.css"
import styled from "styled-components"

const CyberButton = () => {
  return (
      <ButtonWrapper>
    <button class="cybr-btn">
      Join Presale<span aria-hidden>_</span>
      <span aria-hidden class="cybr-btn__glitch">
        Join Presale
      </span>
    </button>
    </ButtonWrapper>
  )
}

export default CyberButton


const ButtonWrapper = styled.div`
position: relative;
`