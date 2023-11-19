import React from 'react'
import styled from '@emotion/styled'
import { images } from '../assets/images/images'

const Habilidades = () => {
      const Div = styled.div`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    `
    const H1 = styled.h1`
        font-family: 'Lato', sans-sesrif;
        font-size: 50px;
        margin-bottom: 20px;
    `
    const P = styled.p`
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        padding: 15px 10px 15px 10px;
        @media (min-width: 700px){
          padding: 15px 120px 15px 120px;
    }
    `
    const ImgR = styled.img`
        width: 350px;
        height: 350px;
    `
  return (
    <>
     <Div>
          <H1>Frontend React</H1>
          <ImgR src={images.dieguito} />
          <P>Soy un programador frontend con un enfoque especial en React, 
             un apasionado del diseño gráfico y un entusiasta de la experimentación.
             Estoy listo para enfrentar nuevos desafíos y contribuir al éxito de proyectos 
             web emocionantes y dinámicos.
             Si estás buscando a alguien que pueda combinar habilidades técnicas sólidas con 
             un enfoque creativo en el diseño web, estaré encantado de ser parte de tu equipo. 
             ¡Espero tener la oportunidad de trabajar contigo!
          </P>   
      </Div>
     
    </>
  )
}

export default Habilidades