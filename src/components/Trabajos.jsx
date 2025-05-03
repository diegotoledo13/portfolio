import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import trabajos from "../data/trabajos";
import "../index.css";

const DivMain = styled.div`
  margin: 20px auto;
  border-radius: 15px;
  background-color: var(--color7);
  display: grid;
  justify-items: center;
  width: 70%;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px rgba(177, 177, 240, 0.5);
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const DivTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media (min-width: 768px) {
    flex-direction: row;
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
  font-family: "Lato", sans-sesrif;
  color: #d4d4d4;
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
  color: #d4d4d4;
  margin: 5px;
  padding: 10px;
  @media (min-width: 768px) {
  }
`;
const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  color: #d4d4d4;
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
  margin: 10px;
  width: 45px;
  height: 45px;
  background-color: var(--color8);
  border-radius: 50%;
  box-shadow: 0 0 10px #9c9c9c;
  opacity: 0.8;
`;

const Content = styled.div`
  overflow: hidden;
  transition: height 0.5s ease;
`;

const Trabajos = ({ language }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [heights, setHeights] = useState({});

  const contentRefs = useRef({});

  useEffect(() => {
    const newHeights = {};
    Object.keys(contentRefs.current).forEach((id) => {
      newHeights[id] = contentRefs.current[id].scrollHeight;
    });
    setHeights(newHeights);
  }, [expandedId]);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {trabajos.map((trabajo) => (
        <DivMain key={trabajo.id} expanded={expandedId === trabajo.id}>
          <DivTitulo onClick={() => handleToggle(trabajo.id)}>
            <H1>{trabajo.title}</H1>
            <div>
              {trabajo.dependencias.map((logo, i) => (
                <ImgLogoD key={`${trabajo.id}-logo-${i}`} src={logo} />
              ))}
            </div>
          </DivTitulo>
          <Content
            ref={(el) => (contentRefs.current[trabajo.id] = el)}
            style={{
              height:
                expandedId === trabajo.id ? `${heights[trabajo.id]}px` : "0px",
            }}
          >
            <DivImgContainer>
              <Img
                src={trabajo.img[1]}
                alt={trabajo.title}
                style={{ transition: " all 1s ease-in-out 0.5s " }}
              />
              <DivIconosInternos>
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
            <DivIconos>
              <H2>Deploy - Repository</H2>
              <DivD>
                {trabajo.links.map((link, i) => (
                  <a
                    key={`${trabajo.id}-link-${i}`}
                    href={link.url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ImgLogo src={link.logo} alt="" />
                  </a>
                ))}
              </DivD>
            </DivIconos>
          </Content>
        </DivMain>
      ))}
    </>
  );
};

Trabajos.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Trabajos;
