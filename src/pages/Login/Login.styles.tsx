import styled from "@emotion/styled/macro";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;
