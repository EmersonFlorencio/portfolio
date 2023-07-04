"use client"

import { styled } from "styled-components"

const FooterContainer = styled.footer`
    border: red solid 2px;
    color: white;
    background-color: gray;
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 50px;
    align-items: center;
`
const DivContainer = styled.div`
  border: green solid 2px;
  display: flex;
  justify-content: center;
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