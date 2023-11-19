import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
    const P2 = styled.p`
        color: grey;
        text-align: start;
        font-weight: 700;        
    `
    const DivF = styled.div`
    margin: 15px;
    display: flex;
    justify-content: center;
    
    `

  return (
    <DivF>
        <P2>© Diego Toledo 2023</P2>
    </DivF>
  )
}

export default Footer