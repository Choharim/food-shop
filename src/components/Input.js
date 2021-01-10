import React from "react";
import styled from "styled-components";

const Input = ({ children, ...props }) => {
  return (
    <InputContainer>
      <InputTitle>{children}</InputTitle>
      <InputBox {...props} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  height: 50px;
  padding: 10px 15px;
  border: 1px solid #c9aca9;
  border-radius: 4px;
`;

const InputTitle = styled.label`
  position: absolute;
  top: -10px;
  font-size: 16px;
  color: #9e8380;
  font-weight: bolder;
`;

const InputBox = styled.input`
  height: 40px;
  width: ${(props) => props.width};
  outline: none;
  border: none;
  border-bottom: 2px solid #c9aca9;
  font-size: 16px;
`;
