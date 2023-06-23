import { Link } from "react-router-dom";
import styled from "styled-components";

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
  gap: var(--spacing-1);
`;

export const NavWrapper = styled.nav`
  height: var(--spacing-5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
`;
