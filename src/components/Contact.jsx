import styled from "@emotion/styled";
import { images } from "../assets/images/images";
import "../index.css";
import imagesLogo from "../assets/icons/imagesLogo";
import PropTypes from "prop-types";

const DivS = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 700px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 20 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: none;
  border-radius: 15px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;
const Img = styled.img`
  width: 60%;
  height: 80%;
  border-radius: 15px;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const P = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #d4d4d4;
  text-align: justify;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 20 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: none;
  border-radius: 15px;
`;
const Contact = ({ text }) => {
  return (
    <DivS>
      <Div1>
        <Img src={images.dieguito} />
        <P>{text}</P>
      </Div1>
      <Div2 className="flex flex-col items-center justify-center">
        <a href="mailto:diego.toledo.sanchez13@gmail.com">
          <img src={imagesLogo.mail} alt="gmail" height="38px" />
        </a>
      </Div2>
    </DivS>
  );
};
Contact.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Contact;
