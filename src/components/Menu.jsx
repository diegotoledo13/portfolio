import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import imagesLogo from "../assets/icons/imagesLogo";

const DivMenu = styled.div`
  display: grid;
  justify-items: end;
  @media (max-width: 700px) {
    justify-items: center;
  }
`;

const DivS = styled.div`
  top: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #dedede;
  @media (min-width: 700px) {
    justify-content: flex-end;
    background-color: unset;
    padding-right: 30px;
    width: auto;
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
  animation: opacity;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: reverse;

  @media (max-width: 700px) {
    padding: 10px;
  }
  @keyframes opacity {
    from {
      opacity: calc(100%);
    }
    to {
      opacity: calc(0%);
    }
  }
`;
const Button = styled.button`
  --b: 3px;
  --s: 0.45em;
  --color: #373b44;
  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-right: 69px;
  @media (max-width: 700px) {
    margin-right: 0px;
  }
  :hover,
  :focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }
  :active {
    background: var(--color);
    color: #fff;
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
const Menu = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === "english" ? "español" : "english");
  };
  return (
    <DivMenu>
      <DivLink>
        <Link to="/">Home</Link>
        <Link to="/habilidades">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </DivLink>
      <DivS>
        <a href="https://github.com/diegotoledo13" target="_blank">
          <Img src={imagesLogo.github} />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-toledo-64a356241/"
          target="_blank"
        >
          <Img src={imagesLogo.linkedin} />
        </a>
        <a
          href="https://app.netlify.com/teams/diegokill13/sites"
          target="_blank"
        >
          <Img src={imagesLogo.netlify} />
        </a>
        <a href="https://twitter.com/diegokill_lp" target="_blank">
          <Img src={imagesLogo.x} />
        </a>
      </DivS>
      <Button type="button" onClick={toggleLanguage}>
        {language === "english" ? "Español" : "English"}
      </Button>
    </DivMenu>
  );
};

export default Menu;
