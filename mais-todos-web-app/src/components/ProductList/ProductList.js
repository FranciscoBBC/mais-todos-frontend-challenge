import React from "react";
import Card from "../ProductCard";
import { ListWrapper } from "./styles";

const ProductList = ({ productList }) => (
  <ListWrapper>
    {productList.map(({ id, title, price, image }) => (
      <Card key={id} id={id} title={title} price={price} img={image} />
    ))}
  </ListWrapper>
);

export default ProductList;
