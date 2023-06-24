import React from "react";
import { BsXLg } from "react-icons/bs";
import { ModalContent, CloseWrapper } from "./styles";

const Modal = ({ open, onClose, children }) => (
  <ModalContent open={open}>
    <CloseWrapper onClick={() => onClose()}>
      <BsXLg size="24px" />
    </CloseWrapper>
    {children}
  </ModalContent>
);

export default Modal;
