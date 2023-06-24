import React from "react";
import { CurrentImage, Slider } from "./styles";

const SlideShow = ({ images }) => (
  <Slider>
    {images.map((image, key) => (
      <li key={image}>
        <CurrentImage alt={`element${key}`} src={image} />
      </li>
    ))}
  </Slider>
);

export default SlideShow;
