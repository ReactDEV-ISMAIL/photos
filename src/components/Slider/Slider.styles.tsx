import styled from "@emotion/styled/macro";
import myImage from "assets/login.jpg";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 100%;
  /* background-image: url(${myImage}); */
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    padding: 0;
    height: 400px;
  }
`;
