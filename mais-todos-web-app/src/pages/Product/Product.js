import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Galery";
import { Title } from "./styles";
import Price from "../../components/Price";
import Button from "../../components/Button";
import { useFetchSingleProduct } from "../../queries/productQueries";
import useCartStore from "../../store/useCartStore";

const Product = () => {
  const { id } = useParams();

  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const handleSendToCart = useCallback(
    (product) => {
      addProductToCart(product);
    },
    [addProductToCart]
  );

  const { data, isLoading, error } = useFetchSingleProduct(id);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const { image, title, price, rating } = data;

  return (
    <div>
      <Gallery images={[image]} />
      <Title>{title}</Title>
      <div>{rating.rate}</div>
      <Price money={price} priceSize="24px" />
      <Button onClick={() => handleSendToCart(data)}>
        ADICIONAR AO CARRINHO
      </Button>
    </div>
  );
};

export default Product;
