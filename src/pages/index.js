import * as React from "react";
import Layout from "./../components/Layout";
import Hero from "./../components/sections/Hero";
import About from "./../components/sections/About";
import { GlobalContextProvider } from "../GlobalContext";
import Projects from "../components/sections/Projects";

const IndexPage = () => {
  return (
    <GlobalContextProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>
    </GlobalContextProvider>
  );
};

export default IndexPage;
