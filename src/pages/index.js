import * as React from "react";
import Layout from "./../components/Layout";
import Hero from "./../components/sections/Hero";
import About from "./../components/sections/About";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
