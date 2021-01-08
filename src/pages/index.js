import * as React from "react";
import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import GlobalStyles from "./../styles/GlobalStyles";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
