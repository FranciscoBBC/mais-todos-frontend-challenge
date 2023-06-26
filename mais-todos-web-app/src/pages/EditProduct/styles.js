import { styled } from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--spacing-2);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  gap: var(--spacing-2);
  div {
    width: 100%;
    text-align: left;
  }
  label {
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  background: var(--color-medium-gray);
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  padding: var(--spacing-1);
`;

export const Textarea = styled.textarea`
  width: 100%;
  background: var(--color-medium-gray);
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  padding: var(--spacing-1);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  text-align: start;
`;
