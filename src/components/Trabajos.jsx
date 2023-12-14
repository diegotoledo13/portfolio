import React, { useState } from "react";
import styled from "@emotion/styled";
import trabajos from "../data/trabajos";
import "../index.css";

const DivMain = styled.div`
  margin: 100px 15px 30px 15px;
  border-radius: 15px;
  background-color: var(--color7);
  display: grid;
  justify-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const DivTitulo = styled.div`
  display: contents;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 250px;
  padding: 5px;
  border-radius: 15px;
  opacity: 0.5;
  transition: opacity 1.5s ease-in-out 1.5s;
  box-shadow: 0 0 10px #000000;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 350px;
    margin: 20px;
  }
  @media (min-width: 1100px) {
    width: 900px;
    height: 650px;
    margin: 20px;
  }
`;
const H1 = styled.h1`
  width: 100%;
  font-family: "Lato", sans-sesrif;
  color: #555555;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    margin: 20px;
  }
`;
const P = styled.p`
  font-size: 20px;
  font-family: "Lato", sans-sesrif;
  color: #6e6e6e;
  margin: 5px;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 60px;
  }
`;
const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  color: #555555;
  font-size: 25px;
  margin: 5px;
`;
const Ul = styled.ul`
  font-family: "Lato", sans-serif;
  color: #6e6e6e;
  font-size: 20px;
  font-weight: 700;
  list-style: none;
`;
const Li = styled.li`
  margin: 5px;
`;
const DivD = styled.div`
  margin: 5px;
`;
const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const DivDependecias = styled.div`
  @media (min-width: 768px) {
    text-align: left;
    margin: 20px;
  }
`;
const DivIconos = styled.div`
  @media (min-width: 768px) {
    text-align: left;
    margin: 20px;
  }
`;

const Trabajos = ({ language }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {trabajos.map((trabajo) => (
        <DivMain key={trabajo.id}>
          <H1>{trabajo.title}</H1>
          <DivTitulo>
            <Img
              src={hovered ? trabajo.img[0] : trabajo.img[1]}
              alt={trabajo.title}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ transition: " all 1s ease-in-out 0.5s " }}
            />
            <P>
              {language === "english"
                ? trabajo.descriptionEn
                : trabajo.descriptionEs}
            </P>
          </DivTitulo>
          <DivDependecias>
            <H2>Dependencias</H2>
            <Ul>
              {trabajo.dependencias.map((dependencia, i) => (
                <Li key={`${trabajo.id}-dep-${i}`}>{dependencia}</Li>
              ))}
            </Ul>
          </DivDependecias>
          <DivIconos>
            <H2>Deploy - Repository</H2>
            <DivD>
              {trabajo.links.map((link, i) => (
                <a
                  key={`${trabajo.id}-link-${i}`}
                  href={link.url}
                  target={"_blank"}
                >
                  <ImgLogo src={link.logo} alt="" />
                </a>
              ))}
            </DivD>
          </DivIconos>
        </DivMain>
      ))}
    </>
  );
};

export default Trabajos;
