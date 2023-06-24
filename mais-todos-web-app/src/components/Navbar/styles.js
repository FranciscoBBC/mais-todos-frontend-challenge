import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPerson, BsCart2 } from "react-icons/bs";

export const NavBarHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
`;

export const LogoWrapper = styled.div`
  height: var(--spacing-8);
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ActionWrapper = styled.div`
  height: var(--spacing-8);
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavWrapper = styled.nav`
  height: var(--spacing-5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const ImgLogo = styled.img`
  width: 150px;
  margin-left: var(--spacing-2);
`;

export const NavLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  margin: 0 var(--spacing-2);
  font-weight: 600;
`;

export const IconLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
`;

export const Person = styled(BsPerson)`
  margin-right: var(--spacing-2);
`;

export const Cart = styled(BsCart2)`
  margin-right: var(--spacing-2);
`;
