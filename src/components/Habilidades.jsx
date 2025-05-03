import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { images } from "../assets/images/images";
import Trabajos from "./Trabajos";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DivC = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "Lato", sans-sesrif;
  color: #d4d4d4;
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: #444444 1px 1px 0px;
`;
const P = styled.p`
  font-family: "Lato", sans-sesrif;
  color: #d4d4d4;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  @media (min-width: 700px) {
    padding: 15px 120px 15px 120px;
  }
`;
const ImgR = styled.img`
  width: 350px;
  height: 350px;
  @media (min-width: 700px) {
    align-items: flex-start;
  }
`;
// eslint-disable-next-line react/prop-types
const Habilidades = ({ text, language }) => {
  return (
    <>
      <Div>
        <H1>Frontend React</H1>
        <DivC>
          <ImgR src={images.dieguito} />
        </DivC>
        <P>{text}</P>
        <Trabajos language={language} />
      </Div>
    </>
  );
};
Habilidades.propTypes = {
  text: PropTypes.string.isRequired,
  lenguage: PropTypes.string.isRequired,
};

export default Habilidades;
