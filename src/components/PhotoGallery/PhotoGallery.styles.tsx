import styled from "@emotion/styled/macro";

export const GridContainer = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

export const PhotoCard = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
`;
export const PhotoImg = styled.img`
  border-radius: 5px;
`;
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const HeartIcon = styled.span`
  font-size: 25px;
`;
