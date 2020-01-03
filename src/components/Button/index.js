import React from "react";

import { Container } from "./styles";

const Button = props => {
  return (
    <Container {...props} onClick={props.onPress}>
      {props.children}
    </Container>
  );
};

export default Button;
