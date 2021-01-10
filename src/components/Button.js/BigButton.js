import React from "react";
import styled, { css } from "styled-components";

const BigButton = ({ children, ...props }) => {
  return (
    <ButtonContainer>
      <Button {...props}>{children}</Button>
    </ButtonContainer>
  );
};

export default BigButton;

const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto 0 25px;
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  font-size: 23px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === "#d7d2cb"
      ? "#faf9f8"
      : props.color === "#9e8380"
      ? "#493c3b"
      : null};
`;
