import styled from '@emotion/styled'
import React from 'react'
import {images} from '../assets/images/images';

const Main = () => {
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
            <P>I am a highly motivated and committed person, always looking for 
               new challenges to overcome myself.
               With a persevering and determined attitude, 
               I never give up in the face of the obstacles that arise and 
               I always find a way to move forward. As a passionate self-taught, 
               I dedicate a large part of my free time to learning new skills and knowledge, 
               always trying to improve my skills. With a constant focus on personal and professional growth,
                always committed to improving every day and reaching my goals.</P>

            <P>Soy una persona altamente motivada y comprometida, siempre buscando
                nuevos desafíos para superarme a mí mismo. Con una actitud
                perseverante y decidida, nunca me rindo ante los obstáculos que se
                me presentan y siempre encuentro una manera de avanzar. Como
                autodidacta apasionado, dedico gran parte de mi tiempo libre a
                aprender nuevas habilidades y conocimientos, intentando siempre
                mejorar mis habilidades. Con un enfoque constante en el crecimiento
                personal y profesional, siempre comprometido para mejorar cada día y
                alcanzar mis metas.</P>
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