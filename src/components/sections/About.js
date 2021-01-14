import React from "react";
import styled from "styled-components";
import useSetCurrentSection from "../../hooks/useSetCurrentSection";

import Skills from "./../Skills";
import StyledSection from "./../../styles/StyledSection";

const StyledAbout = styled.div`
  & .title {
    position: relative;
  }
  & h2:after {
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
    <StyledSection ref={ref} id="about">
      <StyledAbout>
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
      </StyledAbout>
      <Skills />
    </StyledSection>
  );
};

export default About;
