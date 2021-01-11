import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Data } from "Data";

const Class = () => {
  const [step, setStep] = useState(1);
  const pageCount = Math.ceil(Data.length / 6);

  return (
    <ClassContainer>
      <ClassText>요리 수업</ClassText>
      <CardContainer>
        {[...Array(pageCount)].map(
          (n, page) =>
            step === page + 1 &&
            Data.map(
              (foodClass, index) =>
                index < 6 * (page + 1) &&
                index >= 6 * page && (
                  <ClassCard key={index}>
                    <ClassPicture image={foodClass.image2}></ClassPicture>
                    <ClassName>{foodClass.name}</ClassName>
                  </ClassCard>
                )
            )
        )}
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

export default Class;

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ClassText = styled.p`
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  /* &:nth-last-child(1) {
    justify-content: flex-start;
  }*/
`;

const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  cursor: pointer;
`;

const ClassPicture = styled.div`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ClassName = styled.span``;

const PageMoveBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 20px;
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
