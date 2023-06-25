import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ onClick = () => {}, children }) => (
  <ButtonWrapper onClick={() => onClick()}>{children}</ButtonWrapper>
);

export default Button;
