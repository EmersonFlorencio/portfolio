"use client"

import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

const DivContainer = styled.div`
  color: black;
  background-color: white;
  height: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 40px;
  font-size: 30px;

  >h3 {
    font-size: 34px;
  }

  @media(max-width: 768px) {
    height: 800px;
  }

  @media(max-width: 425px) {
    width: 380px;
    height: 700px;
  }
`

const DivContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 400px;

  @media(max-width: 768px) {
    width: 500px;
    height: 350px;

    >img{
      height: 400px;
      width: 400px;
    }
  }

  @media(max-width: 568px) {
    width: 400px;
    height: 350px;

    >img{
      height: 350px;
      width: 350px;
    }
  }


  @media(max-width: 425px) {
    width: 300px;
    height: 300px;

    >img{
      height: 350px;
      width: 350px;
    }
  }
`

const DivContainerContact = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 500px;
    height: 350px;
    font-size: 24px;
  }

  @media(max-width: 568px) {
    width: 400px;
    height: 350px;
    font-size: 28px;
  }

  @media(max-width: 425px) {
    width: 300px;
    height: 300px;
    font-size: 24px;
  }
`
const DivSection = styled.div`
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default function Contatos() {
  return (
    <>
      <Header />
      <DivContainer>
          <h2>Contatos</h2>
          <DivSection>

          <DivContainerImage>
            <Image
              src="/asserts/contact.png"
              width={500}
              height={450}
              alt="Imagem de Contato"
              property="false"
              />  
          </DivContainerImage>
              <DivContainerContact>
                <h3>Telefone</h3>
                <p>(11) 99228-7929</p>
                <br />
                <h3>📨 E-mail</h3>
                <p>emersonflorencio@hotmail.com</p>
              </DivContainerContact>
          </DivSection>
      </DivContainer>
      <Footer />
    </>
  )
}