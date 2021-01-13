import React from "react";
import styled from "styled-components";
import useSkills from "./../hooks/useSkills";
import Icon from "./icons/Icon";

const StyledSkills = styled.ul`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 300px));
  width: 100%;
  li {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--gray-light);
    display: flex;
    padding-bottom: 1.2em;
    align-items: center;
  }
  svg {
    margin-right: 0.5em;
    width: 1.6rem;
  }
`;

const Skills = () => {
  const skills = useSkills();
  return (
    <StyledSkills>
      {skills.map(link => (
        <li key={link}>
          <Icon name="Arrow" />
          {link}
        </li>
      ))}
    </StyledSkills>
  );
};

export default Skills;
