"use client"

import { styled } from "styled-components";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Link from "next/link";

const MainContainer = styled.main`
  border: blue solid 2px;
  color: blue;
  background-color: white;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
`
const DivContainer = styled.div`
  border: red solid 2px;
  text-align: center;
  width: 300px;
  height: 80px;
`

const BtnStyled = styled.button`
  position: relative;
  background-color: transparent;
  color: #312d2d;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  width: 150px;
  height: 60px;
  margin-top: 15px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(51, 51, 51, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);

  &::before {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(135deg,#7b4397,#dc2430 );
  transform: translate(0%,90%);
  z-index: 99;
  position: relative;
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &::after {
  content: "Clique Aqui";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2c0f5;
  margin-top: 15px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: top;
  transform: translate(0%,-100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &:hover::before {
    transform: translate(0%,0%);
  }

  &:hover::after {
    transform: translate(0%,-200%);
  }

  &:focus {
    outline: none;
  }

  &:active {
    scale: 0.95;
  }
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
