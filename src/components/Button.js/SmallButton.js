import React from "react";
import styled, { css } from "styled-components";

const SmallButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default SmallButton;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: #7d6765;

  &:hover {
    background-color: #c9aca9;
  }
`;
