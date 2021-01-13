import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import logo from "images/logo.png";
import OneStep from "./_fragments/OneStep";
import TwoStep from "./_fragments/TwoStep";
import ThreeStep from "./_fragments/ThreeStep";
import ConfirmStep from "./_fragments/ConfirmStep";

const SingUp = () => {
  let history = useHistory();
  const [userObj, setUserObj] = useState({
    id: "",
    pw: "",
    name: "",
    extraAddress: "",
    zoneCode: "",
    address: "",
    phone: "",
    userPicture: "",
  });
  const [validation, setValidation] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1 && userObj.name !== "" && userObj.phone !== "") {
      setValidation(true);
    } else if (step === 2 && userObj.id !== "" && userObj.pw !== "") {
      setValidation(true);
    } else if (
      step === 3 &&
      userObj.zoneCode !== "" &&
      userObj.address !== "" &&
      userObj.extraAddress !== ""
    ) {
      setValidation(true);
    } else if (step === 4) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [userObj, step]);

  const showPicture = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      setUserObj({ ...userObj, userPicture: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleChange = (input) => (e) => {
    setUserObj((pre) => ({ ...pre, [input]: e.target.value }));
  };

  return (
    <SignUpContainer>
      <BackBtn step={step} onClick={() => setStep(step - 1)} />
      <SignUpForm>
        <Logo onClick={() => history.push("/")} />
        {step === 1 ? (
          <OneStep
            userObj={userObj}
            handleChange={handleChange}
            showPicture={showPicture}
          />
        ) : step === 2 ? (
          <TwoStep userObj={userObj} handleChange={handleChange} />
        ) : step === 3 ? (
          <ThreeStep
            userObj={userObj}
            setUserObj={setUserObj}
            handleChange={handleChange}
          />
        ) : (
          <ConfirmStep userObj={userObj} />
        )}
      </SignUpForm>
      <BigButton
        width="calc(100% - 120px)"
        type="submit"
        color={validation ? "#9e8380" : "#d7d2cb"}
        onClick={() => validation && step !== 4 && setStep(step + 1)}
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
