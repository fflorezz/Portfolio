import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "./Logo";
import Nav from "./Nav";

const StyledHeader = styled.header`
  max-width: 90vw;
  width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
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
