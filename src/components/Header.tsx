"use client"

import { styled } from "styled-components"

const HeaderContainer = styled.header`
    border: red solid 2px;
    color: white;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
`
const DivContainer = styled.div`
  gap: 20px;
  display: flex;
`

export default function Header() {
  return (
    <HeaderContainer>
      <h2>Emerson Florencio</h2>
      <DivContainer>
        <p>Projetos</p>
        <p>Contatos</p>
      </DivContainer>
    </HeaderContainer>
  )
}