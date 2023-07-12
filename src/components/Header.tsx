"use client"

import { styled } from "styled-components"
import Link from "next/link"

const HeaderContainer = styled.header`
    color: white;
    background-color: #231942;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const NavContainer = styled.nav`
  gap: 40px;
  display: flex;

  > a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
  } 
`

export default function Header() {
  return (
    <HeaderContainer>
      <h2>Emerson Florencio</h2>
      <NavContainer>
        <Link href={'/projetos'}>Projetos</Link>
        <Link href={'/contatos'}>Contatos</Link>
      </NavContainer>
    </HeaderContainer>
  )
}