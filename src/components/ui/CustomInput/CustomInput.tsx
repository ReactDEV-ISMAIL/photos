import { ChangeEvent } from "react";
import { Control, FieldValues } from "react-hook-form";
import { LoginFormType } from "types/types";
import { InputContainer, StyledInput, StyledLabel } from "./CustomInput.styles";

type InputType = "text" | "password";
interface CustomInputProps {
  type?: InputType;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  control?: Control<LoginFormType, FieldValues>;
}
const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
