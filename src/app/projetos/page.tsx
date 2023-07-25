"use client"

import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import { data } from "../../utils/data";
import Image from "next/image";

import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const DivContainer = styled.div`
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
const DivSwiper = styled.div`
  display: flex;
  flex-direction: row;
  border: red solid 2px;
  height: 600px;
  width: 800px;
`

const DivImage  = styled.div`
  border: blue solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >img {
    object-fit: cover;
    width: 100%;
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
                <Image
                src={ item.url } 
                alt="" 
                width={300}
                height={350}
                />
                <p>Icones tecnologias</p>
                <p>Descrição do Projeto</p>
                <p>Link Repositorio:</p>
                <p>Link Deploy:</p>
                </DivImage>
              </SwiperSlide>
            ))}
        </Swiper>
        </DivSwiper>
      </DivContainer>
      <Footer />
    </>
  )
}