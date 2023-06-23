import React from "react";
import {
  NavBarHeader,
  LogoWrapper,
  ActionWrapper,
  NavWrapper,
  NavLink,
} from "./styles";

const navbar = () => (
  <NavBarHeader>
    <LogoWrapper>Logo</LogoWrapper>
    <ActionWrapper>
      <div>Profile</div>
      <div>Cart</div>
    </ActionWrapper>
    <NavWrapper>
      <NavLink to="/">nav item</NavLink>
    </NavWrapper>
  </NavBarHeader>
);

export default navbar;
