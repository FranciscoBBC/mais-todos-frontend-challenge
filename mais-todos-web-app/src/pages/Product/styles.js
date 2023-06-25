import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px;
  text-align: left;
`;
export const Description = styled.h2`
  font-size: 16px;
  text-align: left;
  font-weight: 400;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2);
  gap: var(--spacing-3);
  width: 100%;
  flex-wrap: wrap;
  @media screen and (min-width: 480px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  gap: var(--spacing-2);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    width: 50%;
  }
`;

export const CartButton = styled.div`
  width: 100%;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  @media screen and (min-width: 480px) {
    width: 50%;
  }
`;
