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
  width: 30%;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === "#fff"
      ? "#b89995"
      : props.color === "#b89995"
      ? "#fff"
      : null};
`;
