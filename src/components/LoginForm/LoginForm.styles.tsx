import styled from "@emotion/styled/macro";

export const Form = styled.form`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding: 80px;
  height: 100%;
  gap: 10px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 0;
    height: 400px;
  }
`;
export const LoginButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
  font-size: 16px;
`;
