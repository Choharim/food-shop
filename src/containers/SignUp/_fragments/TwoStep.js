import React, { useContext } from "react";
import styled from "styled-components";
import Input from "components/Input";
import { Context } from "components/ContextProvider/ContextProvider";

const TwoStep = ({ userObj, handleChange }) => {
  const { users } = useContext(Context);

  return (
    <>
      <Input
        onChange={handleChange("id")}
        value={userObj.id}
        autocomplete="off"
        type="text"
        width="100%"
      >
        아이디
      </Input>
      {userObj.id === "" && <Warning>아이디를 적어주세요.</Warning>}
      {users.some((user) => user.id === userObj.id) && (
        <Warning>이미 등록된 아이디입니다.</Warning>
      )}
      <Input
        onChange={handleChange("pw")}
        value={userObj.pw}
        autocomplete="current-password"
        type="password"
        placeholder="4글자 이상"
        width="100%"
      >
        비밀번호
      </Input>
      {userObj.pw === "" && <Warning>비밀번호를 적어주세요.</Warning>}
      {(userObj.pw.length < 3 || userObj.pw.length > 10) &&
        userObj.pw.length !== 0 && (
          <Warning>4글자 이상 10글자 이하로 적어주세요.</Warning>
        )}
    </>
  );
};

export default TwoStep;

const Warning = styled.span`
  text-align: center;
  font-size: 13px;
`;
