import React from "react";
import "fontsource-roboto";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
