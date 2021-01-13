import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Data } from "Data";
import { useHistory } from "react-router-dom";

const Class = () => {
  let history = useHistory();
  const [step, setStep] = useState(1);
  const pageCount = Math.ceil(Data.length / 6);

  return (
    <ClassContainer>
      <HomeBtn onClick={() => history.push("/")} />
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
                    <ClassName>{foodClass.name} (Class)</ClassName>
                    <ClassContents>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <DiffText>난이도</DiffText>
                        {[...Array(foodClass.difficulty)].map((a, i) => (
                          <Fire key={i} />
                        ))}
                      </div>
                      <Price>{foodClass.price * 2} 원</Price>
                    </ClassContents>
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

const HomeBtn = styled(RiArrowGoBackLine)`
  align-self: flex-start;
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const ClassText = styled.span`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  /*
  &:nth-last-child(1) {
    justify-content: flex-start;
  }
  */
`;

const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ClassName = styled.span`
  margin: 10px 0 0 10px;
  font-size: 16px;
  color: #493c3b;
  font-weight: bolder;
`;

const ClassContents = styled.div`
  width: calc(100% - 20px);
  padding: 5px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DiffText = styled.span`
  margin-right: 5px;
  color: #493c3b;
  font-size: 13px;
`;

const Fire = styled(ImFire)`
  font-size: 1.1rem;
  color: #ff5733;
`;

const Price = styled.span`
  font-size: 16px;
  align-self: flex-end;
`;

const PageMoveBtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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
