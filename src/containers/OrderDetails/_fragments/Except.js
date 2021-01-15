import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";

const Except = ({ food, order, setOrder, index }) => {
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
  let check;
  let copy = order.slice();

  const handleChoice = (index) => (e) => {
    if (e.target.value === "no") {
      copy[index].except = ["no"];
    } else {
      if (order[index].except.some((item) => item === e.target.value)) {
        check = order[index].except.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].except = check;
      } else {
        check = order[index].except.filter((item) => item !== "no");
        copy[index].except = check;
        copy[index].except.push(e.target.value);
      }
    }

    setOrder(copy);
  };

  console.log(order);
  return (
    <Container>
      <HeadContainer>
        <Title>제외할 재료</Title>
        <CheckBoxContainer>
          <CheckBoxLabel>없음</CheckBoxLabel>
          <CheckBox
            type="checkbox"
            name="except"
            value="no"
            onChange={handleChoice(index)}
            checked={copy[index].except.some((item) => item === "no")}
          />
        </CheckBoxContainer>
      </HeadContainer>
      <BtnContainer>
        {food.ingredients.map((ing, i) => (
          <SmallButton
            key={i}
            color={
              order[index].except.some((item) => item === ing)
                ? "#b89995"
                : "#d7d2cb"
            }
            name="except"
            value={ing}
            onClick={handleChoice(index)}
          >
            {ing}
          </SmallButton>
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

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  font-size: 13px;
  color: #7d6765;
`;
const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
