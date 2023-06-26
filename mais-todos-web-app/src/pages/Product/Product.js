import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  useDeleteProduct,
  useFetchSingleProduct,
} from "../../queries/productQueries";
import useCartStore from "../../store/useCartStore";

const Product = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const handleSendToCart = useCallback(
    (product) => {
      addProductToCart(product);
    },
    [addProductToCart]
  );

  const { data, isLoading, error } = useFetchSingleProduct(id);

  const { mutate, isError, isSuccess } = useDeleteProduct();

  const handleEditProduct = () => {
    navigate("/edit", { state: data });
  };

  const handleDeleteProduct = useCallback(() => {
    mutate({ id });
  }, [id, mutate]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

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
          <Button onClick={() => handleEditProduct(data)}>
            EDITAR PRODUTO
          </Button>
          {isError && <span>erro ao excluir produto</span>}
          <Button onClick={() => handleDeleteProduct()}>EXCLUIR PRODUTO</Button>
        </CartButton>
      </DescriptionWrapper>
    </PageWrapper>
  );
};

export default Product;
