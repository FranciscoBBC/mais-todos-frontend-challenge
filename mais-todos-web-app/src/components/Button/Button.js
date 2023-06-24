import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ onClick }) => (
  <ButtonWrapper onClick={() => onClick()}>ADICIONAR AO CARRINHO</ButtonWrapper>
);

export default Button;
