import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/Input";
import BigButton from "components/Button/BigButton";
import logo from "images/logo.png";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  let history = useHistory();
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [logInSuccess, setLogInSuccess] = useState(false);

  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };
  const checkUser = () => {
    if (
      JSON.parse(localStorage.getItem("users")).some(
        (user) => user.id === currentUser.id && user.pw === currentUser.pw
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkUser()) {
      setLogInSuccess(true);
    } else {
      setLogInSuccess(false);
    }
  };
  if (logInSuccess) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    history.push("/");
  }

  return (
    <LogInContainer>
      <LogInForm>
        <Logo onClick={() => history.push("/")} />
        <Input
          onChange={handleChange("id")}
          value={currentUser.id}
          type="text"
          width="100%"
        >
          아이디
        </Input>
        {!checkUser() && <Warning>등록되지 않은 정보입니다.</Warning>}
        <Input
          onChange={handleChange("pw")}
          value={currentUser.pw}
          autocomplete="current-password"
          type="password"
          width="100%"
        >
          비밀번호
        </Input>
        {!checkUser() && <Warning>등록되지 않은 정보입니다.</Warning>}
        <LineText>OR</LineText>
      </LogInForm>
      <SignUpBtn onClick={() => history.push("/signUp")}>회원가입</SignUpBtn>
      <BigButton
        onClick={handleSubmit}
        type="submit"
        color={checkUser() ? "#9e8380" : "#d7d2cb"}
      >
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
  cursor: pointer;
`;

const LineText = styled.div`
  display: flex;
  flex-basis: 10%;
  align-items: center;
  width: 100%;
  color: #b89995;
  font-size: 12px;
  &::after,
  &::before {
    content: "";
    flex-grow: 1;
    background: #b89995;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const SignUpBtn = styled(BigButton)`
  bottom: 100px;
`;

const Warning = styled.span`
  text-align: center;
  font-size: 13px;
`;
