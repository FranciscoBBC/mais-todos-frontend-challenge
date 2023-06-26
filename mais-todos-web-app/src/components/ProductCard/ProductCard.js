import React from "react";
import { CardWrapper, Text, ImageWrapper, ProductImg } from "./styles";
import Price from "../Price";

const ProductCard = ({ img, title, price, id }) => (
  <CardWrapper to={`/product/${id}`}>
    <ImageWrapper>
      <ProductImg alt="card" src={img} loading="lazy" />
    </ImageWrapper>
    <Text>{title}</Text>
    <Price money={price} />
  </CardWrapper>
);

export default ProductCard;
