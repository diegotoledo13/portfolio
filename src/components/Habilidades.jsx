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
      const DivC = styled.div`      
        display: flex;
        justify-content: center;
        margin-top: 20px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        `
      
      const H1 = styled.h1`
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        font-size: 50px;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: #444444 1px 1px 0px;
    `
      const P = styled.p`
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        text-align: center;
        font-weight: 700;
        font-size: 30px;
        @media (min-width: 700px){
          padding: 15px 120px 15px 120px;
    }
    `
    const ImgR = styled.img`
        width: 350px;
        height: 350px;
        @media (min-width: 700px){
          align-items: flex-start
        }
    `
  return (
    <>
     <Div>
          <H1>Frontend React</H1>
          <DivC>
            <ImgR src={images.dieguito} />
          </DivC>
          <P>Hi, I'm a frontend programmer with a special focus on React, I am 37 years old and I live
             in the department of Maldonado Uruguay, I am
             a passionate about graphic design and an enthusiast of experimentation.
             I am ready to face new challenges and contribute to the success of projects
             exciting and dynamic web.
             If you are looking for someone who can combine solid technical skills with
             a creative approach to web design, I will be happy to be part of your team.
             I hope to have the opportunity to work with you!</P>
          <P>Soy un programador frontend con un enfoque especial en React, mi edad es de 37 años y vivo
             en el departamento de Maldonado Uruguay, soy
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