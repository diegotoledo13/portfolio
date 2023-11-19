import styled from '@emotion/styled'
import React from 'react'
import imagesLogo from '../assets/icons/imagesLogo'


const Menu = () => {
    const DivS = styled.div`
       
        top: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #dedede;
        @media (min-width: 700px){            
            justify-content: flex-end;
            background-color: unset;
            padding-right: 30px;
            width: auto;
        }
  `
    const Img = styled.img`
        width: 35px;
        height: 35px;
        margin: 5px;
        animation: opacity;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-direction: reverse;

        @media (max-width: 700px){
           padding: 10px;
        }
        @keyframes opacity {
            from{
                opacity: calc(100%);
            }
            to {
                opacity: calc(0%)
            }
        }
  `
    const DivMenu = styled.div`
  
  `
  return (
    <DivMenu>
      <DivS>
          <a href="https://github.com/diegotoledo13" target='_blank'>
          <Img src={imagesLogo.github}/>
          </a>
          <a href="https://www.linkedin.com/in/diego-toledo-64a356241/" target='_blank'>
          <Img src={imagesLogo.linkedin}/>
          </a>
          <a href="https://app.netlify.com/teams/diegokill13/sites" target='_blank'>
          <Img src={imagesLogo.netlify}/>
          </a>
      </DivS>
    </DivMenu>
  )
}

export default Menu