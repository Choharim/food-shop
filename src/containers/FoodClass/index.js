import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Data } from "Data";
import { useHistory } from "react-router-dom";

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
        {[...Array(pageCount)].map(
          (n, page) =>
            step === page + 1 &&
            Data.map(
              (foodClass, index) =>
                index < 6 * (page + 1) &&
                index >= 6 * page && (
                  <ClassCard key={index} image={foodClass.image2}>
                    <ClassContents>
                      <ClassName>{foodClass.name}</ClassName>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {[...Array(foodClass.difficulty)].map((a, i) => (
                          <Fire key={i} />
                        ))}
                        {[...Array(5 - foodClass.difficulty)].map((a, i) => (
                          <FakeFire key={i} />
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

const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 48%;
  height: 210px;
  margin-bottom: 15px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  background-size: cover;
  border-radius: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  cursor: pointer;
`;

const ClassContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: calc(100% - 20px);
  margin: 0 10px 15px;
`;

const ClassName = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #fff;
`;

const Fire = styled(ImFire)`
  margin-left: 2px;
  font-size: 1.1rem;
  color: #ff5733;
`;

const FakeFire = styled(ImFire)`
  margin-left: 2px;
  font-size: 1.1rem;
  color: #e3e0db;
`;

const Price = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: #fff;
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
