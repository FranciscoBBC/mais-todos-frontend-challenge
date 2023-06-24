import React from "react";
import { CardWrapper, Price, Text, ImageWrapper, ProductImg } from "./styles";

const ProductCard = ({ img, title, price, id }) => {
  const formatedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <CardWrapper to={`/product/${id}`}>
      <ImageWrapper>
        <ProductImg alt="card" src={img} />
      </ImageWrapper>
      <Text>{title}</Text>
      <Price>
        por <span>{formatedPrice}</span> à vista
      </Price>
    </CardWrapper>
  );
};

export default ProductCard;
