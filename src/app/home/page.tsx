"use client"

import { styled } from "styled-components";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { icons } from "../../utils/data";

const MainContainer = styled.main`
    color: black;
    background-color: white;
    height: 600px;
    padding: 15px 34px;
    font-size: 30px;
`

const DivContainer = styled.div`
  flex: 1;
  display: flex;
`

const DivContainerText = styled.div`
  width: 900px;
  height: 400pxd;
  font-size: 20px;
  color: gray;

  >p {
    font-size: 28px;
  }

  >h2 {
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const DivContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 400px;
`
const DivTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 900px;
  height: 250px;
  gap: 8px;

  >div{
    display: flex;
    width: 100px;
    height: 100px;
    z-index: 99;
  }
`

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Sobre Mim</h1>
        <DivContainer>
          <DivContainerText>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Architecto in eveniet vero amet repudiandae optio, beatae porro fuga, 
            minus incidunt necessitatibus fugit repellendus consectetur reiciendis id magnam nobis veritatis eum.
            </p>
            <h2>Tecnologias</h2>
            <DivTech>
            {icons.map((icon) => (
              <div key={icon.id}>
                {icon.icon}
              </div>
            ))}
            </DivTech>
          </DivContainerText>
            <DivContainerImage>
          <Image
              src="/asserts/3426526.jpg"
              width={500}
              height={400}
              alt="Imagem de uma pessoa programando"
              property="false"
            />
          </DivContainerImage>
        </DivContainer>
      </MainContainer>
      <Footer />
    </>
  )
}