"use client"

import { styled } from "styled-components"

const FooterContainer = styled.footer`
    border: red solid 2px;
    color: white;
    background-color: gray;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>GitHub</p>
      <p>Linkedin</p>
      <p>Desenvolvido por Emerson Florencio</p>
    </FooterContainer>
  )
}