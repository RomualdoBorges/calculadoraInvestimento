import React from "react";
import styled from "styled-components";

interface InputProps {
  id: string;
  label: string;
  value: number | undefined;
  onChange: (value: React.SetStateAction<number | undefined>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

const Input: React.FC<InputProps> = ({ id, label, value, onChange }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type="number"
        id={id}
        value={value ?? ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? undefined : Number(e.target.value))
        }
        required
      />
    </Wrapper>
  );
};

export default Input;
