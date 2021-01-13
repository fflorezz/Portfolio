import React from "react";
import styled from "styled-components";
import Icon from "./icons/Icon";

import useSocialMedia from "./../hooks/useSocialMedia";

const StyledSocial = styled.div`
  /* border: solid red 2px; */
  position: fixed;
  bottom: 0;
  width: 70px;
  margin-left: 5vw;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    margin-top: 2.4rem;
  }
  svg {
    cursor: pointer;
    transition: var(--transitionLink);
    :hover {
      transform: var(--transformLink);
      path {
        fill: var(--primary);
      }
    }
  }
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 10rem;
    position: relative;
    margin: 0 auto;
    background-color: var(--gray);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Social = () => {
  const navLinks = useSocialMedia();
  return (
    <StyledSocial>
      <ul>
        {navLinks.map(({ name, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </StyledSocial>
  );
};

export default Social;
