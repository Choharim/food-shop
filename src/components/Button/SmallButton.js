import React from "react";
import styled from "styled-components";

const SmallButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default SmallButton;

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
`;
