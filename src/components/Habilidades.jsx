import React from 'react'
import styled from '@emotion/styled'

const Habilidades = ({setModal}) => {
    const handleClose = () => {
        setModal(false)
    }
    const Modal = styled.div`
        position: absolute;
        background-color: rgb(255 255 255 / 100);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `
    const Button = styled.button`
        width: 100px;
        height: 35px;
        position: absolute;
        right: 3rem;
        top: 3rem; 
    `
  return (
    <>
     <Button onClick={handleClose}>Atras</Button>  
     <Modal/>
    </>
  )
}

export default Habilidades