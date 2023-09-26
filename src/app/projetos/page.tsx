"use client"

import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import { data } from "../../utils/data";
import Image from "next/image";
import { CrossIcon } from "../../components/icons/cross-icon";


import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { GithubIcon } from "../../components/icons/github-icon";

const DivContainer = styled.div`
  color: black;
  background-color: white;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;

  @media(max-width: 425px){
    width: 380px;
    font-size: 16px;
  }

`
const DivSwiper = styled.div`
  display: flex;
  flex-direction: row;
  height: 900px;
  width: 800px;

  >div{
    >div:last-child{
      >span{
        height: 16px;
        width: 16px;
        background-color: #231942;
      }
    }
  }

  @media(max-width: 826px){
    height: 600px;
    width: 700px;
  }

  @media(max-width: 784px) {
    height: 600px;
    width: 500px;
  }

  @media(max-width: 512px) {
    height: 590px;
    width: 400px;

    >div{
      >div:last-child{
        bottom: -5px;
      }
    }
  }

  @media(max-width: 425px) {
    height: 650px;
    width: 350px;

    >div{
      >div:last-child{
        bottom: 5px;
      }
    }
  }
`

const DivImage  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  gap: 10px;

  >img {
    object-fit: cover;
    border: #518bcc solid 5px;
    border-radius: 5px;
    box-shadow: 10px 15px 20px 0px rgba(0,0,0,0.75);
    margin-bottom: 15px;
  }

  >img:hover{
    cursor: grab;
  }

  >img:active{
    cursor: grabbing;
  }

  >h4 {
    font-size: 28px;
  }

  @media(max-width: 826px) {
    >img{
      height: 300px;
      width: 600px;
    }
  }

  @media(max-width: 784px) {
    >img{
      height: 300px;
      width: 400px;
    }

    >h4{
      font-size: 24px;
    }
  }

  @media(max-width: 512px) {
    >img{
      height: 300px;
      width: 300px;
    }

    >h4{
      font-size: 24px;
    }
  }

  @media(max-width: 425px) {
    

    >img{
      height: 280px;
      width: 300px;
    }

    >h4{
      font-size: 20px;
    }
  }
`

const DivTech = styled.div`
  display: flex;
  flex-direction: row;

  >div{
    >div{
      >svg {
        height: 60px;
        width: 60px;
        opacity: 0.6;

        &:hover{
          opacity: 1;
        }

        @media(max-width: 425px){
          height: 55px;
          width: 55px;
        }
      }
    }
  }
`

const DivButton = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;

  >a {
  text-decoration: none;
  background:#231942;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 18px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;

    >div {
      background: white;
      margin-left: 1em;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.2em;
      width: 2.2em;
      border-radius: 0.7em;
      box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
      right: 0.3em;
      transition: all 0.3s;
  
      &:hover{
        width: calc(100% - 0.6em);
        transform: translateX(0.1em);
      }
        
      &:active{
        transform: scale(0.95);
      }
      
      > svg {
          width: 1.1em;
          transition: transform 0.3s;
  
        &:hover {
          transform: translateX(0.1em);
        }
      }
    }
  }

  @media(max-width: 512px) {
      width: 350px;
  }

  @media(max-width: 425px) {
      width: 300px;
      gap: 15px;
      display: flex;
      flex-direction: column;

    >a{
      height: 2.4em;
    }
  }
`

export default function Projetos() {
  return (
    <>
      <Header />
      <DivContainer>
          <h1>Projetos</h1>
          <DivSwiper>
        <Swiper
          modules={[Pagination, EffectFade]}
          effect={'fade'}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <DivImage>
                <h4>{item.name}</h4>
                <Image
                src={ item.imgUrl } 
                alt="" 
                width={700}
                height={300}
                />
                <h4>Tecnologias Utilizadas</h4>
                <DivTech>
                    {item.icon.map((e: any, index: number) => (
                      <div key={index}>
                        <div>{ e.iconImg }</div>
                      </div>
                    ))}
                </DivTech>
                <DivButton>
                <Button
                  component="a"
                  href={item.urlRepository}
                  target="_blank"
                  >
                    <GithubIcon />
                    Repositorio
                    <div>
                    <CrossIcon />
                    </div>
                  </Button>
                {
                  item.urlDeploy !== '' ? 
                    <Button
                    component="a"
                    href={item.urlDeploy}
                    target="_blank"
                    >
                      Deploy
                      <div>
                      <CrossIcon />
                      </div>
                    </Button>
                    : null
                }
                </DivButton>
                </DivImage>
              </SwiperSlide>
            ))}
        </Swiper>
        </DivSwiper>
      </DivContainer>
      <Footer />
    </>
  )
};
