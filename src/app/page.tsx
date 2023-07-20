"use client"

import { styled } from "styled-components";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const MainContainer = styled.main`
  background-color: white;
  height: 700px;
  width: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
  font-size: 24px;
`
const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 600px;
  height: 400px;
  line-height: 150%;
  font-size: 28px;

  > h3 {
    color: gray;
  }
`
const DivContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 400px;
`

const Container = styled.div`
  width: auto;
  height: 800px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const BtnStyled = styled.button`
  position: relative;
  background-color: #846ec5;
  color: white;
  font-size: 17px;
  font-weight: 600;
  border-radius: 10px;
  width: 150px;
  height: 60px;
  margin-top: 15px;
  padding-top: 20px;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(31, 30, 30, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);

  &::before {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 35px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(135deg,#450068,#dc2430 );
  transform: translate(0%,90%);
  z-index: 99;
  position: relative;
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &::after {
  content: "Acessar Página";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #231942;
  color: white;
  width: 100%;
  height: 150%;
  pointer-events: none;
  transform-origin: top;
  transform: translate(0%,-79%);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
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
        <h1>Olá, Seja Bem-Vindo</h1>
        <Container>
          <DivContainer>
            <h2>Emerson Florencio</h2>
            <h3>Desenvolvedor Full-Stack</h3>
          </DivContainer>
        <DivContainerImage>
            <Image
              src="/asserts/3426526.jpg"
              width={500}
              height={450}
              alt="Imagem de uma pessoa programando"
              property="false"
            />
        </DivContainerImage>

        </Container>
        <Link href={'/home'}>
          <BtnStyled name="name">
            Home
          </BtnStyled>
        </Link>
      </MainContainer>
    <Footer />
    </>
  )
}
