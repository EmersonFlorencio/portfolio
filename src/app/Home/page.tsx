"use client"

import { styled } from "styled-components"

const MainContainer = styled.main`
    border: blue solid 2px;
    color: blue;
    background-color: white;
    width: 600px;
    height: 600px;
`

export default function Home() {
  return (
    <MainContainer>
      <h1>Home Page</h1>
    </MainContainer>
  )
}