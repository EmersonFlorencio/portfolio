"use client"

import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle<{$whiteColor?: boolean;}>`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
} 
`

export const BodyContainer = styled.body`
  padding: 25px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`