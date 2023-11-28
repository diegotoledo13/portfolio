import React from 'react'
import styled from '@emotion/styled'
import { images } from '../assets/images/images'


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
const Habilidades = ({text}) => {
  return (
    <>
     <Div>
          <H1>Frontend React</H1>
          <DivC>
            <ImgR src={images.dieguito} />
          </DivC>
          <P>{text}</P>   
      </Div>
     
    </>
  )
}

export default Habilidades