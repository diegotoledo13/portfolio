import React from 'react'
import { images } from '../assets/images/images'
import imagesLogo from '../assets/icons/imagesLogo'
import styled from '@emotion/styled'

const Trabajos = () => {
    const Div = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    `
    const Img = styled.img`
        width: 280px;
        height: 250px;
        padding: 5px;
        border-radius: 15px;

    `
    const H1 = styled.h1`
        width: 100%;
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
        font-size: 30px;
        font-weight: 700;
    
    ` 
    const P = styled.p`
        font-size: 20px;
        font-family: 'Lato', sans-sesrif;
        color: #6e6e6e;
    `
    const H2 = styled.h2`
        font-family: 'Lato', sans-serif;
        color: #6e6e6e;
        font-size: 25px;
    
    `
    const Ul = styled.ul`
        font-family: 'Lato', sans-serif;
        color: #6e6e6e;
        font-size: 20px;
        font-weight: 700;
        `
    const DivD = styled.div`
        `
    const ImgLogo = styled.img`
        width: 50px;
        height: 50px;
        margin: 10px;
        `

  return (
    <>
    <Div>
        <H1>Trabajo 1</H1>
        <Img src={images.codeImage} alt=""/>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            , excepturi doloremque saepe laboriosam error fuga maxime, vero 
            quidem libero sint corrupti tempore deserunt ex aut quod voluptatum 
            illum perferendis blanditiis.</P>
        <H2>Dependencias</H2>
        <Ul>
            <li>Tailwind</li>
            <li>React Router DOM</li>
            <li>React Icons</li>
            <li>Emotion</li>
            <li>Styled Components</li>
        </Ul>
        
            <H2>Deploy - Repository</H2>
            <DivD>
                <a href="   "><ImgLogo src={imagesLogo.netlify} alt=""/>
                </a>
                <a href="   "><ImgLogo src={imagesLogo.github} alt=""/>
                </a>
            </DivD>

    </Div>
    
    </>
  )
}

export default Trabajos