"use client"

import { styled } from "styled-components"

const HeaderContainer = styled.header`
    border: red solid 2px;
    color: white;
    background-color: gray;
`

export default function Header() {
  return (
    <HeaderContainer>
      <h2>Emerson Florencio</h2>
      <p>Projetos</p>
      <p>Sobre Min</p>
      <p>Contatos</p>
    </HeaderContainer>
  )
}