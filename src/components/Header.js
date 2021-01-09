import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  /* border: solid 2px red; */
  position: fixed;
  width: 100%;
  margin: 0;
  padding: 2rem 5% 1rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--background);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
