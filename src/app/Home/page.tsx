"use client"

import { styled } from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const MainContainer = styled.main`
    border: blue solid 2px;
    color: blue;
    background-color: white;
    height: 600px;
`

export default function Home() {
  return (
    <>
    <Header />
    <MainContainer>
      <h1>Emerson Florencio</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Architecto in eveniet vero amet repudiandae optio, beatae porro fuga, 
        minus incidunt necessitatibus fugit repellendus consectetur reiciendis id magnam nobis veritatis eum.
      </h2>
    </MainContainer>
    <Footer />
    </>
  )
}