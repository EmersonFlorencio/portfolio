"use client"

import { styled } from "styled-components"
import Link from "next/link"

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
        <Link href={'/projetos'}>Projetos</Link>
        <Link href={'/contatos'}>Contatos</Link>
      </DivContainer>
    </HeaderContainer>
  )
}