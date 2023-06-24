import React from "react";
import { Text } from "./styles";

const Price = ({ money, priceSize }) => {
  const formatedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(money);

  return (
    <Text priceSize={priceSize}>
      por <span>{formatedPrice}</span> à vista
    </Text>
  );
};

export default Price;
