import styled from "@emotion/styled";
import React from "react";
import { images } from "../assets/images/images";

const MainP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivI = styled.div`
  display: grid;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 200px;
  margin-bottom: 200px;
  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 350px;
  height: 350px;
  margin: 15px 0px;
  filter: grayscale(100%);
  border-radius: 15px;
  box-shadow: 14px 14px 50px 15px #c7c7c7;
  @media (min-width: 700px) {
    margin: 15px 15px;
  }
  @media (min-width: 1040px) {
    width: 650px;
    height: 600px;
  }
`;

const Main = () => {
  return (
    <MainP>
      <DivI>
        <Img src={images.diegoPic} alt="Diego Foto" />
        <Img src={images.reactImage} alt="Imagen React" />
        <Img src={images.codeImage} alt="background" />
        <Img src={images.teclado} alt="Teclado" />
      </DivI>
    </MainP>
  );
};

export default Main;
