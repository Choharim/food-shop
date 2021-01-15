import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";

const Except = ({ food, order, setOrder }) => {
  /*
  [{
    foodName: "",
    totalPrice: 0,
    allergy: "",
    allergyText: "",
    except: [],
    add: [],
  }]
  */

  return (
    <Container>
      <Title>제외할 재료</Title>
      <BtnContainer>
        {food.ingredients.map((ing, index) => (
          <SmallButton key={index}>{ing}</SmallButton>
        ))}
      </BtnContainer>
    </Container>
  );
};

export default Except;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
