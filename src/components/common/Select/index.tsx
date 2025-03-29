import React from "react";
import styled from "styled-components";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const StyledSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.1rem;
  }
`;

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
