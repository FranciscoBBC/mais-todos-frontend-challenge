import React, { useEffect, useState } from "react";
import {
  NavBarHeader,
  LogoWrapper,
  ActionWrapper,
  NavWrapper,
  NavLink,
  Cart,
  Person,
  ImgLogo,
  IconLink,
} from "./styles";
import useCartStore from "../../store/useCartStore";

const Navbar = () => {
  const [cartAlert, setCartAlert] = useState(0);
  const cartStorage = useCartStore((state) => state.cart);
  useEffect(() => {
    if (cartStorage.length > 0) {
      setCartAlert(cartStorage.length);
    }
  }, [cartStorage]);

  return (
    <NavBarHeader>
      <LogoWrapper to="/">
        <ImgLogo alt="brand logo" src="/logoTacca.png" />
      </LogoWrapper>
      <ActionWrapper>
        <IconLink to="/">
          <Person size="24px" />
        </IconLink>
        <IconLink to="/cart">
          <Cart size="24px" />
          {cartStorage.length > 0 && (
            <span data-testid="cartAlert">{cartAlert}</span>
          )}
        </IconLink>
      </ActionWrapper>
      <NavWrapper>
        <NavLink to="/category/electronics">eletrônicos</NavLink>
        <NavLink to="/category/jewelery">joias</NavLink>
        <NavLink to="/category/men's clothing">masculino</NavLink>
        <NavLink to="/category/women's clothing">faminina</NavLink>
      </NavWrapper>
    </NavBarHeader>
  );
};

export default Navbar;
