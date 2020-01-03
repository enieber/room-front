import React from "react";

import { ContainerInput, TextField, Label } from "./styles";

const Input = props => {
  return (
    <ContainerInput>
      {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
      <TextField id={props.id} {...props} />
      <Label error>{props.error}</Label>
    </ContainerInput>
  );
};

export default Input;
