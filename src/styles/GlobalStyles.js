import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --primary:#353BDB;
    --primary-dark:#292DA8;
    --black: #333333;
    --gray: #666666;
    --gray-dark: #333333;
    --gray-light: #999999; 
    --background: #F6F6F6;

    --transitionLink: all ease-in 100ms;
    --transformLink:  scale(1.1) translateY(-10%);

    --btn-md-width: 16rem;
    --btn-md-height: 4rem;
    --btn-md-font: 500 1.7rem roboto, sans-serif;

    --btn-sm-width: 9rem;
    --btn-sm-height: 3.3rem;
    --btn-sm-font: 500 1.4rem roboto, sans-serif,

  }

  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
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
    background-color: var(--background);
    > div{
      margin-top:0;
    }
    
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
     font-size: clamp(16px, 1.6vw, 18px);
    color: var(--gray-light)
  }

  a,
  ul,
  li {
    text-decoration: none;
    list-style-type: none;
    padding:0;
  }

  li {
    margin-top: 0.25rem;
  }
`;

export default GlobalStyles;
