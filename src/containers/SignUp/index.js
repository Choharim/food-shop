import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import OneStep from "./_fragments/OneStep";

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
      <BackBtn onClick={() => history.push("/")} />
      <SignUpForm>
        {step === 1 && (
          <OneStep
            userObj={userObj}
            handleChange={handleChange}
            showPicture={showPicture}
          />
        )}
      </SignUpForm>
      <PageMoveBtnContainer>
        <PrevBtn onClick={() => (step === 1 ? null : setStep(step - 1))} />
        <NextBtn onClick={() => (step === 3 ? null : setStep(step + 1))} />
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

const BackBtn = styled(RiArrowGoBackLine)`
  align-self: flex-start;
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 120px);
  height: 100%;
  padding: 0 60px;
  margin-top: 100px;
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
