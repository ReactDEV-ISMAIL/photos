import styled from "@emotion/styled/macro";

export const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;
export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  width: 100%;
  margin-top: 10px;
  &:focus {
    border-color: #007bff;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
`;
