import styled from '@emotion/styled'
import React from 'react'

const Main = () => {
    const Div = styled.div`
        width: 100%;
        margin-top: 160px;  
    `
    const P = styled.p`
    @media (min-width: 700px){
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        text-align: center;
        font-weight: 700;
        font-size: 60px;
        padding: 15px 150px 15px 150px;   
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
  return (
    <Div>
        <P>Soy una persona altamente motivada y comprometida, siempre buscando
            nuevos desafíos para superarme a mí mismo. Con una actitud
            perseverante y decidida, nunca me rindo ante los obstáculos que se
            me presentan y siempre encuentro una manera de avanzar. Como
            autodidacta apasionado, dedico gran parte de mi tiempo libre a
            aprender nuevas habilidades y conocimientos, intentando siempre
            mejorar mis habilidades. Con un enfoque constante en el crecimiento
            personal y profesional, siempre comprometido para mejorar cada día y
            alcanzar mis metas.</P>
    </Div>
  )
}

export default Main