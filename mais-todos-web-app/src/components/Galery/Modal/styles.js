import styled from "styled-components";

export const ModalContent = styled.div`
  position: absolute;
  background-color: var(--color-light-gray);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  z-index: 1;
`;
