import React from 'react'
import styled from '@emotion/styled'
import Trabajos from './Trabajos'

const DivPortfolio = styled.div`
    @media( min-width: 768px){      
      margin: 100px 15px 30px 50px;
      width: 80%;
    }
    
    `
const Portfolio = () => {
  
  return (
    <DivPortfolio>
      <Trabajos/>
    </DivPortfolio>
  )
}

export default Portfolio