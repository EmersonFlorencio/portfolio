"use client"

import { styled } from "styled-components";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Link from "next/link";

const MainContainer = styled.main`
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
const DivContainer = styled.div`
  border: red solid 2px;
  text-align: center;
`

const BtnStyled = styled.button`
  padding: 20px 60px;
  background-color: red;
  color: white;
`

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Olá, Seja bem-vindo</h1>
        <DivContainer>
          <h2>Emerson Florencio</h2>
          <h3>Desenvolvedor Full-Stack</h3>
        </DivContainer>
        <Link href={'/home'}>
          <BtnStyled>
            Acessar a Home
          </BtnStyled>
        </Link>
      </MainContainer>
    <Footer />
    </>
  )
}
