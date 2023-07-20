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
`

const DivContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 800px;
  height: 400px;
`

const DivContainerContact = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`
const DivSection = styled.div`
  display: flex;
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