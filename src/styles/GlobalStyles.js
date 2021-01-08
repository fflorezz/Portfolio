import { createGlobalStyle } from "styled-components";

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
    font-family: Roboto, Helvetica,  sans-serif;
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
    ${"" /* font-size: 5.6rem; */}
     font-size: clamp(40px, 4vw, 80px) 
  ${"" /* font-size: clamp(4rem, 2.9615rem + 2.8846vw, 7rem); */}

  }

  h2{
    ${"" /* font-size: 4rem; */}
    font-size: clamp(30px, 3vw, 60px)
  }

  h3{
    ${"" /* font-size: 2.6rem; */}
    font-size: clamp(22px, 1.9vw, 40px)
  }

  h4{
    ${"" /* font-size: 2.1rem; */}
    font-size: clamp(18px, 1.6vw, 36px)
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
