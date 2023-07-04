"use client"

import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const DivContainer = styled.div`
  border: blue solid 2px;
  color: blue;
  background-color: white;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
`

export default function Projetos() {
  return (
    <>
      <Header />
      <DivContainer>
          <h1>Projetos</h1>
      </DivContainer>
      <Footer />
    </>
  )
}