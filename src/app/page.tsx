"use client"

import { createGlobalStyle } from "styled-components";
import Header from '../components/Header';
import Footer from "../components/Footer";
import HomePage from './Home/page'

const GlobalStyle = createGlobalStyle<{$whiteColor?: boolean;}>`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
} 
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
    <div >
      <HomePage />
    </div>
    <Footer />
    </>
  )
}
