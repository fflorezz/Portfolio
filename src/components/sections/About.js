import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  scroll-margin-top: 8rem;
  .text {
    max-width: 60%;
    position: relative;
    margin-right: 4rem;
    @media (max-width: 600px) {
      max-width: 100%;
      margin-right: 0;
    }
  }
  .img-profile {
    width: 150px;
    height: 150px;
    background-color: var(--primary);
    border-radius: 50%;
    margin: 0 auto;
  }

  h2:after {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    height: 2px;
    opacity: 0.4;
    background-color: var(--gray-light);
    right: 0;
    top: 1.6em;
  }
`;
const About = () => {
  return (
    <StyledAbout id="about">
      <div className="text">
        <h2>About</h2>
        <p>
          Hola, soy Felipe, frontend developer y artista visual con experiencia
          en el desarrollo de aplicaciones y sitios web.
        </p>
        <p>
          Me apasiona crear atractivos productos visuales mediante interfaces
          precisas e intuitivas, desde su concepción (UI/UX) hasta su producción
          (frontend).
        </p>
        <p>
          Estas son algunas de las tecnologías con las que he trabajado
          recientemente:
        </p>
      </div>
      <div className="img-profile"></div>
    </StyledAbout>
  );
};

export default About;
