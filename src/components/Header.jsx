import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { images } from "../assets/images/images";

const HeaderP = styled.header`
  display: grid;
  justify-items: center;
  font-family: "Lato", sans-sesrif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  @media (min-width: 700px) {
    display: grid;
    column-gap: 2rem;
  }
  @media (min-width: 700px) {
    animation: mover;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
  @keyframes mover {
    from {
      transform: translateY(0);
      opacity: calc(100%);
    }
    to {
      transform: translateY(200px);
      opacity: calc(0%);
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 80%;
    margin: 25px;
  }
  @media (min-width: 700px) {
    animation: mover;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
  @keyframes mover {
    from {
      transform: translateY(0);
      opacity: calc(100%);
    }
    to {
      transform: translateY(200px);
      opacity: calc(0%);
    }
  }
`;
const H1 = styled.h1`
  color: #4e4e4e;
  font-family: "Lato", sans-sesrif;
  font-size: 50px;
  margin-bottom: 20px;
`;
const H2 = styled.h2`
  color: #4e4e4e;
  font-family: "Lato", sans-sesrif;
  font-size: 25px;
  margin-bottom: 10px;
`;
const P = styled.p`
  color: #4e4e4e;
  font-family: "Lato", sans-sesrif;
  font-size: 25px;
`;
const Img = styled.img`
  margin: 25px;
  @media (max-width: 700px) {
    width: 60%;
    margin: 25px;
  }
  @media (min-width: 700px) {
    animation: mover;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
  @keyframes mover {
    from {
      transform: translateY(0);
      opacity: calc(100%);
    }
    to {
      transform: translateY(200px);
      opacity: calc(0%);
    }
  }
`;
const DivLink = styled.div`
  padding: 10px;
`;
const Link = styled(RouterLink)`
  color: #373b44;
  padding: 10px;
  font-size: 16px;
  font-family: "Lato", sans-sesrif;
  font-weight: 800;
  text-decoration: none;
  :hover {
    color: #000;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderP>
        <Img src={images.imgDiego} alt="Imagen Diego" />
        <Div>
          <H1>Diego Toledo</H1>
          <H2>Software Developer</H2>
          <P>Frontend React.JS</P>
        </Div>
        <DivLink>
          <Link to="/">Home</Link>
          <Link to="/habilidades">Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </DivLink>
      </HeaderP>
    </>
  );
};

export default Header;
