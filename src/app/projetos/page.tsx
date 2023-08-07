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

const DivContainer = styled.div`
  border: blue solid 2px;
  color: black;
  background-color: white;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px;
`
const DivSwiper = styled.div`
  display: flex;
  flex-direction: row;
  border: red solid 2px;
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
`

const DivImage  = styled.div`
  border: blue solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  gap: 5px;

  >img {
    object-fit: cover;
  }

  >img:hover{
    cursor: grab;
  }

  >img:active{
    cursor: grabbing;
  }

  >h4 {
    font-size: 24px;
  }
`

const DivTech = styled.div`
  border: green solid 2px;
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
                <h4>Nome do Projeto</h4>
                <Image
                src={ item.url } 
                alt="" 
                width={750}
                height={350}
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
                  href={'https://github.com/EmersonFlorencio'}
                  target="_blank"
                  >
                    Repositorio
                    <div>
                    <CrossIcon />
                    </div>
                  </Button>
                <Button
                component="a"
                href={'https://github.com/EmersonFlorencio'}
                target="_blank"
                >
                  Deploy
                  <div>
                  <CrossIcon />
                  </div>
                </Button>
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
