import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  text-decoration: none;
`;

export const Text = styled.h3`
  font-weight: 700;
  color: var(--color-black);
  padding: var(--spacing-1) 0;
  text-align: left;
  font-size: 14px;
  text-transform: lowercase;
  border-bottom: 1px solid var(--color-medium-gray);
`;

export const Price = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  span {
    color: var(--color-emerald);
    font-weight: 700;
    font-size: 18px;
  }
`;

export const ImageWrapper = styled.div`
  width: 190px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-medium-gray);
`;
