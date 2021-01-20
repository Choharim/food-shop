import React from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ClassPeople = ({ setFoodClass, foodClass }) => {
  const handleMinus = () => {
    if (foodClass.people !== 1) {
      setFoodClass({ ...foodClass, people: foodClass.people - 1 });
    }
  };

  const handlePlus = () => {
    setFoodClass({ ...foodClass, people: foodClass.people + 1 });
  };

  return (
    <Container>
      <Text>인원수를 선택하세요</Text>
      <BtnContainer>
        <MinusBtn onClick={handleMinus} />
        <PeopleCount>{foodClass.people}</PeopleCount>
        <PlusBtn onClick={handlePlus} />
      </BtnContainer>
    </Container>
  );
};

export default ClassPeople;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Text = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PeopleCount = styled.span`
  font-size: 17px;
  font-weight: bolder;
  color: #493c3b;
`;

const MinusBtn = styled(AiOutlineMinus)`
  padding: 1px;
  margin-right: 25px;
  background-color: #b89995;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const PlusBtn = styled(AiOutlinePlus)`
  padding: 1px;
  margin-left: 25px;
  background-color: #b89995;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;
