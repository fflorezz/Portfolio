import React from "react";
import styled from "styled-components";
import useSetCurrentSection from "../../hooks/useSetCurrentSection";

import Skills from "./../Skills";

const StyledAbout = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  scroll-margin-top: 8rem;
  .text {
    max-width: 75%;
    position: relative;
    margin-right: 4rem;
    @media (max-width: 600px) {
      max-width: 100%;
      margin-right: 0;
    }
  }
  .title {
    position: relative;
  }
  h2:after {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    height: 2px;
    opacity: 0.4;
    background-color: var(--primary);
    right: 0;
    top: 60%;
  }
`;
const About = () => {
  const ref = useSetCurrentSection("/#about");

  return (
    <StyledAbout ref={ref} id="about">
      <div className="text">
        <div className="title">
          <h2>About</h2>
        </div>
        <p>
          Desarrollador y artista visual con experiencia en el desarrollo de
          aplicaciones y sitios web. Me especializo en crear atractivos
          productos visuales mediante interfaces precisas e intuitivas, desde su
          concepción (UI/UX) hasta su producción (frontend/backend).
        </p>
        <p>
          Estas son algunas de las tecnologías con las que he trabajado
          recientemente:
        </p>
      </div>
      <Skills />
    </StyledAbout>
  );
};

export default About;
