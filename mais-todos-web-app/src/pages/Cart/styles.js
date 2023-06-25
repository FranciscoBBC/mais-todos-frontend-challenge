import { BsTrash } from "react-icons/bs";
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2);
  gap: var(--spacing-1);
`;

export const PageTitle = styled.h1`
  font-size: 18px;
`;

export const ItemsCounter = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

export const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 50px 50px;
  grid-column-gap: var(--spacing-2);
  text-align: left;
`;

export const CartItem = styled.div`
  margin: var(--spacing-3) 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-medium-gray);
  grid-row-start: 1;
  grid-row-end: 4;
`;

export const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: unset;
`;

export const Title = styled.h3`
  height: 100%;
  font-size: 14px;
`;

export const PriceWrapper = styled.div`
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const ExcludIcon = styled(BsTrash)`
  height: 100%;
  cursor: pointer;
`;
