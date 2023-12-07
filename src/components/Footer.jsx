import React from 'react'
import styled from '@emotion/styled'
import imagesLogo from '../assets/icons/imagesLogo'


const P2 = styled.p`
color: grey;
text-align: start;
font-weight: 700;        
`
const DivF = styled.div`
display:grid;
grid-template-rows: 2fr;
justify-items: center;
justify-content: center;

`
const DivS = styled.div`    
margin: 15px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
`
const ImgI = styled.img`
width: 15px;
height: 15px;
margin: 10px 10px;
`
const Span = styled.span`
font-family: 'Lato', sans-sesrif;
color: #6e6e6e;
text-align: center;
font-weight: 700;
font-size: 15px;
`

const Footer = () => {
  return (
    <DivF>
        <P2>© Diego Toledo {new Date().getFullYear()} - Uruguay</P2>
        <DivS>          
          <ImgI src={imagesLogo.mail} alt="email"/>
          <Span>diego.toledo.sanchez13@gmail.com</Span>
          <ImgI src={imagesLogo.call} alt="telefono - phone" />
          <Span>+59899818265</Span>
        </DivS>
    </DivF>
  )
}

export default Footer