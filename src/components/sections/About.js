import React from "react";
import styled from "styled-components";
import useSetCurrentSection from "../../hooks/useSetCurrentSection";

import Skills from "./../Skills";
import StyledSection from "./../../styles/StyledSection";
import StyledTitle from "./../../styles/StyledTitle";

const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const About = () => {
  const ref = useSetCurrentSection("/#about");

  return (
    <StyledSection ref={ref} id="about">
      <StyledAbout>
        <StyledTitle>
          <h2>About</h2>
        </StyledTitle>
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
        <Skills />
      </StyledAbout>
    </StyledSection>
  );
};

export default About;
