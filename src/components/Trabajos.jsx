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
  @media (min-width: 1500px) {
    margin: 250px 250px 250px 250px;
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
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000000;
  @media (min-width: 800px) {
    width: 400px;
    height: 350px;
    margin: 20px;
  }
  @media (min-width: 1100px) {
    width: 600px;
    height: 450px;
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
  }
`;
const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  color: #555555;
  font-size: 25px;
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

const DivIconos = styled.div`
  @media (min-width: 768px) {
    text-align: left;
    margin: 20px;
  }
`;
const DivIconosInternos = styled.div`
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  @media (min-width: 425px) {
    transition: none;
  }
`;
const DivImgContainer = styled.div`
  position: relative;
`;
const ImgLogoD = styled.img`
  padding: 20px;
  margin: 15px;
  width: 45px;
  height: 45px;
  background-color: var(--color8);
  border-radius: 50%;
  box-shadow: 0 0 10px #9c9c9c;
  opacity: 0.8;
`;

const Trabajos = ({ language }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {trabajos.map((trabajo) => (
        <DivMain key={trabajo.id}>
          <H1>{trabajo.title}</H1>
          <DivTitulo>
            <DivImgContainer>
              <Img
                src={trabajo.img[1]}
                alt={trabajo.title}
                style={{ transition: " all 1s ease-in-out 0.5s " }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <DivIconosInternos style={{ opacity: isHovered ? 1 : 0 }}>
                {trabajo.dependencias.map((logo, i) => (
                  <ImgLogoD key={`${trabajo.id}-logo-${i}`} src={logo} />
                ))}
              </DivIconosInternos>
            </DivImgContainer>
            <P>
              {language === "english"
                ? trabajo.descriptionEn
                : trabajo.descriptionEs}
            </P>
          </DivTitulo>
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
