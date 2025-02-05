import styled from "@emotion/styled";
import Menu from "./Menu";
import PropTypes from "prop-types";

const DivF = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
  background-color: var(--color8);
  padding: 10px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    justify-content: center;
    align-items: center;
    background-color: var(--color8);
    padding: 10px;
  }
`;
const P2 = styled.p`
  color: grey;
  text-align: start;
  font-weight: 700;
`;

const Footer = ({ language, setLanguage }) => {
  return (
    <DivF>
      <Menu language={language} setLanguage={setLanguage} />
      <P2>© Diego Toledo {new Date().getFullYear()} - Uruguay</P2>
    </DivF>
  );
};
Footer.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default Footer;
