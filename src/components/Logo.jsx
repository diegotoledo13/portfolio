import styled from '@emotion/styled'
import React from 'react'
import imagesLogo from '../assets/icons/imagesLogo'

const Logo = () => {
    const Div = styled.div`
        position: sticky;
        top: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #dedede;
        @media (min-width: 700px){            
            justify-content: flex-end;
            background-color: unset;
        }
`
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin: 5px;
    @media (max-width: 700px){
        padding: 10px;
        }
`
  return (
    <Div>
        <a href="https://github.com/diegotoledo13" target='_blank'>
        <Img src={imagesLogo.github}/>
        </a>
        <a href="https://www.linkedin.com/in/diego-toledo-64a356241/" target='_blank'>
        <Img src={imagesLogo.linkedin}/>
        </a>
        <a href="http://" target='_blank'>
        <Img src={imagesLogo.netlify}/>
        </a>
    </Div>
  )
}

export default Logo