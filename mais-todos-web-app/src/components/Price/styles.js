import styled from "styled-components";

export const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  text-decoration: none;
  color: var(--color-black);
  span {
    color: var(--color-emerald);
    font-weight: 700;
    font-size: ${({ pricesize }) => pricesize || "18px"};
  }
`;
