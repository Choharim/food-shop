import React from "react";
import styled from "styled-components";

const BigButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default BigButton;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  margin: auto 0 25px;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  font-size: 23px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: white;
`;
