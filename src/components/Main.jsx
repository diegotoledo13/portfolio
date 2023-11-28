import styled from '@emotion/styled'
import React from 'react'
import {images} from '../assets/images/images';

const Main = ({text}) => {
    const Main = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const DivP = styled.div`
        width: 100%;
        margin-top: 160px;  
    `
    const P = styled.p`
    @media (min-width: 700px){
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        padding: 15px 120px 15px 120px;;   
    }
    @media (max-width: 700px){
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        padding: 15px 10px 15px 10px; 
    }
    `
    const DivI = styled.div`
        display: grid;
        justify-content: center;
        padding: 5px;
        box-sizing: border-box;
        margin-top: 200px;
        margin-bottom: 200px;
        @media (min-width: 700px){
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
        }
    `
    const Img = styled.img`
        width: 350px;
        height: 350px;
        margin: 15px 0px;
        filter: grayscale(100%);
        border-radius: 15px;
        box-shadow:14px 14px 50px 15px #c7c7c7 ;
        @media (min-width: 700px){
            margin: 15px 15px;
        }
        @media (min-width: 1040px){
            width: 650px;
            height: 600px;
        }
    `
    
  return (
    <Main>
        <DivP>
            <P>{text}</P>
        </DivP>
        <DivI>
            <Img src={images.diegoPic} alt="Diego Foto"  />
            <Img src={images.reactImage} alt="Imagen React"  />
            <Img src={images.codeImage} alt="background"  />
            <Img src={images.teclado} alt="Teclado"  />
        </DivI>
    </Main>
  )
}

export default Main