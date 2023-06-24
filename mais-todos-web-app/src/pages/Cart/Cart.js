import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import {
  PageTitle,
  ItemsCounter,
  ImageWrapper,
  ProductImg,
  ResumeWrapper,
  Title,
  PriceWrapper,
  CartItem,
  ExcludIcon,
} from "./styles";
import priceFormatter from "../../utils/priceFormater";
import Button from "../../components/Button";

const Cart = () => {
  const cartStorage = useCartStore((state) => state.cart);
  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  );
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle>Resumo da sacola</PageTitle>
      <div>
        <ItemsCounter>
          Sua sacola tem {cartStorage.length}
          {cartStorage.length > 1 ? " items" : " item"}
        </ItemsCounter>
        {cartStorage.map((item) => (
          <CartItem key={item.id}>
            <ResumeWrapper>
              <ImageWrapper>
                <ProductImg alt="item cart" src={item.image} />
              </ImageWrapper>
              <Title>{item.title}</Title>
              <PriceWrapper>{priceFormatter(item.price)}</PriceWrapper>
              <ExcludIcon
                size={24}
                onClick={() => removeProductFromCart(item.id)}
              />
            </ResumeWrapper>
          </CartItem>
        ))}
        <Button onClick={() => navigate("/checkout")}>COMPRAR</Button>
      </div>
    </div>
  );
};

export default Cart;
