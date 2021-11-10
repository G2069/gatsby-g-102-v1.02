import React from 'react'
import styled from 'styled-components'
import roadmap from '../images/guandao2.png'

const About = () => {
    return (
        <AboutContainer>
            <Roadmap src={roadmap} />
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px)/2);
background: black;
color: #fff;
`

const Roadmap = styled.img`
width: 100%;
height: 100%;
align-items: center;
`