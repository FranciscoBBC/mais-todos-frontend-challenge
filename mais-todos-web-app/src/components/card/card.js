import React from "react";
import { CardWrapper, Price, Text, ImageWrapper, ProductImg } from "./styles";

const card = ({ img, description, price, id }) => (
  <CardWrapper to={`/product/${id}`}>
    <ImageWrapper>
      <ProductImg alt="product card" src={img} />
    </ImageWrapper>
    <div>
      <Text>{description}</Text>
      <Price>
        por <span>{price}</span>
      </Price>
    </div>
  </CardWrapper>
);

export default card;
