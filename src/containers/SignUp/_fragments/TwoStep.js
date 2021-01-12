import React from "react";
import Input from "components/Input";

const TwoStep = ({ userObj, handleChange }) => {
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
      <Input
        onChange={handleChange("pw")}
        value={userObj.pw}
        autocomplete="off"
        type="password"
        placeholder="4글자 이상"
        width="100%"
      >
        비밀번호
      </Input>
    </>
  );
};

export default TwoStep;
