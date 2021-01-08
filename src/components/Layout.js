import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import GlobalStyles from "../styles/GlobalStyles";
import useSiteMetadata from "./../hooks/useSiteMetadata";
import Header from "./Header";

const StyledMain = styled.main`
  /* border: 5px solid red; */
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 1200px;
`;

console.log(StyledMain);

const Layout = ({ children }) => {
  const { description, title } = useSiteMetadata();

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
