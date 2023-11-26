import React from 'react'
import styled from '@emotion/styled'
import Trabajos from './Trabajos'

const Portfolio = () => {
  const DivPortfolio = styled.div`
    background-color: #f0f0f0;
    margin: 100px 15px 30px 15px;
    border-radius: 15px;
    
    `
  return (
    <DivPortfolio>
      <Trabajos/>
    </DivPortfolio>
  )
}

export default Portfolio