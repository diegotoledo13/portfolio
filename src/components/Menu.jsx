import styled from '@emotion/styled'
import React from 'react'
import imagesLogo from '../assets/icons/imagesLogo'
import Buttons from './Buttons'

const Menu = ({modal, setModal}) => {
    const DivS = styled.div`
       
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
    const DivMenu = styled.div`
  
  `
    const DivB = styled.div`
  
  `
  return (
    <DivMenu>
      <DivB>
        <Buttons modal={modal}
                 setModal={setModal} />
      </DivB>
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