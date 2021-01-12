import styled, { css } from "styled-components";

const StyledElement = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  /* margin-top: 5px; */
  padding: 0 2rem;
  min-width: ${({ size }) => `var(--btn-${size}-width)`};
  height: ${({ size }) => `var(--btn-${size}-height)`};
  font: ${({ size }) => `var(--btn-${size}-font)`};
  background-color: ${({ btnColor }) => `var(--${btnColor})`};
  color: white;
  &:hover {
    background-color: ${({ btnColor }) => `var(--${btnColor}-dark)`};
  }
  ${({ outline }) => outline && outlineButton}
`;

const outlineButton = css`
  background-color: transparent;
  color: ${({ btnColor }) => `var(--${btnColor})`};
  border: 1px solid ${({ btnColor }) => `var(--${btnColor})`};
  &:hover {
    border: 1px solid transparent;
    color: white;
    background-color: ${({ btnColor }) => `var(--${btnColor})`};
  }
`;

export default StyledElement;
