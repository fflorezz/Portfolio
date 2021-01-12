import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import useNavLinks from "./../hooks/useNavLinks";

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
  const navLinks = useNavLinks();
  return (
    <StyledNav>
      <ul>
        {navLinks.map(({ url, name }) => (
          <li key={url}>
            <StyledLink to={url}>{name}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
