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
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === "#d7d2cb"
      ? "#faf9f8"
      : props.color === "#b89995"
      ? "#f3eceb"
      : null};

  &:hover {
    background-color: #b89995;
    color: #f3eceb;
  }
`;
