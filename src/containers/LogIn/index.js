import React, { useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import Input from "components/Input";
import BigButton from "components/Button/BigButton";
import logo from "images/logo.png";
import { useHistory } from "react-router-dom";
import { Context } from "components/ContextProvider/ContextProvider";

const LogIn = () => {
  let history = useHistory();
  const {
    currentUser,
    setCurrentUser,
    logInSuccess,
    setLogInSuccess,
    users,
    setUsers,
  } = useContext(Context);

  const getUsers_LS = useCallback(async () => {
    const res = await JSON.parse(localStorage.getItem("users"));
    if (res) {
      setUsers(res);
    }
  }, [setUsers]);

  useEffect(() => {
    getUsers_LS();
  }, [getUsers_LS]);

  useEffect(() => {
    if (logInSuccess) {
      // localStorage.setItem("currentUser", JSON.stringify(currentUser));
      history.push("/");
    }
  }, [logInSuccess, history, currentUser]);

  const handleChange = (input) => (e) => {
    setCurrentUser({ ...currentUser, [input]: e.target.value });
  };
  const checkUser = () => {
    if (
      users.some(
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

  return (
    <LogInContainer>
      <BackBtn onClick={() => history.push("/")} />
      <Logo onClick={() => history.push("/")} />
      <LogInForm>
        <Input
          onChange={handleChange("id")}
          value={currentUser.id}
          type="text"
          width="100%"
        >
          아이디
        </Input>
        {currentUser.id === "" && <Warning>아이디를 적어주세요.</Warning>}
        {!checkUser() && currentUser.id !== "" && (
          <Warning>등록되지 않은 정보입니다.</Warning>
        )}
        <Input
          onChange={handleChange("pw")}
          value={currentUser.pw}
          autocomplete="current-password"
          type="password"
          width="100%"
        >
          비밀번호
        </Input>
        {currentUser.pw === "" && <Warning>비밀번호를 적어주세요.</Warning>}
        {!checkUser() && currentUser.pw !== "" && (
          <Warning>등록되지 않은 정보입니다.</Warning>
        )}
      </LogInForm>
      <LineContainer>
        <LineText>OR</LineText>
      </LineContainer>
      <SignUpBtn onClick={() => history.push("/signUp")}>회원가입</SignUpBtn>
      <BigButton
        onClick={handleSubmit}
        type="submit"
        color={checkUser() ? "#7d6765" : "#d7d2cb"}
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
  margin: 180px 20px 0;
`;

const BackBtn = styled(RiArrowGoBackLine)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  background-image: url(${logo});
  background-size: cover;
  cursor: pointer;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border-top: 1px solid #7d6765;
`;

const LineText = styled.span`
  font-size: 13px;
  color: #7d6765;
  position: absolute;
  top: -11px;
  background-color: white;
  padding: 0 10px 0;
`;

const SignUpBtn = styled.button`
  padding: 15px;
  border-radius: 30px;
  outline: none;
  border: none;
  font-size: 23px;
  cursor: pointer;
  background-color: #7d6765;
  width: 100%;
  color: white;
`;

const Warning = styled.span`
  margin: 0 0 5px 20px;
  font-size: 13px;
  color: #493c3b;
`;
