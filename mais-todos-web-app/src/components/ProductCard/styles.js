import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-decoration: none;
  gap: var(--spacing-1);
`;

export const Text = styled.h3`
  font-weight: 700;
  color: var(--color-black);
  text-align: left;
  font-size: 14px;
  height: 46px;
  overflow: hidden;
  text-transform: lowercase;
  border-bottom: 1px solid var(--color-medium-gray);
  width: 100%;
  line-height: 1.5;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid var(--color-medium-gray);
`;

export const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: unset;
`;
