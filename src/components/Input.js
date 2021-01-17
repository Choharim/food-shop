import React from "react";
import styled from "styled-components";

const Input = ({ validaion, warning, children, ...props }) => {
  return (
    <>
      <InputContainer {...props}>
        <InputTitle>{children}</InputTitle>
        <InputBox {...props} />
      </InputContainer>
    </>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 40px;
  width: ${(props) => props.width};
  padding: 5px 0;
  margin: 10px 0;
  border: 1px solid #7d6765;
  border-radius: 35px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  font-size: 16px;
`;

const InputTitle = styled.label`
  position: absolute;
  top: -13px;
  left: 20px;
  color: #7d6765;
  font-weight: bolder;
  background-color: white;
`;

const InputBox = styled.input`
  width: 90%;
  outline: none;
  border: none;
  border-radius: 35px;
  background-color: white;
`;
