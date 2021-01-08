import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  /* border: 5px solid red; */
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 1200px;
`;

console.log(StyledMain);

const Layout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Layout;
