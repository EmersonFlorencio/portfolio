"use client"

import { styled } from "styled-components"

const FooterContainer = styled.footer`
    color: white;
    background-color: #231942;
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 50px;
    align-items: center;
    font-size: 24px;
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
`

export default function Footer() {
  return (
    <>
    <FooterContainer>
        <p>GitHub</p>
        <p>Linkedin</p>
    </FooterContainer>
      <DivContainer>
        <p>Desenvolvido por Emerson Florencio</p>
      </DivContainer>
    </>
  )
}