import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import Galery from "../../components/Galery";
import {
  Title,
  PageWrapper,
  Description,
  CartButton,
  GaleryWrapper,
  DescriptionWrapper,
} from "./styles";
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

  const { image, title, price, description } = data;

  return (
    <PageWrapper>
      <GaleryWrapper>
        <Galery images={[image]} />
      </GaleryWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price money={price} priceSize="24px" />
        <CartButton>
          <Button onClick={() => handleSendToCart(data)}>
            ADICIONAR AO CARRINHO
          </Button>
        </CartButton>
      </DescriptionWrapper>
    </PageWrapper>
  );
};

export default Product;
