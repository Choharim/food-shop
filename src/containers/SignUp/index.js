import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import logo from "images/logo.png";
import OneStep from "./_fragments/OneStep";
import TwoStep from "./_fragments/TwoStep";
import ThreeStep from "./_fragments/ThreeStep";

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
          "success"
        )}
      </SignUpForm>
      <PageMoveBtnContainer>
        <PrevBtn onClick={() => (step === 1 ? null : setStep(step - 1))} />
        <NextBtn onClick={() => (step === 4 ? null : setStep(step + 1))} />
      </PageMoveBtnContainer>
      <BigButton
        width="calc(100% - 120px)"
        type="submit"
        color={validation ? "#9e8380" : "#d7d2cb"}
      >
        확인
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

const Logo = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
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
  margin-top: 120px;
`;

const PageMoveBtnContainer = styled.div`
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const PrevBtn = styled(IoIosArrowBack)`
  padding: 2px;
  font-size: 2rem;
  cursor: pointer;
`;

const NextBtn = styled(IoIosArrowForward)`
  padding: 2px;
  font-size: 2rem;
  cursor: pointer;
`;
