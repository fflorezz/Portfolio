import styled from "styled-components";

const StyledTitle = styled.div`
  position: relative;
  & h2:after {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    height: 2px;
    opacity: 0.4;
    background-color: var(--primary);
    right: 0;
    top: 60%;
  }
`;

export default StyledTitle;
