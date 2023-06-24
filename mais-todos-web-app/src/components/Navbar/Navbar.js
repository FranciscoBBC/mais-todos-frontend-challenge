import React from "react";
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

const Navbar = () => (
  <NavBarHeader>
    <LogoWrapper>
      <ImgLogo alt="brand logo" src="/logoTacca.png" />
    </LogoWrapper>
    <ActionWrapper>
      <IconLink to="/">
        <Person size="24px" />
      </IconLink>
      <IconLink to="/cart">
        <Cart size="24px" />
      </IconLink>
    </ActionWrapper>
    <NavWrapper>
      <NavLink to="/">nav item</NavLink>
    </NavWrapper>
  </NavBarHeader>
);

export default Navbar;
