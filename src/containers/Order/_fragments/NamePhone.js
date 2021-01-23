import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";

const NamePhone = ({ handleChange }) => {
  const { userInfo } = useContext(Context);
  return (
    <>
      <InputContainer>
        <InputLabel>이름</InputLabel>
        <Input
          onChange={handleChange("name")}
          value={userInfo.name}
          type="text"
        />
        {userInfo.name === "" && <Warning>이름을 적어주세요.</Warning>}
      </InputContainer>
      <InputContainer>
        <InputLabel>전화번호</InputLabel>
        <Input
          onChange={handleChange("phone")}
          value={userInfo.phone}
          autocomplete="off"
          type="text"
          placeholder="ex) 010 - 1234 - 5678"
        />
        {userInfo.phone === "" && <Warning>전화번호를 적어주세요.</Warning>}
        {!userInfo.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
          userInfo.phone !== "" && (
            <Warning>010 - 1234 - 5678 형식으로 적어주세요.</Warning>
          )}
      </InputContainer>
    </>
  );
};

export default NamePhone;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #493c3b;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  height: 30px;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid #7d6765;
`;

const Warning = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #493c3b;
`;
