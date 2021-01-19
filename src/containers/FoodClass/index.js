import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Data } from "Data";
import { useHistory } from "react-router-dom";
import ClassList from "./_fragments/ClassList";

const FoodClass = () => {
  let history = useHistory();
  const [step, setStep] = useState(1);
  const pageCount = Math.ceil(Data.length / 6);

  return (
    <ClassContainer>
      <HeadContainer>
        <HomeBtn onClick={() => history.push("/")} />
        <Title>요리 수업</Title>
      </HeadContainer>
      <CardContainer>
        <ClassList pageCount={pageCount} step={step} />
      </CardContainer>
      <PageMoveBtnContainer>
        <PrevBtn onClick={() => (step === 1 ? null : setStep(step - 1))} />
        <NextBtn
          onClick={() => (step === pageCount ? null : setStep(step + 1))}
        />
      </PageMoveBtnContainer>
    </ClassContainer>
  );
};

export default FoodClass;

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeadContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const HomeBtn = styled(RiArrowGoBackLine)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  margin: 20px 20px 0;
`;

const PageMoveBtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  max-width: 600px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
`;

const PrevBtn = styled(IoIosArrowBack)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const NextBtn = styled(IoIosArrowForward)`
  font-size: 1.5rem;
  cursor: pointer;
`;
