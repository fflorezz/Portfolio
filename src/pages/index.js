import * as React from "react";
import Layout from "./../components/Layout";
import Hero from "./../components/sections/Hero";
import About from "./../components/sections/About";
import { GlobalContextProvider } from "../GlobalContext";

const IndexPage = () => {
  return (
    <GlobalContextProvider>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </GlobalContextProvider>
  );
};

export default IndexPage;
