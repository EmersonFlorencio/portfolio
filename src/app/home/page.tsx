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

  @media(max-width: 1384px){
  font-size: 24px;
  } 

  @media(max-width: 1188px){
    height: 1000px;
  } 

  @media(max-width: 425px){
    width: 380px;
  }
`

const DivContainer = styled.div`
  flex: 1;
  display: flex;

  @media(max-width: 1188px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

const DivContainerText = styled.div`
  width: 900px;
  height: 400pxd;
  font-size: 20px;
  color: gray;

  >p {
    font-size: 24px;
  }

  >h1{
    color: black;
  }

  >h2 {
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media(max-width: 1384px){
    width: 700px;
  }
  
  @media(max-width: 1188px){
    >h1, h2 {
      text-align: center;
    }
  }

  @media(max-width: 778px){
    width: 650px;
    height: 400px;

    >p {
      font-size: 18px;
      color: black;
    }
  }

  @media(max-width: 748px){
    width: 550px;
    height: 400px;

    >p {
      font-size: 18px;
      color: black;
    }
  }

  @media(max-width: 748px){
    width: 450px;
    height: 300px;
    >p {
      font-size: 18px;
      color: black;
    }
  }

  @media(max-width: 530px){
    width: 400px;
    height: 300px;
    margin-top: 15px;
    >p {
      font-size: 18px;
      color: black;
    }
  }

  @media(max-width: 425px){
    width: 360px;
    height: 300px;
    border: red solid 2px;
    >p {
      font-size: 18px;
      color: black;
    }
  }
`

const DivContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 400px;

  @media(max-width: 748px){
    width: 400px;
    height: 400px;
  }

  @media(max-width: 634px){
    margin-top: 80px;
    margin-bottom: 30px;
    width: 300px;
    height: 300px;
  }

  @media(max-width: 530px){
    margin-top: 120px;
    margin-bottom: 80px;
    width: 200px;
    height: 200px;
  }


  @media(max-width: 425px){
    >img{
      width: 300px;
      height: 300px;
    }
  }
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

  @media(max-width: 1384px){
    width: 700px;
  } 

  @media(max-width: 778px){
    width: 650px;
    justify-content: center;
    align-items: center;

    >div{
      width: 80px;
      height: 80px;
      z-index: 99;
    }
  }

  @media(max-width: 748px){
    width: 550px;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
    >div{
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }

  @media(max-width: 634px){
    width: 450px;
    justify-content: center;
    align-items: center;

    >div{
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }

  @media(max-width: 530px){
    width: 400px;
    justify-content: center;
    align-items: center;

    >div{
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }

  @media(max-width: 425px){
    width: 360px;
    justify-content: center;
    align-items: center;

    >div{
      width: 60px;
      height: 60px;
      z-index: 99;
    }
  }
`

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <DivContainer>
          <DivContainerText>
            <h1>Sobre Mim</h1>
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
              width={400}
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