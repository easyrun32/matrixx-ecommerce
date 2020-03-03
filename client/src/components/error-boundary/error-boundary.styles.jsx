import styled from "styled-components";
import dog from "./dog.png";
export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  /*background-image: ${({ imageUrl }) => `url(${imageUrl})`};*/
  background-image: url(${dog});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30vh;
  height: 100%;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: orange;
`;
