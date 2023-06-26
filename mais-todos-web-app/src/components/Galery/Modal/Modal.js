import React from "react";
import { BsXLg } from "react-icons/bs";
import { ModalContent, CloseWrapper } from "./styles";

const Modal = ({ open, onClose, children }) => {
  if (open) {
    return (
      <ModalContent>
        <CloseWrapper onClick={() => onClose()} data-testid="closeModal">
          <BsXLg size="24px" />
        </CloseWrapper>
        {children}
      </ModalContent>
    );
  }
  return <div />;
};

export default Modal;
