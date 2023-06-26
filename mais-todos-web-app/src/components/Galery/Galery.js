import React, { useState } from "react";
import { GalerryWrapper, ProductImg } from "./styles";
import Modal from "./Modal";
import SlideShow from "./SlideShow/SlideShow";

const Galery = ({ images }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <GalerryWrapper onClick={() => setOpenModal(true)}>
        <ProductImg alt="main gallery" src={images[0]} />
      </GalerryWrapper>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <SlideShow images={images} />
      </Modal>
    </>
  );
};

export default Galery;
