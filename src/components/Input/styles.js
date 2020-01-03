import styled, { css } from "styled-components";

export const ContainerInput = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const TextField = styled.input`
  border: 2px solid #333;
  height: 35px;
  padding-left: 5px;
  width: 20vw;
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: #222;
  margin-top: 5px;
  margin-bottom: 5px;
  ${props =>
    props.error &&
    css`
      font-size: 0.8em;
      color: red;
    `};
`;
