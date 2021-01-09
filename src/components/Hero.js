import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  /* hack align center inline-block element */
  text-align: center;
  .container-center {
    text-align: left;
    display: inline-block;
    margin: 30vh auto 0;
    padding-right: 10%;
  }
  & h1,
  h3,
  h4 {
    margin: 0 0 1rem;
    display: block;
  }
  & h4 {
    color: var(--gray);
  }
  & h2 {
    color: var(--gray-light);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .text-light {
    font-weight: 400;
    color: var(--gray-light);
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div className="container-center">
        <h4>Hola, soy</h4>
        <h1>Felipe Florez.</h1>
        <h2>Frontend Developer & Artista Visual.</h2>
        <h3 className="text-light">
          Diseño y desarrollo experiencias visuales para la Web.
        </h3>
      </div>
    </StyledHero>
  );
};

export default Hero;
