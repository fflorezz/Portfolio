import React from "react";
import { Link } from "gatsby";
import { navLinks } from "../config";

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
  transition: var(--transitionLink);
  :hover {
    color: var(--primary);
    transform: var(--transformLink);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        {navLinks.map(({ url, name }) => (
          <li>
            <StyledLink to={url}>{name}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
