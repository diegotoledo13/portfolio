import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Experiencia from "./Experiencia";

const DivPortfolio = styled.div`
  @media (min-width: 768px) {
    margin: 100px 15px 30px 50px;
  }
`;
const Portfolio = ({ language }) => {
  return (
    <DivPortfolio>
      <Experiencia language={language} />
    </DivPortfolio>
  );
};
Portfolio.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Portfolio;
