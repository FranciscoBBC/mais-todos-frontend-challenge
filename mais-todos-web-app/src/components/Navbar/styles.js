import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPerson, BsCart2 } from "react-icons/bs";

export const NavBarHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
`;

export const LogoWrapper = styled(Link)`
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
  justify-content: space-evenly;
  grid-column-start: 1;
  grid-column-end: 3;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ImgLogo = styled.img`
  width: 150px;
  margin-left: var(--spacing-2);
`;

export const NavLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  margin: 0 var(--spacing-1);
  font-weight: 600;
  @media screen and (min-width: 768px) {
    margin: 0 var(--spacing-2);
  }
`;

export const IconLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  span {
    background: var(--color-emerald);
    border-radius: 50px;
    width: 18px;
    height: 18px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    z-index: 1;
    top: 35px;
    right: 8px;
    font-weight: 700;
  }
`;

export const Person = styled(BsPerson)`
  margin-right: var(--spacing-2);
`;

export const Cart = styled(BsCart2)`
  margin-right: var(--spacing-2);
`;
