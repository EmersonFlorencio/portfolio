"use client"

import { styled } from "styled-components"
import Link from "next/link"

const HeaderContainer = styled.header`
    color: white;
    background-color: #231942;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media(max-width: 600px){
      font-size: 16px;
      width: auto;
      height: 120px;
      justify-content: center;
      >div{
        width: 200px;
        height: 50px;
      }
    }

    @media(max-width: 470px){
      width: 450px;
      height: 130px;
      justify-content: center;
      >div{
        width: 200px;
        height: 50px;
      }
    }
`
const NavContainer = styled.nav`
  gap: 40px;
  display: flex;

  @media(max-width: 768px){
    gap: 10px;
  }

  @media(max-width: 600px){
      height: 50px;
      width: 400px;
      display: flex;
      justify-content: space-evenly;
    }

  @media(max-width: 470px){
    height: 50px;
    width: 400px;
    display: flex;
    justify-content: space-evenly;
  }

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
      <div>
        <h2>Emerson Florencio</h2>
      </div>
      <NavContainer>
        <Link href={'/home'}>Home</Link>
        <Link href={'/projetos'}>Projetos</Link>
        <Link href={'/contatos'}>Contatos</Link>
      </NavContainer>
    </HeaderContainer>
  )
}