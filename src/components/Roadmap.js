import React from "react"
import styled from "styled-components"
import roadmap from "../images/guandao2.png"
import background from "../images/background.png"

const Roadmap = () => {
  return (
    <RoadContainer>
      <RoadBg>
        <RoadImg src={background} />
        <RoadGraph src={roadmap} />
      </RoadBg>
    </RoadContainer>
  )
}

export default Roadmap

const RoadContainer = styled.div`
  color: #fff;

  @media screen and (max-width: 768px) {
      padding: 100px 0
  }
`
const RoadBg = styled.div`
  max-width: 555px;
  height: 100%;
`

const RoadImg = styled.img`
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
`

const RoadGraph = styled.img`
  

`
