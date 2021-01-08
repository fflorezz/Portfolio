import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="35"
      viewBox="0 0 84 43"
      style={{ cursor: "pointer" }}
    >
      <text
        transform="translate(0 16)"
        fill="#343434"
        font-size="17"
        font-family="Montserrat-ExtraBold, Montserrat"
        font-weight="800"
        letter-spacing="0.25em"
      >
        <tspan x="0" y="0">
          FELIPE
        </tspan>
        <tspan letter-spacing="0.15em">
          <tspan x="0" y="20">
            FLOREZ
          </tspan>
        </tspan>
      </text>
      <path
        d="M0,1.473H83.5"
        transform="translate(0.5 40.527)"
        fill="none"
        stroke="#333"
        stroke-width="2"
      />
    </svg>
  );
};

export default Logo;
