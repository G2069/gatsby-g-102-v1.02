import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Staking</FooterLink>
              <FooterLink to="/">Whitepaper</FooterLink>
              <FooterLink to="/">Audit</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              G-102
            </SocialLogo>
            <WebsiteRight>
              G-102 © {new Date().getFullYear()} All rights reserved.
            </WebsiteRight>
            <SocialIcons>
              <SocialIconLink1 href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink1>
              <SocialIconLink2 href="/" target="_blank" arial-label="Telegram">
                <FaTelegram />
              </SocialIconLink2>
              <SocialIconLink3 href="/" target="_blank" arial-label="Discord">
                <FaDiscord />
              </SocialIconLink3>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background-color: #101522;
`

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    padding-top: column;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;

  &:hover {
    color: cyan;
    transition: 0.3s ease-out;
  }
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

const WebsiteRight = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`

const SocialIconLink1 = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #00acee;
    transition: 0.3s ease-out;
  }
`

const SocialIconLink2 = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #0088cc;
    transition: 0.3s ease-out;
  }
`

const SocialIconLink3 = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color:  #7289d9;
    transition: 0.3s ease-out;
  }
`
