import styled, { css } from "styled-components";

export const Container = styled.button`
  margin: 10px;
  color: #fff;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 20vw;
  background: #333;
  border: none;
  ${props =>
    props.outline &&
    css`
      background: transparent;
      border: 2px solid #333;
      color: #333;
    `};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
`;
