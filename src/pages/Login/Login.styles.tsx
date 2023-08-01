import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
