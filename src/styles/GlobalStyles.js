import { createGlobalStyle } from "styled-components";
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";
import "fontsource-roboto/900.css";

const GlobalStyles = createGlobalStyle`
  :root{
    --black: #333333;
    --gray: #666666;
    --gray-light: #999999; 
  }

  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * + * {
    margin-top: 1rem;
  }

  body{
    margin:0;
    font-family: "roboto", sans-serif;
    color:var(--black);
    background-color: #F6F6F6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-weight: 900;

    + * {
      margin-top: 0.5rem;
      }
  }

  h1{
    font-size: 5.6rem;
  }

  h2{
    font-size: 4.2rem;
  }

  h3{
    font-size: 2.8rem;
  }

  h4{
    font-size: 2.1rem;
  }

  p{
    font-size: 2.6rem;
    color: var(--gray)
  }

  a,
  ul,
  li {
    text-decoration: none;
    list-style-type: none;
  }

  li {
    margin-top: 0.25rem;
  }
`;

export default GlobalStyles;
