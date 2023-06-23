import React from "react";
import {
  NavBarHeader,
  LogoWrapper,
  ActionWrapper,
  NavWrapper,
  NavLink,
  Cart,
  Person,
  ImgLogo
} from "./styles";

const navbar = () => (
  <NavBarHeader>
    <LogoWrapper>
      <ImgLogo alt="brand logo" src="/logoTacca.png" />
    </LogoWrapper>
    <ActionWrapper>
      <Person size="24px" />
      <Cart size="24px" />
    </ActionWrapper>
    <NavWrapper>
      <NavLink to="/">nav item</NavLink>
    </NavWrapper>
  </NavBarHeader>
);

export default navbar;
