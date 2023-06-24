import React from "react";
import { Text } from "./styles";
import priceFormatter from "../../utils/priceFormater";

const Price = ({ money, priceSize }) => {
  const formattedPrice = priceFormatter(money);

  return (
    <Text pricesize={priceSize}>
      por <span>{formattedPrice}</span> à vista
    </Text>
  );
};

export default Price;
