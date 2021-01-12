import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/Input";
import BigButton from "components/Button/BigButton";
import logo from "icons/logo-2.png";

const LogIn = () => {
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };

  return (
    <LogInContainer>
      <LogInForm onSubmit={handleSubmit}>
        <Logo />
        <Input
          onChange={handleChange("id")}
          value={currentUser.id}
          type="text"
          width="100%"
        >
          아이디
        </Input>
        <Input
          onChange={handleChange("pw")}
          value={currentUser.pw}
          type="password"
          width="100%"
        >
          비밀번호
        </Input>
      </LogInForm>
      <BigButton type="submit" color={validation ? "#9e8380" : "#d7d2cb"}>
        확인
      </BigButton>
    </LogInContainer>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 180px;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  background-image: url(${logo});
  background-size: contain;
`;
