"use client"

import { styled } from "styled-components";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { CssIcon } from "../../components/icons/css-icon";
import { HtmlIcon } from '../../components/icons/html-icon';
import { JavascriptIcon } from "../../components/icons/javascript-icon";
import { ReactIcon } from "../../components/icons/react-icon";
import { NodejsIcon } from "../../components/icons/nodejs-icon";
import { TypescriptIcon } from "../../components/icons/typescript-icon";
import { ReduxIcon } from "../../components/icons/redux-icon";
import { DockerIcon } from "../../components/icons/docker-icon";
import { MysqlIcon } from "../../components/icons/mysql-icon";
import { MongodbIcon } from "../../components/icons/mongodb-icon";

const MainContainer = styled.main`
    color: black;
    background-color: white;
    height: 600px;
    padding: 10px 20px;
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
            <CssIcon />
            <HtmlIcon />
            <JavascriptIcon />
            <ReactIcon />
            <NodejsIcon />
            <TypescriptIcon />
            <ReduxIcon />
            <DockerIcon />
            <MysqlIcon />
            <MongodbIcon />
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