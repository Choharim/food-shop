import React from "react";
import styled from "styled-components";

const Input = ({ children, ...props }) => {
  return (
    <InputContainer {...props}>
      <InputTitle>{children}</InputTitle>
      <InputBox {...props} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 40px;
  width: ${(props) => props.width};
  padding: 10px 0;
  margin-bottom: 25px;
  border: 1px solid #c9aca9;
  border-radius: 35px;
`;

const InputTitle = styled.label`
  position: absolute;
  top: -10px;
  left: 30px;
  font-size: 15px;
  color: #9e8380;
  font-weight: bolder;
`;

const InputBox = styled.input`
  height: 30px;
  width: 90%;
  outline: none;
  border: none;
  border-bottom: 2px solid #c9aca9;
  font-size: 16px;
`;
