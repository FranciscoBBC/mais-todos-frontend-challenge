import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 46px;
  background: var(--color-medium-gray);
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  padding: var(--spacing-1);
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2);
  max-width: 768px;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 46px;
  background: var(--color-medium-gray);
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  text-align: start;
`;
