import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  width: 800px;
  margin: 25rem auto 0;
  & h1,
  h4 {
    margin: 0;
  }
  & h2 {
    color: var(--gray-light);
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .text-light {
    font-weight: 400;
    color: var(--gray-light);
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <h4>Hola, soy</h4>
      <h1>Felipe Florez.</h1>
      <h2>Frontend Developer & Artista Visual.</h2>
      <h3 className="text-light">
        Diseño y desarrollo experiencias visuales para la Web.
      </h3>
    </StyledHero>
  );
};

export default Hero;
