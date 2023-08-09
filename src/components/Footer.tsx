"use client"

import { styled } from "styled-components"
import Link from "next/link"
import { GithubIcon } from "./icons/github-icon"
import { LinkedinIcon } from "./icons/linkedin-icon"

const FooterContainer = styled.footer`
    color: white;
    background-color: #231942;
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 50px;
    align-items: center;
    font-size: 24px;

    > a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    display: flex;
  } 

  @media(max-width: 470px){
    width: 450px;
  }

  @media(max-width: 470px){
    width: 380px;
  }
`
const DivContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: #231942;
  font-size: 24px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media(max-width: 470px){
    width: 450px;
  }

  @media(max-width: 425px){
    width: 380px;
    >p{
      font-size: 20px;
    }
  }
`

export default function Footer() {
  return (
    <>
    <FooterContainer>
        <Link href={'https://github.com/EmersonFlorencio'} target="_blank">
          <GithubIcon />
          GitHub
        </Link>
        <Link href={'https://www.linkedin.com/in/emerson-florencio-dev/'} target="_blank">
          <LinkedinIcon />
          Linkedin
        </Link>
    </FooterContainer>
      <DivContainer>
        <p>Desenvolvido Por Emerson Florencio</p>
      </DivContainer>
    </>
  )
}