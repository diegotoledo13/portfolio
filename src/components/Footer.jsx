import React from "react";
import styled from "@emotion/styled";
import imagesLogo from "../assets/icons/imagesLogo";

const DivF = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  justify-items: center;
  justify-content: center;
`;
const P2 = styled.p`
  color: grey;
  text-align: start;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <DivF>
      <P2>© Diego Toledo {new Date().getFullYear()} - Uruguay</P2>
    </DivF>
  );
};

export default Footer;
