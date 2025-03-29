import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  // Responsivo para telas menores (ex: celular)
  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
  }
`;

const Button: React.FC<ButtonProps> = ({ type = "button", children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
