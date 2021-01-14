import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import logo from "images/logo.png";
import basicProfile from "images/basicProfile.jpg";
import OneStep from "./_fragments/OneStep";
import TwoStep from "./_fragments/TwoStep";
import ThreeStep from "./_fragments/ThreeStep";
import ConfirmStep from "./_fragments/ConfirmStep";
import { Context } from "components/ContextProvider/ContextProvider";

const SingUp = () => {
  const { users, setUsers } = useContext(Context);
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [userObj, setUserObj] = useState({
    id: "",
    pw: "",
    name: "",
    extraAddress: "",
    zoneCode: "",
    address: "",
    phone: "",
    userPicture: basicProfile,
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users"))) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  const showPicture = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      setUserObj({ ...userObj, userPicture: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleChange = (input) => (e) => {
    setUserObj({ ...userObj, [input]: e.target.value });
  };
  const formContents = (step) => {
    switch (step) {
      case 1:
        return (
          <OneStep
            userObj={userObj}
            handleChange={handleChange}
            showPicture={showPicture}
          />
        );
      case 2:
        return <TwoStep userObj={userObj} handleChange={handleChange} />;
      case 3:
        return (
          <ThreeStep
            userObj={userObj}
            setUserObj={setUserObj}
            handleChange={handleChange}
          />
        );
      case 4:
        return <ConfirmStep userObj={userObj} />;
      default:
        return null;
    }
  };
  const checkValidaion = () => {
    if (
      step === 1 &&
      userObj.name !== "" &&
      userObj.phone !== "" &&
      userObj.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
      users.every((user) => user.phone !== userObj.phone)
    ) {
      return true;
    } else if (
      step === 2 &&
      userObj.id !== "" &&
      userObj.pw !== "" &&
      userObj.pw.length >= 4 &&
      userObj.pw.length <= 10 &&
      users.every((user) => user.id !== userObj.id)
    ) {
      return true;
    } else if (
      step === 3 &&
      userObj.zoneCode !== "" &&
      userObj.address !== "" &&
      userObj.extraAddress !== ""
    ) {
      return true;
    } else if (step === 4) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidaion()) {
      if (step === 4) {
        setUsers([...users, userObj]);
        setSignUpSuccess(true);
      } else {
        setStep(step + 1);
        setSignUpSuccess(false);
      }
    }
  };
  if (signUpSuccess) {
    localStorage.setItem("users", JSON.stringify(users));
    history.push("/");
  }

  return (
    <SignUpContainer>
      <BackBtn step={step} onClick={() => setStep(step - 1)} />
      <SignUpForm onSubmit={(e) => e.preventDefault()}>
        {step !== 4 && <Logo onClick={() => history.push("/")} />}
        {formContents(step)}
      </SignUpForm>
      <BigButton
        width="calc(100% - 120px)"
        type="submit"
        color={checkValidaion() ? "#9e8380" : "#d7d2cb"}
        onClick={handleSubmit}
      >
        {step !== 4 ? "다음" : "완료"}
      </BigButton>
    </SignUpContainer>
  );
};

export default SingUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BackBtn = styled(RiArrowGoBackLine)`
  align-self: flex-start;
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
  ${(props) =>
    props.step === 1 &&
    css`
      visibility: hidden;
    `}
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
  background-image: url(${logo});
  background-size: cover;
  cursor: pointer;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 120px);
  height: 100%;
  padding: 0 60px;
  margin-top: 180px;
`;
