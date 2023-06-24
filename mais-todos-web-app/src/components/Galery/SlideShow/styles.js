import styled from "styled-components";

export const Slider = styled.ul`
  display: block;
  height: 293px;
  width: 600px;
  margin: auto;
  margin-top: 20px;
  position: relative;
  li {
    list-style: none;
    position: absolute;
  }
`;

export const CurrentImageWrapper = styled.div``;
export const CurrentImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: unset;
  vertical-align: top;
`;
