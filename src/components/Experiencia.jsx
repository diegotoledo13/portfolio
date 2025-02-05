import { useState } from "react";
import styled from "@emotion/styled";
import { experiencia } from "../data/experiencia";
import "../index.css";

const DivMain = styled.div`
  margin: 20px auto;
  border-radius: 15px;
  background-color: var(--color7);
  display: grid;
  justify-items: center;
  width: 70%;
  transition: max-height 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? "1000px" : "100px")};
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 255, 0.5);
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
  width: 50px;
  height: 50px;
  margin: 10px;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 0 10px #000000;
`;
const H1 = styled.h1`
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

const Experiencia = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {experiencia.map((exp) => (
        <DivMain key={exp.id} expanded={expandedId === exp.id}>
          <DivTitulo onClick={() => handleToggle(exp.id)}>
            <H1>{exp.title}</H1>
            <Img src={exp.img[0]} alt={exp.title} />
          </DivTitulo>
          {expandedId === exp.id && (
            <div>{/* Aquí puedes agregar el contenido que desees */}</div>
          )}
        </DivMain>
      ))}
    </>
  );
};

// Removed unused propTypes

export default Experiencia;
