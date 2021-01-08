import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    margin-left: 4rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--gray-light);
  cursor: pointer;
  display: block;
  transition: all ease-in 100ms;
  :hover {
    color: var(--primary);
    transform: scale(1.1) translateY(-10%);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink>About</StyledLink>
        </li>
        <li>
          <StyledLink>Proyectos</StyledLink>
        </li>
        <li>
          {" "}
          <StyledLink>Contacto</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
