import React from 'react'
import styled from '@emotion/styled'
import {images} from '../assets/images/images';

const HeaderP = styled.header`        
display: block;
justify-content: space-between;
font-family: 'Lato', sans-sesrif;
color: #FFF;
text-align: center;
font-weight: 700;
@media (min-width: 700px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
}
`
const Div = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
align-items: center;
@media (max-width: 700px){
    width: 80%;
    margin: 25px;
}
@media (min-width: 700px){
    
    animation: mover;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-direction: reverse;
}
@keyframes mover {
    from{
        transform: translateY(0);
        opacity: calc(100%);
    }
    to {transform: translateY(200px);
        opacity: calc(0%)
    }
}
`
const H1 = styled.h1`
color: white;
font-family: 'Lato', sans-sesrif;
font-size: 50px;
margin-bottom: 20px;
`
const H2 = styled.h2`
color: white;
font-family: 'Lato', sans-sesrif;
font-size: 25px;
margin-bottom: 10px;
`
const P = styled.p`
color: white;
font-family: 'Lato', sans-sesrif;
font-size: 25px;
`
const Img = styled.img`
width: 60%;
margin: 25px;
@media (max-width: 700px){
    width: 80%;
    margin: 25px;
}
@media (min-width: 700px){
    
    animation: mover;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-direction: reverse;
}
@keyframes mover {
    from{
        transform: translateY(0);
        opacity: calc(100%);
    }
    to {transform: translateY(200px);
        opacity: calc(0%)
    }
}
`

const Header = () => {
  return (
    <>
    <HeaderP>
        <Img src={images.imgDiego} alt='Imagen Diego' />
        <Div>
            <H1>Diego Toledo</H1>
            <H2>Software Developer</H2>
            <P>Frontend React.JS</P>
        </Div>
    </HeaderP>
    </>
  )
}

export default Header
